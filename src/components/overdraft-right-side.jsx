import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const OverdraftRightSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2>Check best deal for <strong>Personal Loan Overdraft Against Your Salary</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Call Now: <a href="tel:+91-8800-499-981">&nbsp; +91-8800-499-981</a></li>
                <li>Check Overdraft Offers from 25+ Lending Partners</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
                <li>Salaried Professionals in Private or Government Sector</li>
                <li>Age: 23 to 58 years</li>
                <li>Monthly Income: ₹50,000</li>
                <li>Credit Score: 700+ preferred</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits</h3>
                <ul className="custom-list">
                    <li>Flexi Loan Limit: ₹5,00,000 to ₹10,00,000</li>
                    <li>Attractive Interest Rates starting at 13.50% p.a.</li>
                    <li>Pay Interest Only on the Amount Utilized</li>
                    <li>Withdraw &amp; Repay Anytime &ndash; Just Like a Credit Line</li>
                    <li>Minimal Documentation</li>
                    <li>Tenure Options from 12 to 60 Months</li>
                    <li>Instant Approval | 2-Hour Disbursal for Eligible Profiles</li>
                    <li>NIL Foreclosure or Prepayment Charges</li>
                    <li>Suitable for Emergency, Travel, or Lifestyle Spending</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Choose LoanMoney?</h3>
                <ul className="custom-list">
                    <li>Compare Overdraft Plans from 25+ Banks &amp; NBFCs</li>
                    <li>100% Digital &amp; Paperless Process</li>
                    <li>Flexible Credit Usage with No End-Use Restrictions</li>
                    <li>Dedicated Support from Application to Disbursal</li>
                    <li>Refer &amp; Earn Option Available</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">APR (Annual Percentage Rate) Understanding</h3>
                <p style={{paddingTop: '10px'}}><strong>APR Includes:</strong></p>
                <ul className="custom-list">
                    <li>Interest on Utilized Amount</li>
                    <li>Processing Charges</li>
                    <li>Documentation Fees (if any)</li>
                </ul>
                <p style={{paddingTop: '10px'}}><strong>Example:</strong></p>
                <ul className="custom-list">
                    <li>Overdraft Limit Approved: ₹2,00,000</li>
                    <li>Amount Utilized: ₹50,000</li>
                    <li>Interest Rate: 13.50% p.a.</li>
                    <li>Tenure: 12 Months</li>
                    <li>Interest Payable (approx.): ₹3,369</li>
                    <li>Processing Fee: ₹1,000</li>
                    <li>Total Cost: ₹4,369</li>
                    <li>Effective APR: ~8.7%</li>
                    <li>Typical APR Range: 13.50% &ndash; 35%</li>
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
                <p>The brand name LoanMoney is solely owned and operated by <strong>Vintage Credit and Leasing Pvt. Ltd.</strong></p>
                <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the <strong>Reserve Bank of India (RBI)</strong> as a <strong>Non-Banking Financial Company (NBFC).</strong></p>
                <p>Unauthorized use of the LoanMoney brand is strictly prohibited and may result in legal action.</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default OverdraftRightSide;