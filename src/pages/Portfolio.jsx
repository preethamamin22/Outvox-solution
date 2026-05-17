export default function Portfolio() {
  const projects = [
    { title: "Fintech Startup Website", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Global E-commerce Support", category: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "B2B Lead Generation", category: "Telecalling", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "SaaS Landing Page", category: "Web Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <h2>Our <span className="text-gradient">Portfolio</span></h2>
          <p>Explore some of our recent projects and success stories.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {projects.map((project, idx) => (
            <div key={idx} className={`glass-panel animate-fade-up delay-${(idx%4)+1}`} style={{ overflow: 'hidden' }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
                <h3 style={{ fontSize: '1.4rem', marginTop: '10px' }}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
