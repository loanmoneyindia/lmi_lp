
import Image from "next/image";
import ApplyPLForm from "@/components/apply-personal-loan/apply-form";

import logo from "../../../public/images/logo.png";
const page = () => {
   
    return (
        <div id="_apply_pl" style={{ backgroundColor: "#cde5f7" }}>
            <div className="full_container">
                <Image src={logo} alt="Logo" width={200} height={47} />
                <ApplyPLForm />
                <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "20px", paddingTop: "8px", fontSize: "14px", fontWeight: "600", color: "#333"  }}>Copyright © 2025 loanmoney.co All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default page;