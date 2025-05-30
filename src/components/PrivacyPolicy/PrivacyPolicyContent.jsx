import Copyright from "@/components/Copyright";
import CallNow from "@/components/CallNow";
const PrivacyPolicyContent = () => {
    return (
        <div className="right_container">
        <CallNow />
        <section className="right_section">
          <div className="title">
            <h2><strong>Privacy Policy</strong></h2>
          </div>
          <p class="info">This privacy policy sets out how Loanmoney.co uses and protects any information that you give Loanmoney.co when you use this website.</p>
          <p class="info">Loanmoney.co is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</p>
          <p class="info">Loanmoney.co may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 8th of June, 2016.</p>
          <h3 class="title2" style={{paddingTop: "20px"}}>What do we collect?</h3>
          <ul className="custom-list">
            <li>Name and job title</li>
            <li>Contact information including email address</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>
          <h3 class="title2" style={{paddingTop: "20px"}}>What do we do with the information we gather?</h3>
          <p class="info">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
          <ul className="custom-list">
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, services, special offers, or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax, or mail. We may use the information to customize the website according to your interests.</li>
          </ul>
          <h3 class="title2" style={{paddingTop: "20px"}}>Security</h3>
          <p class="info">Loanmoney.co will not sell or rent your Personal Information to anyone, for any reason, at any time. We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
          <p class="info">If you believe that any information we are holding on you is incorrect or incomplete, please email us as soon as possible, at info@Loanmoney.co. We will promptly correct any information found to be incorrect.</p>
          <div style={{ margin: "40px 0" }}>
            <Copyright />
          </div>
        </section>
        </div>
    );
};

export default PrivacyPolicyContent;