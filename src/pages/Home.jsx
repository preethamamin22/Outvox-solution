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
            <div className="hero-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-by-title">Trusted by Industry Leaders & Fast-Growing Brands</p>
        </div>
        
        <div className="marquee-container">
          {/* First Set of Logos */}
          <div className="marquee-content">
            <div className="brand-logo-wrapper logo-grabfood">
              <svg className="brand-logo-svg" viewBox="0 0 165 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(10, 6) scale(1.05)">
                  <path d="M23.129 10.863a2.927 2.927 0 00-2.079-.872c-.57 0-1.141.212-1.455.421-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364.386-.31.933-.501 1.427-.501 1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.341 2.341 0 01-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789.778 0 1.516-.31 2.079-.872.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266.149-.186.299-.337.411-.449-.335-.256-.903-.415-1.485-.415-.83 0-1.584.3-2.122.843-.534.54-.83 1.287-.83 2.107v3.489h.598V12.94c0-1.385.968-2.352 2.354-2.352m5.678 5.84v-3.488c0-1.072-.84-1.913-1.913-1.913-.5 0-.976.203-1.343.57a1.895 1.895 0 00-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.302 1.302 0 01-1.315-1.316v-.538a1.3 1.3 0 011.315-1.314 1.3 1.3 0 011.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.759 3.759 0 002.689 1.112c.82 0 1.548-.186 2.162-.551.506-.302.73-.607.75-.635V12.22H3.65v.597H6.11v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.165 3.165 0 01-2.279-.938 3.247 3.247 0 01-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.558 3.558 0 012.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968c.226 0 .419.037.571.112.075-.186.151-.339.262-.525-.162-.116-.549-.186-.833-.186-1.09 0-1.913.823-1.913 1.913v3.489h.598V12.94c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419-.799 0-1.555.293-2.132.824-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796 1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231-.58 0-1.122-.225-1.528-.636a2.203 2.203 0 01-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424.737 0 1.315.577 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316-.357 0-.702-.196-.972-.55a2.151 2.151 0 01-.418-1.12l-.484.591c.095.452.33.885.665 1.19.344.313.774.486 1.209.486a1.915 1.915 0 001.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.896 1.896 0 00-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 002.078.87c.33 0 .669-.07.908-.188v-.597c-.28.117-.618.188-.908.188-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 012.353 2.353v3.488h.598v-3.604a2.979 2.979 0 00-.915-2.006 2.92 2.92 0 00-2.036-.83c-.778 0-1.516.31-2.078.873a2.926 2.926 0 00-.872 2.078zm6.918-2.313c.183-.22.372-.443.596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.601 3.601 0 00-.597.41" fill="#00B14F" />
                </g>
                <text x="42" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="#00B14F" letterSpacing="-0.5">Food</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-stories">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="24" fontFamily="var(--font-heading)" fontWeight="600" fontSize="19" fill="#FFFFFF" letterSpacing="0.5">
                  foodstories<tspan fill="#FF5500">.</tspan>
                </text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-ondc">
              <svg className="brand-logo-svg" viewBox="0 0 125 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 4)">
                  <path d="M 15 8 A 9 9 0 0 0 15 26" fill="none" stroke="#0077FF" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 19 26 A 9 9 0 0 0 19 8" fill="none" stroke="#FF5500" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="15" cy="8" r="2.5" fill="#0077FF" />
                  <circle cx="19" cy="26" r="2.5" fill="#FF5500" />
                </g>
                <text x="40" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="21" fill="#FFFFFF" letterSpacing="0.2">ONDC</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-rapido">
              <svg className="brand-logo-svg" viewBox="0 0 130 35" xmlns="http://www.w3.org/2000/svg">
                <rect className="rapido-bg" x="5" y="4" width="115" height="27" rx="8" fill="#FFF500" />
                <g transform="skewX(-10)">
                  <text className="rapido-text" x="58" y="23" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="900" fontSize="19" fill="#000000" letterSpacing="-0.5">rapido</text>
                </g>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-flipkart">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 5) scale(0.26)">
                  <path d="M68.052,42.539c2.183,0,4.21-0.075,6.23,0.02c2.458,0.116,4.115-1.064,4.859-3.224c0.651-1.895,1.075-3.935,1.177-5.932c0.135-2.627-1.071-3.642-3.72-3.659c-2.064-0.013-4.129-0.002-6.443-0.002c0.733-3.377,1.209-6.47,2.092-9.443c1.433-4.832,4.964-7.257,10.029-7.301c1.216-0.009,2.449-0.021,3.644-0.222c2.562-0.433,3.392-1.578,3.026-4.095c-0.202-1.407-0.48-2.807-0.827-4.186c-0.759-3.013-2.156-4.255-5.256-4.437c-5.025-0.295-9.885,0.524-14.393,2.833c-8.294,4.248-12.277,11.506-13.929,20.33c-0.396,2.12-0.758,4.246-1.157,6.491c-4.755,0-9.354-0.018-13.953,0.009c-2.313,0.013-2.889,0.772-2.368,3.051c0.56,2.442,1.226,4.862,1.72,7.318c0.357,1.773,1.269,2.5,3.093,2.44c2.968-0.101,5.941-0.028,9.173-0.028c-0.086,0.669-0.114,0.998-0.172,1.321c-1.856,10.404-3.647,20.819-5.601,31.203c-1.054,5.602-4.049,7.893-9.822,7.9c-6.915,0.014-13.829-0.011-20.743,0.007c-2.547,0.007-3.736,0.929-4.344,3.38c-0.684,2.761-1.297,5.539-1.937,8.312c-0.457,1.979-0.022,2.599,2.078,2.603c9.828,0.018,19.662,0.186,29.484-0.07c12.221-0.317,19.691-6.93,21.738-18.715c1.137-6.54,2.287-13.079,3.438-19.617C66.121,53.438,67.079,48.052,68.052,42.539z" fill="#2874F0" />
                </g>
                <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="currentColor" letterSpacing="-0.5">Flipkart<tspan fill="#FFE500">✚</tspan></text>
              </svg>
            </div>
          </div>
          
          {/* Second Set of Logos (for infinite loop effect) */}
          <div className="marquee-content" aria-hidden="true">
            <div className="brand-logo-wrapper logo-grabfood">
              <svg className="brand-logo-svg" viewBox="0 0 165 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(10, 6) scale(1.05)">
                  <path d="M23.129 10.863a2.927 2.927 0 00-2.079-.872c-.57 0-1.141.212-1.455.421-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364.386-.31.933-.501 1.427-.501 1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.341 2.341 0 01-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789.778 0 1.516-.31 2.079-.872.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266.149-.186.299-.337.411-.449-.335-.256-.903-.415-1.485-.415-.83 0-1.584.3-2.122.843-.534.54-.83 1.287-.83 2.107v3.489h.598V12.94c0-1.385.968-2.352 2.354-2.352m5.678 5.84v-3.488c0-1.072-.84-1.913-1.913-1.913-.5 0-.976.203-1.343.57a1.895 1.895 0 00-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.302 1.302 0 01-1.315-1.316v-.538a1.3 1.3 0 011.315-1.314 1.3 1.3 0 011.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.759 3.759 0 002.689 1.112c.82 0 1.548-.186 2.162-.551.506-.302.73-.607.75-.635V12.22H3.65v.597H6.11v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.165 3.165 0 01-2.279-.938 3.247 3.247 0 01-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.558 3.558 0 012.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968c.226 0 .419.037.571.112.075-.186.151-.339.262-.525-.162-.116-.549-.186-.833-.186-1.09 0-1.913.823-1.913 1.913v3.489h.598V12.94c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419-.799 0-1.555.293-2.132.824-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796 1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231-.58 0-1.122-.225-1.528-.636a2.203 2.203 0 01-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424.737 0 1.315.577 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316-.357 0-.702-.196-.972-.55a2.151 2.151 0 01-.418-1.12l-.484.591c.095.452.33.885.665 1.19.344.313.774.486 1.209.486a1.915 1.915 0 001.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.896 1.896 0 00-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 002.078.87c.33 0 .669-.07.908-.188v-.597c-.28.117-.618.188-.908.188-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 012.353 2.353v3.488h.598v-3.604a2.979 2.979 0 00-.915-2.006 2.92 2.92 0 00-2.036-.83c-.778 0-1.516.31-2.078.873a2.926 2.926 0 00-.872 2.078zm6.918-2.313c.183-.22.372-.443.596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.601 3.601 0 00-.597.41" fill="#00B14F" />
                </g>
                <text x="42" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="#00B14F" letterSpacing="-0.5">Food</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-stories">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="24" fontFamily="var(--font-heading)" fontWeight="600" fontSize="19" fill="#FFFFFF" letterSpacing="0.5">
                  foodstories<tspan fill="#FF5500">.</tspan>
                </text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-ondc">
              <svg className="brand-logo-svg" viewBox="0 0 125 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 4)">
                  <path d="M 15 8 A 9 9 0 0 0 15 26" fill="none" stroke="#0077FF" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 19 26 A 9 9 0 0 0 19 8" fill="none" stroke="#FF5500" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="15" cy="8" r="2.5" fill="#0077FF" />
                  <circle cx="19" cy="26" r="2.5" fill="#FF5500" />
                </g>
                <text x="40" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="21" fill="#FFFFFF" letterSpacing="0.2">ONDC</text>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-rapido">
              <svg className="brand-logo-svg" viewBox="0 0 130 35" xmlns="http://www.w3.org/2000/svg">
                <rect className="rapido-bg" x="5" y="4" width="115" height="27" rx="8" fill="#FFF500" />
                <g transform="skewX(-10)">
                  <text className="rapido-text" x="58" y="23" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="900" fontSize="19" fill="#000000" letterSpacing="-0.5">rapido</text>
                </g>
              </svg>
            </div>
            <div className="brand-logo-wrapper logo-flipkart">
              <svg className="brand-logo-svg" viewBox="0 0 145 35" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(5, 5) scale(0.26)">
                  <path d="M68.052,42.539c2.183,0,4.21-0.075,6.23,0.02c2.458,0.116,4.115-1.064,4.859-3.224c0.651-1.895,1.075-3.935,1.177-5.932c0.135-2.627-1.071-3.642-3.72-3.659c-2.064-0.013-4.129-0.002-6.443-0.002c0.733-3.377,1.209-6.47,2.092-9.443c1.433-4.832,4.964-7.257,10.029-7.301c1.216-0.009,2.449-0.021,3.644-0.222c2.562-0.433,3.392-1.578,3.026-4.095c-0.202-1.407-0.48-2.807-0.827-4.186c-0.759-3.013-2.156-4.255-5.256-4.437c-5.025-0.295-9.885,0.524-14.393,2.833c-8.294,4.248-12.277,11.506-13.929,20.33c-0.396,2.12-0.758,4.246-1.157,6.491c-4.755,0-9.354-0.018-13.953,0.009c-2.313,0.013-2.889,0.772-2.368,3.051c0.56,2.442,1.226,4.862,1.72,7.318c0.357,1.773,1.269,2.5,3.093,2.44c2.968-0.101,5.941-0.028,9.173-0.028c-0.086,0.669-0.114,0.998-0.172,1.321c-1.856,10.404-3.647,20.819-5.601,31.203c-1.054,5.602-4.049,7.893-9.822,7.9c-6.915,0.014-13.829-0.011-20.743,0.007c-2.547,0.007-3.736,0.929-4.344,3.38c-0.684,2.761-1.297,5.539-1.937,8.312c-0.457,1.979-0.022,2.599,2.078,2.603c9.828,0.018,19.662,0.186,29.484-0.07c12.221-0.317,19.691-6.93,21.738-18.715c1.137-6.54,2.287-13.079,3.438-19.617C66.121,53.438,67.079,48.052,68.052,42.539z" fill="#2874F0" />
                </g>
                <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="20" fill="currentColor" letterSpacing="-0.5">Flipkart<tspan fill="#FFE500">✚</tspan></text>
              </svg>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
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
          <div className="glass-panel cta-banner-inner" style={{ padding: '60px 40px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,85,255,0.1), rgba(0,240,255,0.05))', borderColor: 'rgba(0,240,255,0.2)' }}>
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
