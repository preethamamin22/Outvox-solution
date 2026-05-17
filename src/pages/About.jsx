export default function About() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>About <span className="text-gradient">Outvox Solution</span></h2>
          <p>We are a premium BPO and digital agency dedicated to helping businesses scale with smart solutions.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '60px', alignItems: 'center' }}>
          <div className="glass-panel animate-fade-up" style={{ padding: '20px' }}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Team" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
          </div>
          <div className="animate-fade-up delay-1">
            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h3>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              At Outvox Solution, our mission is to empower startups and e-commerce brands with top-tier customer support and cutting-edge web development. We bridge the gap between businesses and their customers through seamless communication and robust digital experiences.
            </p>
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', marginTop: '40px' }}>Our Vision</h3>
            <p style={{ fontSize: '1.1rem' }}>
              To be the globally recognized leader in providing integrated outsourcing and digital solutions, setting the industry standard for quality, innovation, and client success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
