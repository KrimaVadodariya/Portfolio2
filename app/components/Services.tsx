export default function Services() {
  const services = [
    { id: '01', title: 'SEO', desc: 'Boost your organic visibility and drive qualified traffic to your website' },
    { id: '02', title: 'PPC', desc: 'Maximize ROI with targeted pay-per-click advertising campaigns' },
    { id: '03', title: 'Social Media', desc: 'Build brand awareness and engage your audience across platforms' },
    { id: '04', title: 'Content Marketing', desc: 'Create compelling content that converts visitors into customers' },
    { id: '05', title: 'Email Marketing', desc: 'Nurture leads and retain customers with personalized email campaigns' },
    { id: '06', title: 'Analytics', desc: 'Track performance and optimize strategies with data-driven insights' },
    { id: '07', title: 'Web Design', desc: 'Create stunning, user-friendly websites that drive conversions' },
    { id: '08', title: 'Branding', desc: 'Develop a strong brand identity that resonates with your audience' },
    { id: '09', title: 'Consulting', desc: 'Strategic guidance to accelerate your digital transformation' }
  ]

  return (
    <section id="services" className="services">
      <div className="services-left">
        <h2>Our<br />Services</h2>
      </div>
      <div className="services-scroll">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-number">{service.id}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}