import './Marketing.css'

const marketing = [
  {
    title: 'SEO Optimization',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15.5 15.5l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tone: 'seo',
    description:
      'Appextech provides to its clients ethical, effective and proven methods of search engine optimization resulting in top rankings in most major search engines. Providing services which banks on the essential combination of flexible methodology.'
  },
  {
    title: 'Google Ads',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="18" fontFamily="'Inter', sans-serif" fill="currentColor">G</text>
      </svg>
    ),
    tone: 'google',
    description:
      'Appextech specializes in increasing the ROI for your business through the pay per click (ppc) management services. Our PPC management experts work diligently with you to meet and exceed your company marketing needs.'
  },
  {
    title: 'Facebook Ads',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="18" fontFamily="'Space Grotesk', sans-serif" fill="currentColor">f</text>
      </svg>
    ),
    tone: 'facebook',
    description:
      'Advertising your business on Facebook is a cost-effective solution for a range of marketing objectives. From increasing page likes and website clicks - to increasing conversions and sales. We create Facebook Ad campaigns that deliver.'
  },
  {
    title: 'LinkedIn Ads',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <text x="12" y="16" textAnchor="middle" fontSize="18" fontFamily="'Space Grotesk', sans-serif" fill="currentColor">in</text>
      </svg>
    ),
    tone: 'linkedin',
    description:
      'Interested in targeting your clients more specifically and directly? Our LinkedIn marketing services strategies are designed to bring you one step closer to your b2b clients, and expand your business. There is an entire network both local and global.'
  }
]

import bulkMail from '../assets/bulk-mail.png'
import money from '../assets/money.jpg'
import dashboard from '../assets/email-marketing-services-india.png'

const Marketing = () => (
  <>
    <section className="section marketing" id="marketing">
      <div className="container">
        <div className="section-heading">
          <h2>Marketing Solutions</h2>
        
        </div>
        <div className="marketing-grid">
          {marketing.map((item) => (
            <div className="marketing-card" key={item.title}>
              <div className={`marketing-icon marketing-icon--${item.tone}`}>{item.icon}</div>
              <h3>
                <span className={`marketing-title marketing-title--${item.tone}`}>{item.title}</span>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section email" id="products">
      <div className="container email-grid">
        <div className="email-content">
          <h2>Email Marketing</h2>
          <h3>Email Marketing Done Properly is Hugely Effective.</h3>
          <p>
            Email marketing remains one of the highest ROI channels when done with smart
            segmentation, crisp messaging, and consistent testing. We help you launch
            campaigns that feel personal, automated, and revenue generating.
          </p>
          <div className="email-actions">
           
            <button className="btn ghost" type="button">
              Read More
            </button>
          </div>
        </div>
        <div className="email-visual">
          <div className="email-collage">
            <img className="email-collage-mail" src={bulkMail} alt="Email marketing" />
            <img className="email-collage-money" src={money} alt="Revenue growth" />
            <img className="email-collage-dashboard" src={dashboard} alt="Marketing dashboard" />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Marketing
