import './Services.css'

const principles = [
  {
    title: 'Strategy',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 13c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3h6c1.66 0 3 1.34 3 3v1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21l-3-3H11c-1.66 0-3-1.34-3-3v-3c0-1.66 1.34-3 3-3h6c1.66 0 3 1.34 3 3v7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      'We make a Strategic planning to achieve the right goals and targets.'
  },
  {
    title: 'Plan Everything',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    description:
      'We create a plan that establishes the correct parameters and illustrates exactly what needs to happen.'
  },
  {
    title: 'Work Hard',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 7h9v6a4.5 4.5 0 0 1-9 0z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8h3a2.5 2.5 0 0 1 0 5h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 19h11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Success requires hard work. We do work so hard because we strive for success.'
  },
  {
    title: 'Deliver Quality',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20s-7-4.4-7-9.3C5 7.6 7.1 5.5 9.6 5.5c1.4 0 2.8.7 3.6 1.9.8-1.2 2.2-1.9 3.6-1.9 2.5 0 4.6 2.1 4.6 5.2 0 4.9-7 9.3-7 9.3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      'Our goal is to provide and deliver Higher Quality service all the time.'
  }
]

const services = [
  {
    title: 'Website Design',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 20l6.6-6.6 3.9 3.9L7.9 23H4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 6.5l3.9 3.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15.8 4.2l3.9 3.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    description:
      'Web Designing at Appextech is an art of delivering high quality, professional looking websites with just the right blend of text, graphics and animation.'
  },
  {
    title: 'E-Commerce Website',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 5h2l2.4 10.5a1.2 1.2 0 0 0 1.2.9h8.6a1.2 1.2 0 0 0 1.2-.9L21 8H7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="20" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    description:
      'Appextech one of the leading eCommerce web development company in India offers eCommerce web development services in India at affordable price.'
  },
  {
    title: 'Software Development',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10l-2 2 2 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10l2 2-2 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 16h4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Our Software development services help you address evolving business and technology challenges by defining, designing and building applications tailored to meet your business requirements.'
  },
  {
    title: 'Mobile App Design',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="17" r="0.9" fill="currentColor" />
      </svg>
    ),
    description:
      'We have highly skilled and enthusiastic mobile app developers, who can develop highly customized, user-friendly and feature-rich applications at affordable price.'
  },
  {
    title: 'Graphic Design',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20c4-2 8-6 10-10l6 6c-4 2-8 4-12 4H4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4l6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Compelling graphic images, Unique content and Appealing visuals to display every pixel of your business in full essence with ideas-driven design.'
  },
  {
    title: 'Website Maintenance',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7l4 4-5 5a3 3 0 0 1-1-2 3 3 0 0 1 2-2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6l-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 10l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 4l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    description:
      'Our support and maintenance solutions can assist with updating content, hosting solutions and backing up the data through our different hosting solutions.'
  }
]

const Services = () => (
  <>
    <section className="section who" id="services">
      <div className="container">
        <div className="section-heading">
          <h2>Who We Are</h2>
          <p>
            Appextech has expertise to provide technology-enabled services to leverage the business with new c
            hallenges. Our core competencies are Web design, Web development, Software development, IT Outsourcing, 
            SEO and various IT service paradigm. Our philosophy is to deliver quality services within budget and 
            scheduled time frame with agility of solution to meet fluid business requirement. We believe in innovate 
            the IT services to evolve the client business and customize the solution to meet the dynamism of business 
            processes. We have strategic alliance with the leading technology providers.
          </p>
        </div>

        <div className="who-grid">
          {principles.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="feature-icon feature-icon--symbol">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section services" id="services-list">
      <div className="container">
        <div className="section-heading light">
          <h2>Our Services</h2>
          <p>
            Flexible engagement models across design, development, and growth marketing to
            match your exact business goals.
          </p>
        </div>
        <div className="services-grid">
          {services.map((item) => (
            <div className="service-card" key={item.title}>
              <div className="service-head">
                <span className="service-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Services
