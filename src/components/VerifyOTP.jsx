'use client';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const otpSchema = Yup.object().shape({
  otp: Yup.string().required('OTP is required').matches(/^\d{4,6}$/, 'Invalid OTP'),
});

const VerifyOTP = ({ mobile, applicationNo, onVerified }) => {
  const [loading, setLoading] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(otpSchema) });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://www.loanmoney.co.in/lmi_apis/verify_otp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer a8d5f4e2b6c7a1f9d0e3g7h2k8l6m1z9",
        },
        body: JSON.stringify({
          mobile: mobile,
          applicationno: applicationNo,
          otp: data.otp,
        }),
      });

      const result = await response.json();
      console.log(result);
      if (result.status === "success") {
        alert("OTP Verified Successfully!");
        onVerified();
      } else {
        alert(result.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="verify_otp">
      <p style={{fontSize: '14px',background:"#349334", color:"white", padding:"14px", borderRadius:"5px"}}>You will receive an OTP via WhatsApp</p>
      <div className="form-group">
        <label className="label">Enter OTP</label>
        <input type="text" {...register('otp')} placeholder="Enter OTP" />
        {errors.otp && <div className="error-message">{errors.otp.message}</div>}
      </div>

      {/* Hidden fields */}
      <input type="hidden" value={mobile} {...register('mobile')} />
      <input type="hidden" value={applicationNo} {...register('applicationno')} />

      <button type="submit" className="form_btn" disabled={loading}>
        {loading ? "Please wait..." : "Submit"}
      </button>
    </form>
  );
};

export default VerifyOTP;
