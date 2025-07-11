import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const eliteRightSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2>Check best deal for <strong>Personal Loan for Elite Customers</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Call Now: <a href="tel:+91-8800-499-981">&nbsp; +91-8800-499-981</a></li>
                <li>Tailored Loan Offers from 25+ Banks & NBFCs</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
                <li>Salaried or Self-Employed Elite Professionals</li>
                <li>Age: 23 to 68 years</li>
                <li>Monthly Income: ₹75,000 and above</li>
                <li>Credit Score: 725+ preferred</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits</h3>
                <ul className="custom-list">
                    <li>Use for Travel, Luxury Purchases, Medical, Lifestyle or Investments</li>
                    <li>Loan Amount: ₹5 Lakhs to ₹50 Lakhs</li>
                    <li>Tenure: 12 to 96 months</li>
                    <li>Minimal Documentation | VIP Handling</li>
                    <li>Attractive Interest Rates starting at 10.25% p.a.</li>
                    <li>2-Hour Disbursal for Eligible Profiles</li>
                    <li>Dedicated Relationship Manager</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Choose LoanMoney?</h3>
                <ul className="custom-list">
                    <li>Access to Premium Loan Offers from 25+ Banks &amp; NBFCs</li>
                    <li>Customised Loan Solutions for High-Net-Worth Individuals</li>
                    <li>100% Digital Process</li>
                    <li>Priority Service &amp; Faster Approvals</li>
                    <li>Refer &amp; Earn Privileges</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Understanding APR (Annual Percentage Rate)</h3>
                <p style={{paddingTop: '10px'}}><strong>APR Includes:</strong></p>
                <ul className="custom-list">
                    <li>Interest Rate</li>
                    <li>Processing Fee</li>
                    <li>Documentation Charges</li>
                    <li>Other Origination Costs</li>
                </ul>
                <p style={{paddingTop: '10px'}}><strong>Example:</strong></p>
                <ul className="custom-list">
                    <li>Loan Amount: ₹5,00,000</li>
                    <li>Interest Rate: 10.25% p.a.</li>
                    <li>Tenure: 12 Months</li>
                    <li>Processing Fee: ₹5,000 (1%)</li>
                    <li>Interest Payable: ₹28,269 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹33,269</li>
                    <li>Effective APR: ~13.01%</li>
                    <li>Typical APR Range: 10.25% &ndash; 35%</li>
                </ul>
          </div>
          <div className="container2">
                <h3 className="title2">Contact Information</h3>
                <p className="info" style={{fontWeight: 'bold'}}>Vintage Credit and Leasing Pvt Ltd</p>
                <p className="info"><span style={{fontWeight: 'bold'}}>Head Office:</span> B-520, Tower B, Logix Technova, Plot No. 44, Sector - 132, Noida - 201305, Uttar Pradesh <Link href="https://g.co/kgs/srtAatt" target="_blank"><FontAwesomeIcon icon={faLocationDot} /></Link></p>
                <p className="info"><span style={{fontWeight: 'bold'}}>Branch Office:</span> B-134, Third Floor, DDA Shed, Okhla Industrial Area, Phase - 1, New Delhi - 110020 <Link href="https://g.co/kgs/MZ6rg8i" target="_blank"><FontAwesomeIcon icon={faLocationDot} /></Link></p>
                <p className="info"><span style={{fontWeight: 'bold'}}>Email:</span> <Link href="mailto:info@loanmoney.co" target="_blank">info@loanmoney.co</Link></p>
          </div>
          <div className="container2">
            <h3 className="title2">Follow Us Online</h3>
                <ul className="social-icons">
                    <li className="facebook"><Link href="https://www.facebook.com/Loanmoney.co.in" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                    <li className="instagram"><Link href="https://www.instagram.com/loanmoney.co.in/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link href="https://x.com/_LoanMoney" target="_blank"><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                    <li className="linkedin"><Link href="https://www.linkedin.com/company/loanmoney" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                    <li className="pinterest"><Link href="https://in.pinterest.com/loanmoney_/" target="_blank"><FontAwesomeIcon icon={faPinterestP} /></Link></li>
                    <li className="youtube"><Link href="https://www.youtube.com/@LoanMoneyYT" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                </ul>
          </div>
          <div className="disclaimer">
            <h3 className="title2">Disclaimer</h3>
                <p>LoanMoney is a digital loan aggregator platform that connects borrowers with multiple lending partners. All loan approvals are subject to the lender’s internal policies, credit assessment, and applicant eligibility.</p>
                <p>LoanMoney is owned and operated by Vintage Credit and Leasing Pvt. Ltd., registered with RBI as an NBFC (Reg. No: 14.01406).</p>
                <p>Unauthorized use of the LoanMoney brand is strictly prohibited and may lead to legal action.</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default eliteRightSide;