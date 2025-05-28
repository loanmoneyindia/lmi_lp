'use client'
import CryptoJS from 'crypto-js'

const SECRET_KEY = '673C9BC13BC4E';

const ApplyPLForm = ({ searchParams }) =>{
 if (searchParams?.data) {
    try {
      const bytes = CryptoJS.AES.decrypt(decodeURIComponent(searchParams.data), SECRET_KEY)
      const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
      mobile = decrypted.mobile
      applicationno = decrypted.applicationno
    } catch (err) {
      console.error('Decryption failed:', err)
    }
  }

  const utm_source = searchParams?.utm_source || ''
  const utm_medium = searchParams?.utm_medium || ''

    return(
        <div className="form-container">
            <h1 className="form-title">Apply for Personal Loan</h1>
            <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "30px", fontSize: "14px", fontWeight: "600", color: "#f5f8cf"  }}>Share your details and talk with our experts to get an instant decision on your loan.</p>
            <form>
                <p>Application No: {applicationno}</p>
                <div className="form-group">
                    <div className="form-field">
                        <input type="text" id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="form-field">
                        <input type="text" id="phone" name="phone" placeholder="Mobile Number" value={mobile} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select>
                            <option value="">Select Location</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <select>
                            <option value="">Type of Employement</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select>
                            <option value="">Select Monthly Income</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <input type="text" id="company" name="company" placeholder="Company Name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-field">
                        <input type="text" id="name" name="name" placeholder="Loan Amount Require" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-field">
                        <select>
                            <option value="">Preferred Bank</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ApplyPLForm;