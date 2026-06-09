import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '../components/UI';

const About = () => {
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

  const qualifications = [
    {
      year: '2010',
      degree: 'MBBS',
      institution: 'University of Delhi',
    },
    {
      year: '2014',
      degree: 'MD Dermatology',
      institution: 'AIIMS, New Delhi',
    },
    {
      year: '2016',
      degree: 'Fellowship in Laser Dermatology',
      institution: 'Bangalore Medical College',
    },
    {
      year: '2017',
      degree: 'Advanced Training in Cosmetic Dermatology',
      institution: 'International Academy, Singapore',
    },
    {
      year: '2017 - Present',
      degree: 'Consultant Dermatologist',
      institution: 'Dr. Sharma Clinic, Delhi',
    },
  ];

  const features = [
    {
      icon: '🏥',
      title: 'Modern Facility',
      description: 'State-of-the-art clinic designed for patient comfort with the highest standards of hygiene and safety.',
    },
    {
      icon: '🔬',
      title: 'Latest Technology',
      description: 'Advanced laser systems, dermoscopy equipment, and diagnostic tools for accurate assessment and effective treatment.',
    },
    {
      icon: '🤝',
      title: 'Patient-First Care',
      description: 'Personalized attention with no-rush consultations. Dr. Sharma ensures every patient feels heard and valued.',
    },
  ];

  const clinicImages = ['📷', '📷', '📷', '📷'];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="hero-split">
            <div className="hero-content">
              <h1 className="hero-animate" style={{ fontStyle: 'italic' }}>About Dr. Sharma</h1>
              <p className="hero-subtitle hero-animate" style={{ marginTop: '24px' }}>
                Meet the specialist behind thousands of skin transformations. Dedicated to providing personalized, evidence-based dermatological care.
              </p>
              <div className="hero-buttons hero-animate" style={{ marginTop: '32px' }}>
                <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
              </div>
            </div>
            <div className="hero-image hero-animate" style={{ aspectRatio: '3/4' }}>
              <div className="hero-image-placeholder">👨‍⚕️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="doctor-profile">
            <div className="doctor-image-wrapper fade-in">
              <div className="doctor-image">
                <div className="doctor-image-placeholder">👨‍⚕️</div>
              </div>
              <div className="credential-badges">
                <span className="credential-badge">MBBS</span>
                <span className="credential-badge">MD Dermatology</span>
                <span className="credential-badge">10+ Years</span>
                <span className="credential-badge">Delhi Medical Council Reg. No. XXXXXX</span>
              </div>
            </div>
            <div className="fade-in">
              <div className="doctor-name">Dr. Sharma</div>
              <div className="doctor-designation">MD Dermatology | MBBS</div>
              <div className="doctor-bio">
                <p>
                  Dr. Sharma is a qualified dermatologist with over 10 years of experience in treating a wide range of skin, hair, and nail conditions. After completing MBBS from Delhi University, Dr. Sharma pursued MD Dermatology from the prestigious AIIMS, New Delhi, one of India's top medical institutions.
                </p>
                <p>
                  With specialized training in laser dermatology and cosmetic procedures, Dr. Sharma combines medical expertise with the latest technological advances to deliver effective treatments. The practice focuses on evidence-based medicine, ensuring that every treatment recommendation is backed by scientific research.
                </p>
                <p>
                  Dr. Sharma's philosophy centers around patient education and personalized care. Every consultation begins with a thorough assessment, followed by a transparent discussion of treatment options, expected outcomes, and costs. This approach has earned the trust of over 5000 patients across Delhi and the NCR region.
                </p>
              </div>
              <div className="doctor-signature">
                Dr. Sharma
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="qualifications-section">
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="Education & Training" />
            <h2>Qualifications & Experience</h2>
          </div>
          <div className="qualifications-timeline fade-in" style={{ marginTop: '48px' }}>
            {qualifications.map((qual, index) => (
              <div key={index} className="qualification-item">
                <div className="qualification-year">{qual.year}</div>
                <div className="qualification-title">{qual.degree}</div>
                <div className="qualification-institution">{qual.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic & Facility */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="Our Clinic" />
            <h2>The Clinic</h2>
          </div>
          <div className="features-grid" style={{ marginTop: '48px' }}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="clinic-images fade-in">
            {clinicImages.map((img, index) => (
              <div key={index} className="clinic-image">{img}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="memberships-section">
        <div className="container">
          <div className="text-center fade-in">
            <h2 style={{ color: 'white', marginBottom: '8px' }}>Professional Memberships</h2>
            <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
              Dr. Sharma is a member of leading dermatological organizations in India
            </p>
          </div>
          <div className="membership-logos fade-in">
            <div className="membership-logo">IADVL</div>
            <div className="membership-logo">Indian Medical Association</div>
            <div className="membership-logo">Delhi Medical Association</div>
            <div className="membership-logo">Association of Cutaneous Surgeons</div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2 style={{ marginBottom: '16px', fontStyle: 'italic', color: 'white' }}>
            Trust Your Skin to<br />an Expert
          </h2>
          <p style={{ opacity: 0.9 }}>
            Schedule a consultation with Dr. Sharma today and experience expert dermatological care.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Book Consultation</Link>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Dr.%20Sharma%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
