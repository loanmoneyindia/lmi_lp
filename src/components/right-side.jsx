import Image from "next/image";
import Form1 from "./Form1";
import Link from "next/link";
import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
import { Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faLinkedinIn, faPinterestP, faYoutube } from "@fortawesome/free-brands-svg-icons";

const RightSide = () => {
    return(
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2>Check best deal for <strong>Personal Loan</strong></h2>
          </div>
          <div className="right_feature">
            <ul className="custom-list">
                <li>Get overdraft limit against your salary</li>
                <li>Check offers from 25+ lenders</li>
                <li>Get loan disbursement in just 2 hours</li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
          <Form1 />
          </Suspense>
          <div className="container">
            <h3 className="title2">Who Can Apply?</h3>
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
                    <li>Compare offers from 25+ Banks & NBFCs</li>
                    <li>Door to door service (if required)</li>
                    <li>100% Contactless & Paperless Process</li>
                    <li>Special Offers with Nil Processing Fee Available</li>
                    <li>Refer and earn options</li>
                    <li>After sales service</li>
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
                    <li>Typical APR Range: 10.49% - 35%</li>
                </ul>
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
                <p>LoanMoney is a digital loan aggregator platform that connects borrowers with multiple lending partners. All loan approvals are subject to the lending partner&apos;s internal policies, credit assessment, and applicant eligibility.</p>
                <p>The brand name LoanMoney is solely owned and operated by <strong>Vintage Credit and Leasing Pvt. Ltd.</strong> Vintage Credit and Leasing Pvt. Ltd. </p>
                <p>Vintage Credit and Leasing Pvt. Ltd. (Registration No: 14.01406) is registered with the <strong>Reserve Bank of India (RBI)</strong> as a <strong>Non-Banking Financial Company (NBFC)</strong> and is authorized to conduct NBFC-related financial services.</p>
                <p>Unauthorized use of the LoanMoney brand name, assets, or identity is strictly prohibited and may result in legal action.</p>
          </div>
          <Copyright />
        </section>
        </div>
    );
}

export default RightSide;