import { useState, useEffect } from 'react';
import { PageHero, SectionLabel } from '../components/UI';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    concern: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const concerns = [
    'Acne & Pimple Treatment',
    'Pigmentation & Dark Spots',
    'Skin Allergy & Eczema',
    'Psoriasis Treatment',
    'Vitiligo Management',
    'Skin Tag & Wart Removal',
    'Hair Loss Treatment (PRP)',
    'Dandruff & Scalp Treatment',
    'Hair Thinning Solutions',
    'Anti-Aging & Wrinkle Treatment',
    'Chemical Peels',
    'Botox & Fillers Consultation',
    'Laser Hair Removal',
    'Laser Skin Brightening',
    'Scar & Stretch Mark Treatment',
    'General Consultation',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.concern) {
      newErrors.concern = 'Please select your concern';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // In production, this would submit to a backend API
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const whatsappUrl = 'https://wa.me/91XXXXXXXXXX?text=' + encodeURIComponent('Hi Dr. Sharma, I would like to book an appointment.');

  return (
    <>
      <PageHero
        title="Book An Appointment"
        subtitle="Walk-in or book ahead. We're here Mon–Sat, 10AM–7PM."
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* Contact Layout */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left Column - Clinic Info */}
            <div className="contact-info fade-in">
              <SectionLabel text="Contact Info" />
              <div style={{ marginTop: '24px' }}>
                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <h4>Clinic Address</h4>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      123 Medical Plaza, Connaught Place, New Delhi - 110001
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+91XXXXXXXXXX" style={{ fontSize: '20px', fontWeight: '600', color: '#0B6E6E' }}>
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@drsharmaclinic.com">info@drsharmaclinic.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <h4>Working Hours</h4>
                    <table className="hours-table">
                      <tbody>
                        <tr>
                          <td>Monday – Saturday</td>
                          <td>10:00 AM – 7:00 PM</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="contact-item">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M7 16l3-3 3 3 5-5"/>
                  </svg>
                  <div>
                    <h4>Getting Here</h4>
                    <p>🚇 Nearest Metro: Rajiv Chowk (Blue/Yellow Line)</p>
                    <p style={{ marginTop: '4px' }}>🅿️ Parking: Available nearby at Palika Bazaar</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp whatsapp-btn-large"
              >
                💬 Book via WhatsApp
              </a>

              {/* Social Icons */}
              <div className="social-icons" style={{ marginTop: '24px' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="#0B6E6E" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="#0B6E6E" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="#0B6E6E" width="20" height="20">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="appointment-form fade-in">
              <SectionLabel text="Book Appointment" />
              <h3 style={{ marginTop: '8px', marginBottom: '24px' }}>Fill in your details</h3>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: '64px', marginBottom: '16px' }}>✅</div>
                  <h3 style={{ color: '#0B9E8E', marginBottom: '12px' }}>Appointment Request Received!</h3>
                  <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                    We'll confirm your appointment within 2 hours via phone or WhatsApp.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', age: '', concern: '', date: '', time: '', message: '' });
                    }}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                      />
                      {errors.phone && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        name="age"
                        className="form-input"
                        placeholder="Your age"
                        value={formData.age}
                        onChange={handleChange}
                        min="1"
                        max="120"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Concern / Treatment *</label>
                    <select
                      name="concern"
                      className="form-select"
                      value={formData.concern}
                      onChange={handleChange}
                    >
                      <option value="">Select your concern</option>
                      {concerns.map((concern) => (
                        <option key={concern} value={concern}>{concern}</option>
                      ))}
                    </select>
                    {errors.concern && <span style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.concern}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input
                        type="date"
                        name="date"
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Time</label>
                      <select
                        name="time"
                        className="form-select"
                        value={formData.time}
                        onChange={handleChange}
                      >
                        <option value="">Select time slot</option>
                        <option value="morning">Morning (10 AM – 1 PM)</option>
                        <option value="afternoon">Afternoon (1 PM – 4 PM)</option>
                        <option value="evening">Evening (4 PM – 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Symptoms</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Describe your skin concern or any symptoms..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    Request Appointment
                  </button>

                  <p className="form-disclaimer">
                    * Appointment subject to availability. We'll confirm within 2 hours.
                  </p>

                  <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px', color: '#6B7280' }}>
                    Prefer instant booking?{' '}
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0B9E8E', fontWeight: '500' }}>
                      WhatsApp us ↗
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" style={{ backgroundColor: '#F8FAFA' }}>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6742345264226!2d77.21670931508033!3d28.63299798242094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place!5e0!3m2!1sen!2sin!4v1635959481000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Sharma Clinic Location"
          />
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="emergency-strip">
        <div className="container">
          <h3>For Urgent Appointments</h3>
          <div className="emergency-phone">
            <a href="tel:+91XXXXXXXXXX">📞 +91 XXXXX XXXXX</a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ marginTop: '16px' }}
          >
            💬 or WhatsApp us
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
