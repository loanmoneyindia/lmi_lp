import Image from "next/image";

import logo from "../../../public/images/logo.png";
const page = () => {
    return (
        <div id="_apply_pl" style={{ backgroundColor: "#cde5f7" }}>
            <div className="full_container">
                <Image src={logo} alt="Logo" width={200} height={47} />
                <div className="form-container">
                    <h1 className="form-title">Apply for Personal Loan</h1>
                    <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "30px", fontSize: "14px", fontWeight: "600", color: "#f5f8cf"  }}>Share your details and talk with our experts to get an instant decision on your loan.</p>
                    <form>
                        <div className="form-group">
                            <div className="form-field">
                                <input type="text" id="name" name="name" placeholder="Your name" />
                            </div>
                            <div className="form-field">
                                <input type="text" id="phone" name="phone" placeholder="Mobile Number" />
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
                <p style={{ textAlign: "center", lineHeight: "1.4", paddingBottom: "20px", paddingTop: "8px", fontSize: "14px", fontWeight: "600", color: "#333"  }}>Copyright © 2025 loanmoney.co All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default page;