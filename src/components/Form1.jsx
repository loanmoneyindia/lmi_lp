'use client'
import Image from "next/image";
import { useState } from "react";
import MobileNumberForm from "./MobileNumberForm";
import VerifyOTP from "./VerifyOTP";

const Form1 = () => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [mobile, setMobile] = useState('');
    const [applicationNo, setApplicationNo] = useState('');

    const handleMobileSuccess = (mobile, applicationNo) => {
        setMobile(mobile);
        setApplicationNo(applicationNo);
        setShowOtpForm(true);
    };

    const handleOtpVerified = () => {
        // Move to next step, show success, redirect, etc.
        console.log("OTP verified for:", mobile);
    };

    return (
        <>
            {!showOtpForm ? (
                <MobileNumberForm onSuccess={handleMobileSuccess} />
            ):(
                <VerifyOTP mobile={mobile} applicationNo={applicationNo} onVerified={handleOtpVerified} />
            )}
        </>
    );
}

export default Form1;