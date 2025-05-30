import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
import Copyright from "@/components/Copyright";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThankYou = () => {
    return (
        <div id="_thank_you" style={{ backgroundColor: "#cde5f7" }}>
            <div className="full_container">
                <div className="thanks_container">
                <Image src={logo} alt="Logo" width={200} height={47} />
                <h1 style={{fontSize: "40px",padding: "20px 0"}}>Thank You</h1>
                <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "20px", paddingTop: "8px", fontSize: "16px", fontWeight: "600", color: "#333"}}>Thank you for contacting with us. We have received your query. <br />Our Team will get back to you soon.</p>
                <section className="call_now2">
                    <div style={{color:"#800000",fontWeight: "600"}}>Call Now: +91-8800-499-981</div>
                    <div className="icons">
                    <div className="whatsapp"><Link href="https://api.whatsapp.com/send?phone=+918800499981&text=Dear LoanMoney, I am connected to you through website. I need Loan and require its information. Kindly help me out." target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></Link></div>
                    <div className="phone"><Link href="tel:+918800499981" target="_blank"><FontAwesomeIcon icon={faPhone} /></Link></div>
                    </div>
                </section>
                </div>
                <Copyright />   
            </div>
        </div>
    );
};

export default ThankYou;