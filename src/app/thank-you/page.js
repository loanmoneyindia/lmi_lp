import Image from "next/image";
import logo from "../../../public/images/logo.png";

const ThankYou = () => {
    return (
        <div id="_thank_you" style={{ backgroundColor: "#cde5f7" }}>
            <div className="full_container">
                <div style={{height: "300px", display: "flex", justifyContent: "center", alignItems: "center",flexDirection: "column"}}>
                <Image src={logo} alt="Logo" width={200} height={47} />
                <h1 style={{fontSize: "40px",padding: "20px 0"}}>Thank You</h1>
                <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "20px", paddingTop: "8px", fontSize: "16px", fontWeight: "600", color: "#333"}}>Thank you for contacting with us. We have received your query. <br />Our Team will get back to you soon.</p>
                </div>
                <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "20px", paddingTop: "8px", fontSize: "14px", fontWeight: "600", color: "#333"  }}>Copyright © 2025 loanmoney.co All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default ThankYou;