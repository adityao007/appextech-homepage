import './Header.css'

const navItems = [
  {
    label: 'Services',
    href: '#services',
    items: [
      'Data Warehousing & Business Intelligence Services',
      'Website Design & Development',
      'e-Commerce Website Design & Development',
      'Software Development',
      'Mobile App Design & Development',
      'Graphic Design',
      'Website Maintenance',
    ],
  },
  {
    label: 'Marketing Solution',
    href: '#marketing',
    mega: true,
    columns: [
      {
        title: 'Digital Marketing',
        items: ['SEO', 'Google Adwords', 'Facebook Ads', 'LinkedIn Ads'],
      },
      {
        title: 'Email Marketing',
        items: ['Email Marketing', 'Send emails to thousands of clients at once'],
        isCopy: true,
      },
      {
        title: 'Branding',
        items: ['Content Strategy', 'Campaign Planning', 'Social Media'],
      },
    ],
    media:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=480&q=80',
  },
  {
    label: 'Products',
    href: '#products',
    items: ['Learning Management System'],
  },
  {
    label: 'Domain',
    href: '#domain',
    items: ['Register New Domain Name', 'Transfer Domain to us'],
  },
  {
    label: 'Hosting',
    href: '#hosting',
    mega: true,
    columns: [
      {
        title: 'Linux Shared Hosting',
        items: ['Single Domain Hosting', 'Multi Domain Hosting'],
      },
      {
        title: 'Linux Reseller Hosting',
        items: ['Linux Reseller Hosting'],
      },
      {
        title: 'Windows Shared Hosting',
        items: ['Single Domain Hosting', 'Multi Domain Hosting'],
      },
      {
        title: 'Windows Reseller Hosting',
        items: ['Windows Reseller Hosting'],
      },
      {
        title: 'Specialized Hosting',
        items: ['Magento Hosting', 'Wordpress Hosting', 'CMS Hosting'],
      },
      {
        title: 'Email Hosting',
        items: ['Business Email', 'Enterprise Email'],
      },
      {
        title: 'Web Solutions',
        items: ['Hosting Transfer', 'Restore Backups'],
      },
    ],
    media:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=520&q=80',
  },
  {
    label: 'Server',
    href: '#server',
    items: ['Dedicated Server', 'Cloud VPS', 'Server Management'],
  },
  { label: 'Security', href: '#security' },
  { label: 'Contact', href: '#contact' ,items:['Enquire now','Career @appextech']},
]

const Header = () => (
  <>
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-pill">
            <span className="topbar-icon">✉</span>
            info@appextech.com
          </span>
        </div>
        <div className="topbar-right">
          <a className="topbar-link" href="#contact">
            Login
          </a>
          <span className="topbar-divider" />
          <a className="topbar-link" href="#contact">
            Register
          </a>
          <span className="topbar-divider" />
          <span className="topbar-phone">+91-9990437261</span>
        </div>
      </div>
    </div>

    <header className="navbar">
      <div className="container nav-inner">
        <div className="logo">
          <a href="/" aria-label="Appextech homepage">
            <img className="logo-image" src="/src/assets/appextechlogo.png" alt="Appextech" />
          </a>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <div key={item.label} className="nav-item">
              <a href={item.href} className="nav-link">
                <span>{item.label}</span>
                {item.items || item.mega ? <span className="nav-caret">⌄</span> : null}
              </a>
              {item.items && !item.mega && (
                <div className="dropdown">
                  {item.items.map((subItem) => (
                    <a key={subItem} href={item.href}>
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
              {item.mega && (
                <div className="dropdown dropdown-mega">
                  <div className="dropdown-columns">
                    {item.columns.map((column) => (
                      <div key={column.title} className="dropdown-column">
                        <h4>{column.title}</h4>
                        <ul>
                          {column.items.map((subItem) => (
                            <li key={subItem} className={column.isCopy ? 'dropdown-copy' : ''}>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {item.media && (
                    <div className="dropdown-media">
                      <img src={item.media} alt={`${item.label} preview`} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  </>
)

export default Header
