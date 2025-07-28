import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const IciciBankSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2><strong>Apply for an ICICI Bank Personal Loan</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Get instant approval with a 100% digital process</li>
                <li>Benefit from one of India&rsquo;s most trusted banking networks</li>
                <li>Funds disbursed directly to your account in minutes</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
            <ul className="govt-list">
              <li><strong>Age:</strong> 23 to 58 years</li>
              <li><strong>Minimum Monthly Income:</strong> <strong>₹30,000</strong> and above (for salaried individuals)</li>
              <li><strong>Credit Score:</strong> 725+ preferred for the best offers</li>
            </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Features & Benefits of ICICI Bank Personal Loans</h3>
                <ul className="custom-list">
                    <li><strong>No End-Use Restrictions</strong> &mdash; Complete freedom to use the funds for any personal requirement, be it a medical emergency, wedding, or vacation.</li>
                    <li><strong>Large Loan Amount:</strong> Get financing from <strong>₹1,00,000 up to ₹50,00,000</strong>.</li>
                    <li><strong>Extended Repayment Tenure:</strong> Choose a comfortable repayment plan from 12 to <strong>72 months</strong> (6 years).</li>
                    <li><strong>Fully Digital Process</strong> &mdash; Apply from anywhere with a completely paperless journey.</li>
                    <li><strong>Attractive Interest Rates</strong> starting at just <strong>10.60% p.a.</strong></li>
                    <li><strong>Minimal Documentation</strong> required for a quick and easy process.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Why Apply for an ICICI Bank Loan via LoanMoney?</h3>
                <ul className="custom-list">
                    <li><strong>Simplified Application:</strong> We make the ICICI Bank loan application process smooth and hassle-free.</li>
                    <li><strong>Door to door service</strong> (if required for verification).</li>
                    <li><strong>100% Contactless &amp; Paperless</strong> digital journey available.</li>
                    <li><strong>Find Your Best Fit:</strong> If your ICICI application isn&rsquo;t approved, we&rsquo;ll help you find the next best loan from our 25+ other banking partners.</li>
                    <li><strong>Complete Support</strong> with our dedicated after-sales service team.</li>
                </ul>
          </div>
          <div className="container2">
            <h3 className="title2">Understanding APR (Annual Percentage Rate)</h3>
                <p style={{paddingTop: '10px'}}>The APR, or Annual Percentage Rate, shows the total yearly cost of your loan as a single number, including interest and processing fees. It&rsquo;s the best way to understand the true cost of borrowing.</p>
                <p style={{paddingTop: '10px'}}><strong>Representative Example for an ICICI Bank Loan:</strong></p>
                <ul className="custom-list">
                    <li>Loan Amount: ₹1,00,000</li>
                    <li>Interest Rate: 10.60% p.a. (Reducing Balance)</li>
                    <li>Tenure: 12 Months (1 Year)</li>
                    <li>Processing Fee: 2% = ₹2,000</li>
                    <li>Total Interest Payable: ₹5,834 (approx.)</li>
                    <li>Total Cost of Borrowing: ₹7,834 (Interest + Processing Fee)</li>
                    <li><strong>Effective APR: ~14.44%</strong></li>
                </ul>
                <p><em>Typical APR Range for ICICI Bank Personal Loans: 11.5% - 26%</em></p>
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
                <p>LoanMoney, operated by Vintage Credit and Leasing Pvt. Ltd., is an authorized business partner and distributor for ICICI Bank Personal Loans. All loan applications are processed and approved at the sole discretion of ICICI Bank Ltd.</p>
                <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the Reserve Bank of India (RBI) as a Non-Banking Financial Company (NBFC).</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default IciciBankSide;