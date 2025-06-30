import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const CallNowForMobile = () => {
    return(
        <div className="call_now_footer">
            <div className="call_now_text">
            <div style={{color:"#FFF"}}>Call Now: +91-8800-499-981</div>
            <div className="whatsapp"><Link href="https://api.whatsapp.com/send?phone=+918800499981&text=Dear LoanMoney, I am connected to you through website. I need Loan and require its information. Kindly help me out." target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></Link></div>
            <div className="phone" style={{backgroundColor: "#80a4c5"}}><Link href="tel:+918800499981" target="_blank"><FontAwesomeIcon icon={faPhone} /></Link></div>
            <div className="phone" style={{backgroundColor: "#b30707"}}><Link href="mailto:info@loanmoney.co"><FontAwesomeIcon icon={faEnvelope} /></Link></div>
            </div>
        </div>
    );
};

export default CallNowForMobile;