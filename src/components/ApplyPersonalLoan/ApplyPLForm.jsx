'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from 'react';
import { useRouter  } from 'next/navigation';

import {citiesList, MonthlyIncome, typeOfEmployment, BanKNameList} from "@/data/FormValues"


const schema = Yup.object().shape({
  Name: Yup.string()
    .required('Mobile number is required'),
  Phone: Yup.string()
    .required('Mobile number is required'),
  City: Yup.string()
    .required('City is required'),
  loan_type: Yup.string()
    .required('Type of Employement is required'),
   Net_Salary: Yup.string()
    .required('Monthly Income is required'),
   Net_Salary: Yup.string()
    .required('Monthly Income is required'),  
   Property_Loc: Yup.string()
    .required('Company Name is required'), 
   email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'), 
   Loan_Amount: Yup.string()
    .required('Loan Amount is required'),  
   captchaAnswer: Yup.string()
    .required('CAPTCHA is required')
    .test('captcha-match', 'Incorrect CAPTCHA', function (value) {
        const expected = this.parent.expectedCaptcha;
        return parseInt(value, 10) === expected;
    }),
    expectedCaptcha: Yup.number().required(),
});

const ApplyPLForm = ({ mobile, applicationNo, utms }) =>{
    const [captchaQuestion, setCaptchaQuestion] = useState('');
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
        City: "",
        Net_Salary: "",
        loan_type: "",
        preferredbank: "",
    });

    const router = useRouter();


    const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    } = useForm({ 
        resolver: yupResolver(schema)
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const num1 = Math.floor(Math.random() * 10 + 1);
        const num2 = Math.floor(Math.random() * 10 + 1);
        setCaptchaQuestion(`${num1} + ${num2}`);
        setValue('expectedCaptcha', num1 + num2); // Set in form state (not via input)

        setValue('utm_source', utms?.utm_source || '');
        setValue('utm_medium', utms?.utm_medium || '');
        setValue('utm_campaign', utms?.utm_campaign || '');
        setValue('utm_term', utms?.utm_term || '');
        setValue('utm_content', utms?.utm_content || '');
        setValue('utm_id', utms?.utm_id || '');
        setValue('applicationno', applicationNo || '');
        setValue('Phone', mobile || '');
        
    }, [setValue, utms, applicationNo, mobile]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch("https://www.loanmoney.co.in/lmi_apis/apply_personal_loan.php", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer a8d5f4e2b6c7a1f9d0e3g7h2k8l6m1z9",
                },
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            
            if (response.ok && result.status === "success") {
                const finalUrl = `/thank-you?applicationno=${result.applicationno}`;
                router.push(finalUrl);
            } else {
                alert(result.message || "Invalid OTP");
            }

        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("Something went wrong.");
        }
    };
    
    return(
        <div className="form-container">
            <h1 className="form-title">Apply for Personal Loan</h1>
            <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "30px", fontSize: "14px", fontWeight: "600", color: "#f5f8cf"  }}>Share your details and talk with our experts to get an instant decision on your loan.</p>
            <form onSubmit={handleSubmit(onSubmit)} >
                
                <input type="hidden" {...register("utm_source")} />
                <input type="hidden" {...register("utm_medium")} />
                <input type="hidden" {...register("utm_campaign")} />
                <input type="hidden" {...register("utm_term")} />
                <input type="hidden" {...register("utm_content")} />
                <input type="hidden" {...register("utm_id")} />
                <input type='hidden' {...register("applicationno")} />

                <div className="form-group">
                    <div className="form-field">
                        <input type="text" id="name" {...register("Name")} placeholder="Your name" />
                        {errors.Name && (
                            <div className="error-message">{errors.Name.message}</div>
                        )}
                    </div>
                    <div className="form-field">
                        <input type="text" id="phone" {...register("Phone")} placeholder="Mobile Number" readOnly />
                        {errors.Phone && (
                            <div className="error-message">{errors.Phone.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select {...register("City")} onChange={handleChange}>
                            <option value="">Select Location</option>
                            {citiesList.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        {errors.City && (
                            <div className="error-message">{errors.City.message}</div>
                        )}
                    </div>
                    <div className="form-field">
                        <select {...register("loan_type")} onChange={handleChange}>
                            <option value="">Type of Employement</option>
                            {typeOfEmployment.map((loanType) => (
                                <option key={loanType} value={loanType}>{loanType}</option>
                            ))}
                        </select>
                        {errors.loan_type && (
                            <div className="error-message">{errors.loan_type.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select {...register("Net_Salary")} onChange={handleChange}>
                            <option value="">Select Monthly Income</option>
                            {Object.entries(MonthlyIncome).map(([key, salary]) => (
                                <option key={key} value={key}>{salary}</option>
                            ))}
                        </select>
                        {errors.Net_Salary && (
                            <div className="error-message">{errors.Net_Salary.message}</div>
                        )}
                    </div>
                    <div className="form-field">
                        <input type="text" id="company" {...register("Property_Loc")} placeholder="Company Name" />
                        {errors.Property_Loc && (
                            <div className="error-message">{errors.Property_Loc.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <input type="email" id="email" {...register("email")} placeholder="Email" />
                        {errors.email && (
                            <div className="error-message">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="form-field">
                        <input type="text" id="name" {...register("Loan_Amount")} placeholder="Loan Amount Require" />
                        {errors.Loan_Amount && (
                            <div className="error-message">{errors.Loan_Amount.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select {...register("preferredbank")} onChange={handleChange}>
                            <option value="">Preferred Bank</option>
                            {BanKNameList.map((bank) => (
                                <option key={bank} value={bank}>{bank}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-field">
                        <div style={{display: "flex", justifyContent: "space-between",flexDirection: "row", gap: "10px" }}>
                        <div className='captchaQuestion' style={{width: "50%", border: "1px solid #ccc", padding: "5px", display: "flex", justifyContent: "center", justifyContent: "center", alignItems: "center",color: "#FFF", fontSize: "18px",height: "42px"}}>{captchaQuestion}</div>
                        <input type="number" {...register('captchaAnswer')}  style={{width: "50%",height: "42px",padding: "0 10px",border: "1px solid #ccc",fontSize: "16px",color: "#333",borderRadius: "2px"}} />
                        </div>
                        {errors.captchaAnswer && (
                            <div className="error-message">{errors.captchaAnswer.message}</div>
                        )}
                    </div>
                </div>
                <input type="hidden" {...register('expectedCaptcha')} />
                <div className='form-button'>
                    <button type="submit" style={{width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#FFC107", border: "none", color: "#000", fontSize: "18px",fontWeight: "bold", cursor: "pointer"}}  disabled={loading}>{loading ? "Please wait..." : "Apply Now"}</button>
                </div>
            </form>
        </div>
    )
};

export default ApplyPLForm;