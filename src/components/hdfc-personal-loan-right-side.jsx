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
            <h2><strong>Check Your HDFC Bank Loan Eligibility</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Get instant approval from India&rsquo;s No. 1 Bank</li>
                <li>Benefit from a trusted and secure application process</li>
                <li>Disbursal in as fast as 4 hours for non-HDFC customers</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
                <li><strong>Age:</strong> 21 to 60 years</li>
                <li><strong>Minimum Monthly Income:</strong>
                    <ul style={{marginTop: '10px',listStyleType: 'circle', paddingLeft: '20px'}}>
                        <li><strong>₹35,000</strong> and above (For HDFC Bank Salary Account Holders)</li>
                        <li><strong>₹40,000</strong> and above (For other applicants)</li>
                    </ul>
                </li>
                <li><strong>Credit Score:</strong> 720+ preferred for best rates, but new-to-credit applicants (CIBIL -1/0) are also encouraged to apply.</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits of HDFC Bank Personal Loans</h3>
                <ul className="custom-list">
                    <li><strong>No End-Use Restrictions</strong> &mdash; Use for travel, a wedding, a medical emergency, home renovation &amp; more.</li>
                    <li><strong>Loan Amount: ₹1,00,000 to ₹40,00,000</strong> (subject to eligibility).</li>
                    <li><strong>Flexible Tenures:</strong> 12 to 84 months (1 to 7 years).</li>
                    <li><strong>Minimal Documentation</strong> &mdash; Especially for existing HDFC Bank customers.</li>
                    <li><strong>Attractive Interest Rates</strong> starting at <strong>10.50% p.a.</strong></li>
                    <li><strong>Quick Disbursal</strong> &mdash; Funds can be transferred in just 4 hours.</li>
                    <li><strong>Instant Pre-approved Loans</strong> available for eligible HDFC Bank customers.</li>
                    <li><strong>Trusted Brand</strong> &mdash; Backed by the security and trust of HDFC Bank.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Apply for an HDFC Loan via LoanMoney?</h3>
                <ul className="custom-list">
                    <li><strong>End-to-End Guidance:</strong> We assist you through the entire HDFC Bank application process.</li>
                    <li><strong>Door to door service</strong> (if required for documentation).</li>
                    <li><strong>100% Contactless &amp; Paperless</strong> digital process available.</li>
                    <li><strong>Plan B Ready:</strong> If ineligible for HDFC Bank, we can check offers from our 25+ other partners instantly.</li>
                    <li><strong>After-sales service</strong> to help you with any queries post-disbursal.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Understanding APR (Annual Percentage Rate)</h3>
                <p style={{paddingTop: '10px'}}>The APR represents the total cost of your loan, including interest and processing fees, shown as a single annual rate. This helps you compare different loan offers transparently.</p>
                <p style={{paddingTop: '10px'}}><strong>Representative Example for an HDFC Bank Loan:</strong></p>
                <ul className="custom-list">
                    <li>Loan Amount: ₹1,00,000</li>
                    <li>Interest Rate: 10.50% p.a. (Reducing Balance)</li>
                    <li>Tenure: 12 Months (1 Year)</li>
                    <li>Processing Fee: 1.5% = ₹1,500</li>
                    <li>Total Interest Payable: ₹5,733 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹7,233 (Interest + Processing Fee)</li>
                    <li><strong>Effective APR: ~13.56%</strong></li>
                </ul>
                <p><em>Typical APR Range for HDFC Bank Personal Loans: 11% - 24%</em></p>
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
                    <p>LoanMoney, operated by Vintage Credit and Leasing Pvt. Ltd., is an authorized channel partner for HDFC Bank Personal Loans. All loan approvals are subject to HDFC Bank&rsquo;s internal policies, credit assessment, and the applicant&rsquo;s eligibility.</p>
                    <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the Reserve Bank of India (RBI) as a Non-Banking Financial Company (NBFC).</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default AxisBankSide;