'use client';
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import flag from "../../public/images/indian_flag.svg";

const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
});

const MobileNumberForm = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(mobileSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://www.loanmoney.co.in/lmi_apis/send_otp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer a8d5f4e2b6c7a1f9d0e3g7h2k8l6m1z9",
        },
        body: JSON.stringify({ mobile: '91' + data.mobile }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        onSuccess(result.mobile, result.applicationno);
      } else {
        alert(result.message || "Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mobileForm">
      <div className="form-group">
        <label className="label">Mobile Number</label>
        <div className="mobile-input-wrapper">
          <div className="country-code">
            <Image src={flag} alt="Indian Flag" width={28} height={28} />
            <span>+91</span>
          </div>
          <span className="dash">-</span>
          <input type="text" {...register('mobile')} placeholder="XXXXXXXXXX" />
          <div className="digit-count">10 Digits</div>
        </div>
        {errors.mobile && (
          <div className="error-message">{errors.mobile.message}</div>
        )}
      </div>
      <button type="submit" className="form_btn">Proceed</button>
    </form>
  );
};

export default MobileNumberForm;
