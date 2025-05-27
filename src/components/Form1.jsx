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
})

import flag from "../../public/images/indian_flag.svg";
const Form1 = () => {
    const [showOtpForm, setShowOtpForm] = useState(false)
    const [otp, setOtp] = useState('')
    const [mobile, setMobile] = useState('')

    const {
        register: registerMobile,
        handleSubmit: handleSubmitMobile,
        formState: { errors: errorsMobile },
    } = useForm({
        resolver: yupResolver(mobileSchema),
    });

    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString()
    }
    
    const onSubmit = (data) => {
        console.log('Mobile:', data.mobile)
    }

    return (
        <form name="mobileForm" onSubmit={handleSubmitMobile(onSubmit)} className="form">
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
    );
}

export default Form1;