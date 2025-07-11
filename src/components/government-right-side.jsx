import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const GovtRightSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2>Check best deal for <strong>Personal Loan for Government Employees</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Call Now: <a href="tel:+91-8800-499-981">&nbsp; +91-8800-499-981</a></li>
                <li>Compare offers from 25+ Banks & NBFCs</li>
                <li>Special Overdraft Limit for Government Employees</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
                <li>Central &amp; State Government Employees</li>
                <li>Public Sector Undertaking (PSU) Employees</li>
                <li>Age: 23 to 58 years</li>
                <li>Monthly Income: ₹25,000 & Above</li>
                <li>Credit Score: 700+ preferred</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits</h3>
                <ul className="custom-list">
                    <li>Use for any purpose: Wedding, Travel, Medical, Home Renovation &amp; more</li>
                    <li>Loan Amount: ₹1 Lakh to ₹50 Lakhs</li>
                    <li>Flexible Tenure: 12 to 96 months</li>
                    <li>Minimal Documentation &ndash; Apply online</li>
                    <li>Attractive ROI starting at 10.25% p.a.</li>
                    <li>Disbursal within 2 hours</li>
                    <li>Pre-approved offers for eligible government employees</li>
                    <li>Nil processing fee on select lenders</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Choose LoanMoney?</h3>
                <ul className="custom-list">
                    <li>Compare loan offers from 25+ Banks &amp; NBFCs</li>
                    <li>Dedicated assistance for government employees</li>
                    <li>Doorstep service available (optional)</li>
                    <li>100% Contactless &amp; Paperless Process</li>
                    <li>After Sales Support</li>
                    <li>Refer &amp; Earn Program</li>
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
                    <li>Interest Rate: 10.25% p.a.</li>
                    <li>Tenure: 12 Months</li>
                    <li>Processing Fee: ₹1,000</li>
                    <li>Total Interest Payable: ₹5,653 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹6,493</li>
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
                <p>The brand name LoanMoney is solely owned and operated by <strong>Vintage Credit and Leasing Pvt. Ltd.</strong></p>
                <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the <strong>Reserve Bank of India (RBI)</strong> as a <strong>Non-Banking Financial Company (NBFC).</strong></p>
                <p>Unauthorized use of the LoanMoney brand is strictly prohibited and may result in legal action.</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default GovtRightSide;