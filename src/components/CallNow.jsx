import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CallNow = () => {
    return(
        <section className="call_now">
          <div style={{color:"#800000"}}>Call Now: +91-8800-499-981</div>
          <div className="whatsapp"><Link href="https://api.whatsapp.com/send?phone=+918800499981&text=Dear LoanMoney, I am connected to you through website. I need Loan and require its information. Kindly help me out." target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></Link></div>
          <div className="phone"><Link href="tel:+918800499981" target="_blank"><FontAwesomeIcon icon={faPhone} /></Link></div>
        </section>
    )
};

export default CallNow;