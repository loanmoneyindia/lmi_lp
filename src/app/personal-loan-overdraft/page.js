import Image from "next/image";
import RightSide from "@/components/overdraft-right-side.jsx";
import logo from "../../../public/images/logo.png";
import personal_loan from "../../../public/images/personal_loan.svg";
import CallNowForMobile from "@/components/CallNowForMobile";

export const metadata = async () => {
  return {
      title: 'Personal Loan Overdraft - Flexible Credit Line at Low Interest | LoanMoney',
      description: 'Personal Loan Overdraft - Flexible Credit Line at Low Interest | LoanMoney',
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
          <div className="left_content overdraft_left_side">
            <div className="leftInfo">
               <h1>Personal Loan Overdraft Against Your Salary</h1>
              <div className="left_feature">
               <ul className="custom-list2">
                 <li>Flexi Overdraft Limit Approved Based on Monthly Income</li>
                 <li>Interest Only on Used Amount | No Prepayment Charges</li>
                 <li>Instant Disbursal | 100% Paperless Process</li>
                 <li>ROI Starting from 13.50% p.a.</li>
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
