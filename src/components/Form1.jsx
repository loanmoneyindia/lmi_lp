'use client'
import Image from "next/image";
import { useState } from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
});

const otpSchema = Yup.object().shape({
  otp: Yup.string().required('OTP is required').matches(/^\d{4,6}$/, 'Invalid OTP'),
});

import flag from "../../public/images/indian_flag.svg";
const Form1 = () => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [mobile, setMobile] = useState('');
    const [applicationNo, setApplicationNo] = useState('');

    const {
        register: registerMobile,
        handleSubmit: handleSubmitMobile,
        formState: { errors: errorsMobile },
    } = useForm({
        resolver: yupResolver(mobileSchema),
    });

    const {
        register: registerOtp,
        handleSubmit: handleSubmitOtp,
        formState: { errors: errorsOtp },
    } = useForm({
        resolver: yupResolver(otpSchema),
    });

    const onSubmitMobile = async (data) => {
        try {
        const response = await fetch("https://www.loanmoney.co.in/lmi_apis/send_otp.php", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer a8d5f4e2b6c7a1f9d0e3g7h2k8l6m1z9", // must match backend
            },
            body: JSON.stringify({
            mobile: '91' + data.mobile, // with country code
            }),
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
            setMobile(result.mobile);
            setApplicationNo(result.applicationno);
            setShowOtpForm(true);
        } else {
            alert("Failed to send OTP. Try again.");
            console.error(result);
        }
        } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Something went wrong.");
        }
    };

    const onSubmitOtp = (data) => {
        console.log("Entered OTP:", data.otp);
        console.log("Mobile:", mobile);
        console.log("Application No:", applicationNo);

        // Call PHP verification API here (optional)
    };

    return (
        <>
            {!showOtpForm ? (
                <form name="mobileForm" onSubmit={handleSubmitMobile(onSubmitMobile)} className="form">
                <div className="form-group">
                <label className="label">Mobile Number</label>
                <div className="mobile-input-wrapper">
                    <div className="country-code">
                    <Image src={flag} alt="Indian Flag" width={28} height={28} />
                    <span>+91</span>
                    </div>
                    <span className="dash">-</span>
                    <input
                    type="text"
                    id="mobile"
                    {...registerMobile('mobile')}
                    placeholder="XXXXXXXXXX"
                    />
                    <div className="digit-count">10 Digits</div>
                </div>
                {errorsMobile.mobile && (
                <div className="error-message">Please enter valid mobile number</div>
                )}
                </div>
                <button type="submit" className="form_btn">Proceed</button>
                </form>
            ):(
                <form name="otpForm" onSubmit={handleSubmitOtp(onSubmitOtp)} className="form">
                <div className="form-group">
                    <label className="label">Enter OTP</label>
                    <input
                    type="text"
                    id="otp"
                    {...registerOtp('otp')}
                    placeholder="Enter OTP"
                    />
                    {errorsOtp.otp && (
                    <div className="error-message">{errorsOtp.otp.message}</div>
                    )}
                </div>

                {/* Hidden fields */}
                <input type="hidden" value={mobile} {...registerOtp('mobile')} />
                <input type="hidden" value={applicationNo} {...registerOtp('applicationno')} />

                <button type="submit" className="form_btn">Submit</button>
                </form>
            )}
        </>
    );
}

export default Form1;