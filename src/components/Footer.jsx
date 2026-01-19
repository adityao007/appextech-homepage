import './Footer.css'

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container footer-grid">
      <div>
        <h4>Company</h4>
        <ul className="footer-links">
          <li>About Appextech</li>
          <li>Appextech Blog</li>
          <li>Customer Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h4>Help</h4>
        <ul className="footer-links">
          <li>Terms of Services</li>
          <li>Service Level Agreement (SLA)</li>
          <li>Privacy Policy</li>
          <li>Remote Support Terms and Conditions</li>
          <li>Right of Withdrawal</li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul className="footer-contact-list">
          <li>
            B-1/49, SECOND FLOOR, C-5 WOHAN
            COOPERATIVE INDUSTRIAL ESTATE,
            NEW DELHI-110044, India
          </li>
          <li>+91-9990437261</li>
          <li>info@appextech.com</li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <div className="footer-social">
          <span className="social-icon">f</span>
          <span className="social-icon">t</span>
          <span className="social-icon">in</span>
          <span className="social-icon">p</span>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <span>© Copyright © 2026, Appextech Software Solutions All Rights Reserved.</span>
        <span>› Sitemap &nbsp;&nbsp; › Contact Us</span>
      </div>
    </div>
  </footer>
)

export default Footer
