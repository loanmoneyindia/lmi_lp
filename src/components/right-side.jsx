import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

import bullets from "../../public/images/check-mark.png";
const RightSide = () => {
    return(
        <section className="right_section">
          <div className="title">
            <h2>Check best deal for <strong>Personal Loan</strong></h2>
          </div>
          <div className="right_feature">
            <ul>
            <li><div className="right_pointer"><Image src={bullets} alt="Bullet" width={28} height={28} /></div>Overdraft limit against your salary</li>
            <li><div className="right_pointer"><Image src={bullets} alt="Bullet" width={28} height={28} /></div>Offers from 25+ lenders</li>
            <li><div className="right_pointer"><Image src={bullets} alt="Bullet" width={28} height={28} /></div>Loan disbursement in just 2 hours</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <div className="flex">
                <div className="item">Criteria</div>
                <div className="item">Requirement</div>
            </div>
            <div className="flex">
                <div className="item">Age</div>
                <div className="item">23 to 58 years</div>
            </div>
            <div className="flex">
                <div className="item">Monthly Income</div>
                <div className="item">₹25,000 and above (Salaried individuals)</div>
            </div>
            <div className="flex">
                <div className="item">Credit Score</div>
                <div className="item">700+ preferred for quicker approval</div>
            </div>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits of Personal Loans</h3>
                <ul className="custom-list">
                    <li>No End-Use Restrictions &mdash; Use for travel, wedding, medical, home renovation &amp; more</li>
                    <li>Loan Amount: ₹1,00,000 to ₹50,00,000 (subject to lender discretion)</li>
                    <li>Flexible Tenures: 12 to 96 months (1 to 8 years)</li>
                    <li>Minimal Documentation &mdash; Apply quickly online</li>
                    <li>Attractive Interest Rates starting at 10.49% p.a.</li>
                    <li>Quick Disbursal &mdash; Funds transferred within 2 hours</li>
                    <li>Eligible customers get instant pre-approved loans</li>
                    <li>Avail Attractive Loans with Nil Processing Fee on Select Offers</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Choose LoanMoney?</h3>
                <ul className="custom-list">
                    <li>Compare offers from 30+ Banks &amp; NBFCs</li>
                    <li>Get Pre-Approved Loan Offers Within 2 Hours</li>
                    <li>Instant Sanction &amp; Fast Disbursal</li>
                    <li>100% Contactless &amp; Paperless Process</li>
                    <li>Special Offers with Nil Processing Fee Available</li>
                    <li>Transparent APR &amp; No Hidden Charges</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Understanding APR (Annual Percentage Rate)</h3>
                <p style={{paddingTop: '10px'}}><strong>APR includes:</strong></p>
                <ul className="custom-list">
                    <li>Interest Rate</li>
                    <li>Processing Fee</li>
                    <li>Documentation Charges</li>
                    <li>Other Origination Costs</li>
                </ul>
                <p style={{paddingTop: '10px'}}><strong>Example:</strong></p>
                <ul className="custom-list">
                    <li>Loan Amount: ₹1,00,000</li>
                    <li>Interest Rate: 10.49% p.a.</li>
                    <li>Tenure: 12 Months (1 Year)</li>
                    <li>Processing Fee: 1% = ₹1,000</li>
                    <li>Total Interest Payable: ₹10,269 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹11,269 (Interest + Processing Fee)</li>
                    <li>Effective APR: 11.06%</li>
                    <li>Typical APR Range: 10.49% &ndash; 35%</li>
                </ul>
          </div>
          <div className="container2">
                <h3 className="title2">Get in Touch</h3>
                <p className="info">Vintage Credit and Leasing Pvt Ltd</p>
                <p className="info">Head Office: B-520, Tower B, Logix Technova, Plot No. 44, Sector &ndash; 132, Noida &ndash; 201305, Uttar Pradesh <Link href="https://g.co/kgs/srtAatt" target="_blank"><FontAwesomeIcon icon={faLocationDot} /></Link></p>
                <p className="info">Branch Office: B-134, Third Floor, DDA Shed, Okhla Industrial Area, Phase &ndash; 1, New Delhi &ndash; 110020 <Link href="https://g.co/kgs/MZ6rg8i" target="_blank"><FontAwesomeIcon icon={faLocationDot} /></Link></p>
          </div>
          <div className="container2">
            <h3 className="title2">Follow Us Online</h3>
                <ul className="social-icons">
                    <li className="facebook"><Link href="https://www.facebook.com/Loanmoney.co.in" target=""><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                    <li className="instagram"><Link href="https://www.instagram.com/loanmoney.co.in/" target=""><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link href="https://x.com/_LoanMoney" target=""><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                    <li className="linkedin"><Link href="https://www.linkedin.com/company/loanmoney" target=""><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                    <li className="pinterest"><Link href="https://in.pinterest.com/loanmoney_/" target=""><FontAwesomeIcon icon={faPinterestP} /></Link></li>
                    <li className="youtube"><Link href="https://www.youtube.com/@LoanMoneyYT" target=""><FontAwesomeIcon icon={faYoutube} /></Link></li>
                </ul>
          </div>
          <div className="disclaimer">
            <h3 className="title2">Disclaimer</h3>
                <p>LoanMoney is a digital loan aggregator platform connecting borrowers with multiple lending partners. Loan approvals depend on lender policies, credit evaluation, and applicant eligibility.</p>
          </div>
          <p className="copyright">Copyright © 2025 loanmoney.co All Rights Reserved.</p>
        </section>
    );
}

export default RightSide;