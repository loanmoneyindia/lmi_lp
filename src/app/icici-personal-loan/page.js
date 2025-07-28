import Image from "next/image";
import RightSide from "@/components/icici-personal-loan-right-side";
import logo from "../../../public/images/logo.png";
import personal_loan from "../../../public/images/personal_loan.svg";
import CallNowForMobile from "@/components/CallNowForMobile";

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
               <h1>Instant Personal Loan from ICICI Bank</h1>
              <div className="left_feature">
               <ul className="custom-list2">
                    <li>Interest Rates starting from <strong>10.60% p.a.</strong></li>
                    <li>Get a loan of up to <strong> ₹50 Lakhs</strong></li>
                    <li>Flexible tenure up to <strong> 72 months</strong></li>
                </ul>
              </div>
              <h4><a href="tel:+91-8800-499-981"><strong>Call Now: +91-8800-499-981</strong></a></h4>
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
