import Image from "next/image";
import RightSide from "@/components/government-right-side.jsx";
import logo from "../../../public/images/logo.png";
import personal_loan from "../../../public/images/personal_loan.svg";
import CallNowForMobile from "@/components/CallNowForMobile";

export const metadata = async () => {
  return {
      title: 'Personal Loan for Government Employees - LoanMoney',
      description: 'Personal Loan for Government Employees',
  };
};

export default function Home() {
  return (
    <div id="_loanmoney_lp">
      <div className="main_container">
        <section className="left-section">
          <header>
            <div className="lp_logo">
              <Image src={logo} alt="Logo" width={200} height={47} />
            </div>
          </header>
          <div className="left_content">
            <div className="leftInfo">
               <h1>Personal Loan for Government Employees</h1>
              <div className="left_feature">
               <ul className="custom-list2">
                  <li>Lowest Interest Rate Starting at 10.25% p.a.</li>
                  <li>EMI as low as ₹1,531 per ₹1 Lac</li>
                  <li>No Processing Fee | No Foreclosure Charges</li>
                  <li>Get up to 30X of your monthly salary</li>
                  <li>Fast Disbursal in 2 Hours*</li>
                </ul>
              </div>
            </div>
            <div className="lp_image_container">
              <Image src={personal_loan} alt="Personal Loan" width={700} height={300} className="lp_image" />
            </div>
          </div>
        </section>
        <RightSide />
      </div>
      <CallNowForMobile />
    </div>
  );
}
