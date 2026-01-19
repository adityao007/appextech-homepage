import './Hosting.css'

const hosting = [
  {
    title: 'Domain Name',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 5c2.4 2.5 2.4 11.5 0 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Domain name registration just got easier with Appextech. Find the most suitable domain name with our advanced domain name search tool.'
  },
  {
    title: 'Web Hosting',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="14" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="5" y="10" width="14" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="5" y="15" width="14" height="4" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    description:
      'Appextech is a provider of secure and easy website hosting services. Discover why thousands of customers trust us to handle their hosting needs.'
  },
  {
    title: 'VPS',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 10h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9 14h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Appextech VPS Hosting. A VPS server from Appextech will give you the power, control, security & support you need. Top quality VPS web hosting services.'
  },
  {
    title: 'Dedicated Server',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="4" width="10" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    description:
      'Appextech offers Dedicated Hosting Server at affordable cost. We Provides Best Managed Dedicated Server Hosting Services.'
  }
]

const reasons = [
  {
    title: '24x7 Support',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 5v7l4 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: 'Our support team are available 24 Hours x 7 Days to carefully helping you in your queries.'
  },
  {
    title: '99.9% Uptime',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="16" r="0.9" fill="currentColor" />
      </svg>
    ),
    description: 'We understand your website is vital for your business. All our hosting plans come with a promise of 99.9% uptime.'
  },
  {
    title: '30 Day Money Back',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4l6 2v6c0 4-2.8 6.8-6 8-3.2-1.2-6-4-6-8V6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9.5 12l2 2 3-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description: 'We are highly confident in our service. However, if you are dissatisfied with our web hosting services, you can request a refund within 30 days of your purchase.'
  },
  {
    title: 'Secure and Reliability',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4l6 2v6c0 4-2.8 6.8-6 8-3.2-1.2-6-4-6-8V6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 9v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="15.5" r="0.9" fill="currentColor" />
      </svg>
    ),
    description: 'With Appextech behind your web site, you can be rest assured that your site will be up and ready, just like you’d expect.'
  }
]

const Hosting = () => (
  <>
    <section className="section hosting" id="hosting">
      <div className="container">
        <div className="section-heading">
          <h2>Hosting Services</h2>
          
        </div>
        <div className="hosting-grid">
          {hosting.map((item) => (
            <div className="hosting-card" key={item.title}>
              <div className="hosting-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="text-link" type="button">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section why" id="security">
      <div className="container">
        <div className="section-heading">
          <h2>Why Choose Appextech As Your Web Hosting Provider</h2>
        </div>
        <div className="why-grid" id="why">
          {reasons.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Hosting
