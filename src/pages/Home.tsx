import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WaveDivider, SectionLabel, GoogleBadge } from '../components/UI';

const Home = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-suffix') || '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
        }
      };
      updateCounter();
    });
  };

  const services = [
    {
      icon: '🧴',
      title: 'Acne Treatment',
      description: 'Advanced solutions for clear, healthy skin. Say goodbye to breakouts.',
      link: '/services',
    },
    {
      icon: '✨',
      title: 'Pigmentation',
      description: 'Even out skin tone with expert treatments for dark spots and patches.',
      link: '/services',
    },
    {
      icon: '💇',
      title: 'Hair Loss (PRP)',
      description: 'Revitalize hair growth with proven PRP therapy and scalp treatments.',
      link: '/services',
    },
    {
      icon: '👩',
      title: 'Anti-Aging',
      description: 'Turn back the clock with rejuvenating treatments for younger-looking skin.',
      link: '/services',
    },
    {
      icon: '⚡',
      title: 'Laser Treatments',
      description: 'Precision laser technology for various skin concerns and improvements.',
      link: '/services',
    },
    {
      icon: '🛡️',
      title: 'Skin Allergy',
      description: 'Expert diagnosis and treatment for all types of skin allergies and rashes.',
      link: '/services',
    },
  ];

  const whyChooseUs = [
    {
      title: 'MD Dermatology',
      description: 'Qualified specialist with advanced medical training, not a general practitioner.',
    },
    {
      title: 'Advanced Equipment',
      description: 'Latest laser systems and dermatological technology for effective treatments.',
    },
    {
      title: 'Personalized Plans',
      description: 'Customized treatment plans tailored to your unique skin concerns and goals.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear communication about costs before any treatment.',
    },
  ];

  const beforeAfterResults = [
    { treatment: 'Acne Treatment — 3 months' },
    { treatment: 'Pigmentation — 6 weeks' },
    { treatment: 'Hair Restoration — 4 months' },
  ];

  const testimonials = [
    {
      quote: 'Dr. Sharma transformed my skin completely. After years of struggling with acne, I finally have clear skin. The treatment was gentle and effective.',
      name: 'Priya M.',
      treatment: 'Treated for: Acne',
    },
    {
      quote: 'Professional, caring, and truly skilled. The pigmentation on my face has faded dramatically. I cannot recommend Dr. Sharma enough.',
      name: 'Rahul K.',
      treatment: 'Treated for: Pigmentation',
    },
    {
      quote: 'My hair was thinning badly, but after PRP sessions with Dr. Sharma, I can see new growth. Very happy with the results.',
      name: 'Anjali S.',
      treatment: 'Treated for: Hair Loss',
    },
  ];

  const whatsappUrl = 'https://wa.me/91XXXXXXXXXX?text=' + encodeURIComponent('Hi Dr. Sharma, I would like to book a skin consultation.');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-content">
              <div className="hero-label label hero-animate">
                ✦ MBBS · MD DERMATOLOGY · 10+ YEARS EXPERIENCE
              </div>
              <h1 className="hero-animate">
                Delhi's Trusted<br />Skin Specialist
              </h1>
              <p className="hero-subtitle hero-animate">
                Expert diagnosis and advanced treatments for acne, pigmentation, hair loss, and cosmetic skin care — by Dr. Sharma, MD Dermatology.
              </p>
              <div className="hero-buttons hero-animate">
                <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                <Link to="/services" className="btn btn-text">View Treatments →</Link>
              </div>
              <div className="hero-trust hero-animate">
                <div className="hero-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>MD Dermatology</span>
                </div>
                <div className="hero-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>10+ Years Experience</span>
                </div>
                <div className="hero-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>5000+ Patients</span>
                </div>
                <div className="hero-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Delhi Clinic</span>
                </div>
              </div>
              <div className="hero-animate">
                <GoogleBadge />
              </div>
            </div>
            <div className="hero-image hero-animate">
              <div className="hero-image-placeholder">👨‍⚕️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <WaveDivider position="top" fill="#FFFFFF" />
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-count="5000" data-suffix="+">0</div>
              <div className="stat-label">Patients Treated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="10" data-suffix="+ Years">0</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="30" data-suffix="+">0</div>
              <div className="stat-label">Treatments</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Google Rating</div>
            </div>
          </div>
        </div>
        <WaveDivider position="bottom" fill="#FFFFFF" />
      </section>

      {/* Services Preview */}
      <section className="services-preview" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="What We Treat" />
            <h2>Advanced Treatments<br />For Every Skin Concern</h2>
          </div>
          <div className="services-grid" style={{ marginTop: '48px' }}>
            {services.map((service, index) => (
              <div key={index} className="service-card fade-in">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-card-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center fade-in" style={{ marginTop: '48px' }}>
            <Link to="/services" className="btn btn-outline">View All Treatments →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Sharma */}
      <section className="why-choose" style={{ backgroundColor: '#F0F9F6' }}>
        <div className="container">
          <div className="why-choose-grid">
            <div className="fade-in">
              <SectionLabel text="Why Dr. Sharma" />
              <h2>Care You Can Trust,<br />Results You Can See</h2>
            </div>
            <div className="fade-in">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="why-choose-item">
                  <div className="why-choose-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="why-choose-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
                Book Your Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section className="before-after-section">
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="Patient Results" />
            <h2 style={{ fontStyle: 'italic' }}>Real Patients.<br />Real Results.</h2>
          </div>
          <div className="before-after-grid">
            {beforeAfterResults.map((item, index) => (
              <div key={index} className="before-after-card fade-in">
                <div className="before-after-images">
                  <div className="before-after-tile">
                    <span>Before</span>
                    <div style={{ fontSize: '32px', marginTop: '8px' }}>📷</div>
                  </div>
                  <div className="before-after-tile">
                    <span>After</span>
                    <div style={{ fontSize: '32px', marginTop: '8px' }}>✨</div>
                  </div>
                </div>
                <div className="before-after-tag">{item.treatment}</div>
              </div>
            ))}
          </div>
          <p className="text-center fade-in" style={{ marginTop: '32px', fontSize: '13px', color: '#6B7280' }}>
            *Individual results may vary. Consult Dr. Sharma for personalized assessment.
          </p>
          <div className="text-center fade-in" style={{ marginTop: '32px' }}>
            <Link to="/contact" className="btn btn-primary">Book Your Consultation →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="Patient Stories" />
            <h2>What Our Patients Say</h2>
          </div>
          <div className="testimonials-grid" style={{ marginTop: '48px' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-in">
                <div className="testimonial-header">
                  <svg className="testimonial-google" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="testimonial-stars">★★★★★</span>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="testimonial-verified">Verified Google Review</div>
                <div className="testimonial-treatment">{testimonial.treatment}</div>
              </div>
            ))}
          </div>
          <div className="text-center fade-in" style={{ marginTop: '48px' }}>
            <GoogleBadge />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2 className="fade-in" style={{ marginBottom: '16px' }}>
            Your Skin Deserves<br />Expert Care.
          </h2>
          <p className="fade-in">Book a consultation today. Same-day appointments available.</p>
          <div className="cta-buttons fade-in">
            <a href="tel:+91XXXXXXXXXX" className="btn btn-white">📞 Call Now</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="cta-info fade-in">
            📍 123 Medical Plaza, Connaught Place, Delhi &nbsp;|&nbsp; Mon–Sat: 10AM–7PM
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
