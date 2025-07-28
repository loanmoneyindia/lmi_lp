import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const AxisBankSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2><strong>Get the Best Deal on an Axis Bank Loan</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Benefit from a simple and quick digital application process</li>
                <li>Approvals available for salaried individuals with income starting from just ₹30,000</li>
                <li>Fast disbursal directly to your bank account</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
              <li><strong>Age:</strong> 23 to 58 years</li>
              <li><strong>Minimum Monthly Income:</strong> <strong>₹30,000</strong> and above (Salaried individuals)</li>
              <li><strong>Credit Score:</strong> 720+ preferred for best rates, but new-to-credit applicants (CIBIL -1/0) are also encouraged to apply.</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits of Axis Bank Personal Loans</h3>
                <ul className="custom-list">
                    <li><strong>No End-Use Restrictions</strong> &mdash; Freedom to use the loan for any personal need: wedding, vacation, gadget purchase, or debt consolidation.</li>
                    <li><strong>Loan Amount: up to ₹40,00,000</strong> (subject to eligibility).</li>
                    <li><strong>Flexible Tenures:</strong> Choose a comfortable repayment period from 12 to 84 months.</li>
                    <li><strong>Minimal Documentation</strong> &mdash; A simple and hassle-free application process.</li>
                    <li><strong>Attractive Interest Rates</strong> starting at just <strong>49% p.a.</strong></li>
                    <li><strong>Quick Disbursal</strong> &mdash; Get the funds you need without unnecessary delays.</li>
                    <li><strong>Balance Transfer Option:</strong> Transfer your existing high-interest personal loans to Axis Bank for better rates.</li>
                    <li><strong>Trusted Service</strong> from one of India&rsquo;s leading private sector banks.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Apply for an Axis Bank Loan via LoanMoney?</h3>
                <ul className="custom-list">
                    <li><strong>Expert Guidance:</strong> We help you navigate the Axis Bank application from start to finish.</li>
                    <li><strong>Door to door service</strong> (if required).</li>
                    <li><strong>100% Contactless &amp; Paperless</strong> process is available for your convenience.</li>
                    <li><strong>Compare &amp; Choose:</strong> If you&rsquo;re not eligible for Axis Bank, we can find you the next best offer from our 25+ other lending partners.</li>
                    <li><strong>Dedicated After-sales service</strong> for any support you need after the loan is disbursed.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Understanding APR (Annual Percentage Rate)</h3>
                <p style={{paddingTop: '10px'}}>The APR shows you the total annual cost of your loan, including interest and fees, as a single percentage. It helps you accurately understand the cost of borrowing.</p>
                <p style={{paddingTop: '10px'}}><strong>Representative Example for an Axis Bank Loan:</strong></p>
                <ul className="custom-list">
                    <li>Loan Amount: ₹1,00,000</li>
                    <li>Interest Rate: 10.65% p.a. (Reducing Balance)</li>
                    <li>Tenure: 12 Months (1 Year)</li>
                    <li>Processing Fee: 1.5% = ₹1,500</li>
                    <li>Total Interest Payable: ₹5,773 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹7,273 (Interest + Processing Fee)</li>
                    <li><strong>Effective APR: ~13.36%</strong></li>
                </ul>
                <p><em>Typical APR Range for Axis Bank Personal Loans: 11.25% - 25%</em></p>
          </div>
          <div className="container2">
                <h3 className="title2">Get in Touch</h3>
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
                <p>LoanMoney, operated by Vintage Credit and Leasing Pvt. Ltd., is an authorized channel partner for Axis Bank Personal Loans. All loan approvals are subject to Axis Bank&rsquo;s internal policies, credit assessment, and the applicant&rsquo;s eligibility.</p>
                <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the Reserve Bank of India (RBI) as a Non-Banking Financial Company (NBFC).</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default AxisBankSide;