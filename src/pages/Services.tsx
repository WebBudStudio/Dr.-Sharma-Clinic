import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionLabel } from '../components/UI';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const treatments = [
    {
      name: 'Acne & Pimple Treatment',
      category: 'skin',
      description: 'Comprehensive treatment for all types of acne including hormonal, cystic, and comedonal acne.',
      duration: '30-45 mins',
      sessions: '4-6 Sessions',
      icon: '🧴',
    },
    {
      name: 'Pigmentation & Dark Spots',
      category: 'skin',
      description: 'Advanced treatments for melasma, sun spots, and post-inflammatory hyperpigmentation.',
      duration: '30 mins',
      sessions: '4-8 Sessions',
      icon: '✨',
    },
    {
      name: 'Skin Allergy & Eczema',
      category: 'skin',
      description: 'Expert diagnosis and treatment for various skin allergies, dermatitis, and eczema.',
      duration: '20-30 mins',
      sessions: 'Varies',
      icon: '🛡️',
    },
    {
      name: 'Psoriasis Treatment',
      category: 'skin',
      description: 'Managing psoriasis with phototherapy, topical treatments, and systemic options.',
      duration: '30-45 mins',
      sessions: 'Ongoing',
      icon: '🔬',
    },
    {
      name: 'Vitiligo Management',
      category: 'skin',
      description: 'Specialized treatment protocols for vitiligo including phototherapy and medical management.',
      duration: '30 mins',
      sessions: '6-12 Sessions',
      icon: '💊',
    },
    {
      name: 'Skin Tag & Wart Removal',
      category: 'skin',
      description: 'Safe and quick removal of skin tags, warts, and minor growths using advanced techniques.',
      duration: '15-20 mins',
      sessions: '1-2 Sessions',
      icon: '✂️',
    },
    {
      name: 'Hair Loss Treatment (PRP)',
      category: 'hair',
      description: 'Platelet-Rich Plasma therapy to stimulate natural hair growth and reduce hair fall.',
      duration: '45-60 mins',
      sessions: '4-6 Sessions',
      icon: '💇',
    },
    {
      name: 'Dandruff & Scalp Treatment',
      category: 'hair',
      description: 'Clinical treatments for severe dandruff, scalp psoriasis, and folliculitis.',
      duration: '20-30 mins',
      sessions: '4-6 Sessions',
      icon: '🧼',
    },
    {
      name: 'Hair Thinning Solutions',
      category: 'hair',
      description: 'Comprehensive approach to hair thinning including PRP, mesotherapy, and lifestyle guidance.',
      duration: '45 mins',
      sessions: '6-8 Sessions',
      icon: '💆',
    },
    {
      name: 'Anti-Aging & Wrinkle Treatment',
      category: 'cosmetic',
      description: 'Rejuvenating treatments to reduce fine lines, wrinkles, and restore youthful appearance.',
      duration: '30-45 mins',
      sessions: '2-4 Sessions',
      icon: '👩',
    },
    {
      name: 'Chemical Peels',
      category: 'cosmetic',
      description: 'Medical-grade peels for skin rejuvenation, acne scars, and pigmentation treatment.',
      duration: '30 mins',
      sessions: '4-6 Sessions',
      icon: '⚗️',
    },
    {
      name: 'Botox & Fillers Consultation',
      category: 'cosmetic',
      description: 'Expert consultation and treatment for facial aesthetics with dermal fillers and Botox.',
      duration: '30-45 mins',
      sessions: 'As needed',
      icon: '💉',
    },
    {
      name: 'Laser Hair Removal',
      category: 'laser',
      description: 'Permanent hair reduction using FDA-approved diode laser technology.',
      duration: '15-60 mins',
      sessions: '6-8 Sessions',
      icon: '⚡',
    },
    {
      name: 'Laser Skin Brightening',
      category: 'laser',
      description: 'Advanced laser treatments for skin rejuvenation, tone improvement, and texture refinement.',
      duration: '30-45 mins',
      sessions: '4-6 Sessions',
      icon: '🌟',
    },
    {
      name: 'Scar & Stretch Mark Treatment',
      category: 'laser',
      description: 'Fractional laser treatments for acne scars, surgical scars, and stretch marks.',
      duration: '30-45 mins',
      sessions: '4-8 Sessions',
      icon: '🎯',
    },
  ];

  const filteredTreatments = activeFilter === 'all' 
    ? treatments 
    : treatments.filter(t => t.category === activeFilter);

  const processSteps = [
    { icon: '🗓', title: 'Book Appointment', description: 'Schedule via call, WhatsApp, or our online form' },
    { icon: '🩺', title: 'Consultation', description: 'Meet Dr. Sharma for a thorough skin assessment' },
    { icon: '💊', title: 'Treatment Plan', description: 'Receive your personalized treatment roadmap' },
    { icon: '✨', title: 'See Results', description: 'Watch your skin transform with each session' },
  ];

  const faqs = [
    {
      question: 'Is the treatment safe for all skin types?',
      answer: 'Yes, Dr. Sharma uses treatments that are safe and effective for all skin types. During your consultation, the best approach for your specific skin type will be determined.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions depends on your specific condition and treatment. Most treatments require 4-8 sessions, with visible improvement after the first few sessions.',
    },
    {
      question: 'Are the treatments painful?',
      answer: 'Most treatments are comfortable with minimal discomfort. Topical numbing agents are used when needed, and Dr. Sharma ensures your comfort throughout the process.',
    },
    {
      question: 'What are the charges for a consultation?',
      answer: 'Please contact us for current consultation fees. The consultation includes a thorough skin assessment and personalized treatment recommendations.',
    },
    {
      question: 'Do you offer home visits?',
      answer: 'Currently, all consultations and treatments are conducted at our clinic to ensure access to all necessary equipment and maintain the highest standards of care.',
    },
    {
      question: 'Is there any downtime after laser treatment?',
      answer: 'Most laser treatments have minimal downtime. You may experience mild redness for 1-2 days. Specific aftercare instructions will be provided based on your treatment.',
    },
    {
      question: 'Can I book same-day appointments?',
      answer: 'Yes, we offer same-day appointments subject to availability. Call or WhatsApp us for urgent appointments.',
    },
    {
      question: 'Do you treat children\'s skin conditions?',
      answer: 'Yes, Dr. Sharma treats patients of all ages, including children with skin conditions. Pediatric dermatology is one of our areas of expertise.',
    },
  ];

  const getWhatsappUrl = (treatment: string) => {
    return `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hi Dr. Sharma, I would like to book an appointment for ${treatment}.`)}`;
  };

  return (
    <>
      <PageHero
        title="Treatments & Services"
        subtitle="Comprehensive skin and hair treatments by a qualified MD Dermatologist."
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Treatments Grid */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="All Treatments" />
            <h2>Our Complete Range of Services</h2>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs fade-in">
            {['all', 'skin', 'hair', 'cosmetic', 'laser'].map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Treatment Cards */}
          <div className="treatments-grid services-grid">
            {filteredTreatments.map((treatment, index) => (
              <div key={index} className="treatment-card">
                <div className="service-card-icon">{treatment.icon}</div>
                <h3 style={{ fontSize: '18px' }}>{treatment.name}</h3>
                <p>{treatment.description}</p>
                <div className="treatment-badges">
                  <span className="treatment-badge">⏱ {treatment.duration}</span>
                  <span className="treatment-badge">🔁 {treatment.sessions}</span>
                </div>
                <a
                  href={getWhatsappUrl(treatment.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '16px' }}
                >
                  Book This Treatment
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="The Process" />
            <h2>How It Works</h2>
          </div>
          <div className="process-timeline fade-in" style={{ marginTop: '48px' }}>
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{index + 1}</div>
                <div className="process-icon">{step.icon}</div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center fade-in">
            <SectionLabel text="FAQ" />
            <h2>Common Questions</h2>
          </div>
          <div className="faq-list" style={{ marginTop: '48px' }}>
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item fade-in ${openFaq === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-content">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2 style={{ marginBottom: '16px', fontStyle: 'italic', color: 'white' }}>
            Ready to Start Your<br />Skin Journey?
          </h2>
          <p style={{ opacity: 0.9 }}>Book a consultation today and take the first step towards healthier skin.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">Book Consultation</Link>
            <a
              href={getWhatsappUrl('general consultation')}
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

export default Services;
