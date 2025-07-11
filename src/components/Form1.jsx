'use client'
import Image from "next/image";
import { useState } from "react";
import MobileNumberForm from "./MobileNumberForm";
import VerifyOTP from "./VerifyOTP";
import CryptoJS from 'crypto-js';
import { useRouter, useSearchParams  } from 'next/navigation';

const SECRET_KEY = '673C9BC13BC4E';

const Form1 = () => {
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [mobile, setMobile] = useState('');
    const [applicationNo, setApplicationNo] = useState('');

    const router = useRouter()
    const searchParams = useSearchParams()

    const handleMobileSuccess = (mobile, applicationNo) => {
        setMobile(mobile);
        setApplicationNo(applicationNo);
        setShowOtpForm(true);
    };

    const handleOtpVerified = () => {
        console.log("OTP verified for:", mobile);

        let pageSlug = '';
        if (typeof window !== 'undefined') {
            const pathSegments = window.location.pathname.split('/').filter(Boolean); // removes empty segments
            pageSlug = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'index';
        }
        
        const payload = JSON.stringify({ mobile, applicationNo, pageSlug }); 
        const cipherText = CryptoJS.AES.encrypt(payload, SECRET_KEY).toString();
        console.log("CipherText:", cipherText);
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
        const utmQuery = utmKeys.map((key) => {
        const value = searchParams.get(key)
        return value ? `${key}=${encodeURIComponent(value)}` : null
        })
        .filter(Boolean)
        .join('&');
        const finalUrl = `/apply-personal-loan?data=${encodeURIComponent(cipherText)}${utmQuery ? `&${utmQuery}` : ''}`;
        router.push(finalUrl);
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