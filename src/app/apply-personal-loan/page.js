
import Image from "next/image";
import CryptoJS from 'crypto-js'
import ApplyPLForm from "@/components/ApplyPersonalLoan/ApplyPLForm";

const SECRET_KEY = '673C9BC13BC4E';

import logo from "../../../public/images/logo.png";
const page = ({ searchParams }) => {
   const { data, utm_source, utm_medium, utm_campaign, utm_term, utm_content, utm_id } = searchParams
   let decryptedData = null
    if (data) {
        try {
        const bytes = CryptoJS.AES.decrypt(decodeURIComponent(data), SECRET_KEY)
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8)
        decryptedData = JSON.parse(decryptedText)
        } catch (err) {
        console.error('Decryption error:', err)
        }
    }
    return (
        <div id="_apply_pl" style={{ backgroundColor: "#cde5f7" }}>
            <div className="full_container">
                <Image src={logo} alt="Logo" width={200} height={47} />
                <ApplyPLForm
                 mobile={decryptedData?.mobile || ''}
                applicationNo={decryptedData?.applicationNo || ''}
                utms={{
                    utm_source,
                    utm_medium,
                    utm_campaign,
                    utm_term,
                    utm_content,
                    utm_id,
                }}
                />
                <p className="copyright">Copyright © 2025 loanmoney.co All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default page;