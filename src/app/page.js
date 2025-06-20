import Image from "next/image";
import RightSide from "@/components/right-side";

import logo from "../../public/images/logo.png";
import personal_loan from "../../public/images/personal_loan.svg";
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
              <h1>Personal Loan</h1>
              <div className="left_feature">
                <ul className="custom-list2">
                  <li>Lowest ROI of 10.49%</li>
                  <li>EMI of Rs. 1543/- per Lac</li>
                  <li>Nil closer & Processing Fee</li>
                  <li>Maximum tenure 96 months</li>
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
