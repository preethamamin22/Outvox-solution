import { ArrowRight, HeadphonesIcon, ShoppingCart, Code, CheckCircle, Users, Clock, TrendingUp, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <div className="bg-glow" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ top: '40%', right: '-10%', background: 'radial-gradient(circle at center, rgba(112, 0, 255, 0.1) 0%, transparent 70%)' }}></div>
      
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
          <div className="animate-fade-up">
            <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0, 102, 204, 0.1)', border: '1px solid var(--primary)', borderRadius: '50px', color: 'var(--primary)', fontWeight: '600', marginBottom: '24px', fontSize: '0.9rem' }}>
              Transforming Businesses Digitally
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}>
              Powering Businesses with <span className="text-gradient">Smart Support</span> & Digital Solutions
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
              Professional telecalling, customer support, and web solutions designed to help your business grow faster. Elevate your customer experience today.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Free Consultation <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Our Core <span className="text-gradient">Services</span></h2>
            <p>We provide end-to-end outsourcing and digital solutions tailored to scale your operations.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(0, 102, 204, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                <HeadphonesIcon size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Telecalling Services</h3>
              <p style={{ marginBottom: '24px' }}>Expert B2B & B2C lead generation, appointment setting, and customer surveys.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>
            
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '40px 30px', textAlign: 'center', borderColor: 'rgba(0, 102, 204, 0.3)', boxShadow: '0 10px 30px -10px rgba(0, 102, 204, 0.1)' }}>
              <div style={{ width: '70px', height: '70px', background: 'var(--gradient-blue)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#fff' }}>
                <ShoppingCart size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>E-commerce Support</h3>
              <p style={{ marginBottom: '24px' }}>24/7 multi-channel support, order processing, and returns management.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>

            <div className="glass-panel animate-fade-up delay-3" style={{ padding: '40px 30px', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(112, 0, 255, 0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--secondary)' }}>
                <Code size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Web Development</h3>
              <p style={{ marginBottom: '24px' }}>Custom websites, UI/UX design, and scalable web applications for modern brands.</p>
              <Link to="/services" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Learn More <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-up">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Why <span className="text-gradient">Choose Us</span></h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>We don't just provide services; we partner with you to ensure your business achieves maximum efficiency and growth.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <Users />, title: 'Skilled Support Team', desc: 'Highly trained professionals ready to represent your brand.' },
                  { icon: <Clock />, title: 'Fast Response Time', desc: 'SLA-backed response times ensuring no customer waits.' },
                  { icon: <TrendingUp />, title: 'Scalable Solutions', desc: 'Easily scale up or down based on your seasonal demands.' },
                  { icon: <Zap />, title: '24/7 Support', desc: 'Round-the-clock availability to serve global customers.' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '5px' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '40px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'var(--primary)', filter: 'blur(50px)', opacity: '0.5' }}></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer Support" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>How It <span className="text-gradient">Works</span></h2>
            <p>A simple, transparent process to get your operations running smoothly.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {[
              { step: '01', title: 'Understand Client Needs', desc: 'We start by analyzing your business goals and requirements.' },
              { step: '02', title: 'Strategy & Setup', desc: 'Developing a customized plan and integrating our tools with yours.' },
              { step: '03', title: 'Execution', desc: 'Our trained team starts executing the strategy seamlessly.' },
              { step: '04', title: 'Growth & Optimization', desc: 'Continuous monitoring, reporting, and scaling up operations.' }
            ].map((p, i) => (
              <div key={i} className={`glass-panel animate-fade-up delay-${i+1}`} style={{ padding: '30px 20px', position: 'relative' }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px', lineHeight: 1 }}>{p.step}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '20px' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            {[
              { count: '500+', label: 'Clients Served' },
              { count: '2M+', label: 'Customer Interactions' },
              { count: '99%', label: 'Client Retention' },
              { count: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="animate-fade-up">
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px' }}>{stat.count}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>What Our <span className="text-gradient">Clients Say</span></h2>
            <p>Don't just take our word for it. Hear from businesses we've helped grow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: 'Sarah J.', role: 'CEO, TechFlow', text: 'Outvox Solution completely transformed our customer support. Their response times are incredible and our customer satisfaction score is at an all-time high.' },
              { name: 'Michael R.', role: 'Founder, E-Shop', text: 'The e-commerce support team handles our orders and returns flawlessly. It allows us to focus on product development and marketing.' },
              { name: 'David L.', role: 'Marketing Director', text: 'Their web development team built a stunning, fast, and high-converting landing page for our new campaign. Highly recommended!' }
            ].map((t, i) => (
              <div key={i} className={`glass-panel animate-fade-up delay-${i+1}`} style={{ padding: '30px' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>
                  <MessageSquare size={30} />
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '1.05rem' }}>"{t.text}"</p>
                <div>
                  <h5 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{t.name}</h5>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'var(--bg-lighter)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p>Everything you need to know about our services and process.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {[
              { q: 'How quickly can you set up a support team?', a: 'Depending on the complexity of your requirements, we can deploy a dedicated support team within 1 to 2 weeks.' },
              { q: 'Do you offer custom pricing plans?', a: 'Yes, we understand that every business is unique. We offer custom Enterprise plans tailored to your specific volume and needs.' },
              { q: 'What kind of reporting do you provide?', a: 'We provide detailed weekly and monthly performance reports, covering key metrics like response time, resolution rate, and customer satisfaction.' },
              { q: 'Can you integrate with our existing CRM?', a: 'Absolutely. Our team is experienced with major platforms like Zendesk, Salesforce, Intercom, Shopify, and more.' }
            ].map((faq, i) => (
              <div key={i} className={`glass-panel animate-fade-up delay-${(i%4)+1}`} style={{ padding: '25px', cursor: 'pointer' }}>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,85,255,0.1), rgba(0,240,255,0.05))', borderColor: 'rgba(0,240,255,0.2)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Scale Your Operations?</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>Join hundreds of fast-growing companies that trust Outvox Solution for their customer support and digital needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Get Your Free Proposal <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
