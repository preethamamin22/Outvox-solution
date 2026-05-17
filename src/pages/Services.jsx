import { HeadphonesIcon, ShoppingCart, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <HeadphonesIcon size={40} />,
      title: "Telecalling Services",
      desc: "Drive growth with our professional telecalling team. We handle outbound lead generation, appointment setting, surveys, and customer retention campaigns with a high conversion focus.",
      color: "var(--primary)",
      bg: "rgba(0, 102, 204, 0.1)"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Customer Support",
      desc: "Provide your shoppers with a seamless experience. We offer 24/7 multi-channel support (chat, email, phone), order processing, dispute resolution, and returns management.",
      color: "#0055ff",
      bg: "rgba(0, 85, 255, 0.1)"
    },
    {
      icon: <Code size={40} />,
      title: "Web Design & Development",
      desc: "We build modern, fast, and high-converting websites. From landing pages to complex e-commerce platforms, our web solutions are tailored to your brand's unique needs.",
      color: "var(--secondary)",
      bg: "rgba(112, 0, 255, 0.1)"
    }
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Services</span></h2>
          <p>Comprehensive solutions designed to elevate your business operations and digital presence.</p>
        </div>

        <div style={{ display: 'grid', gap: '40px' }}>
          {services.map((service, idx) => (
            <div key={idx} className={`glass-panel animate-fade-up delay-${idx+1}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '40px', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '24px', background: service.bg, color: service.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {service.icon}
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>{service.desc}</p>
                <Link to="/contact" className="btn btn-outline" style={{ borderColor: service.color, color: '#fff' }}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
