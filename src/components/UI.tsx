import { ReactNode } from 'react';

// Wave Divider Component
interface WaveDividerProps {
  fill?: string;
  position: 'top' | 'bottom';
}

export const WaveDivider = ({ fill = '#FFFFFF', position }: WaveDividerProps) => {
  return (
    <div className={`wave-${position}`}>
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill={fill}></path>
      </svg>
    </div>
  );
};

// Page Hero Component
interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path?: string }[];
}

export const PageHero = ({ title, subtitle, breadcrumb }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="hero-animate">{title}</h1>
        {subtitle && <p className="subtitle hero-animate">{subtitle}</p>}
        {breadcrumb && (
          <div className="breadcrumb hero-animate">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {item.path ? (
                  <a href={item.path} style={{ color: 'white' }}>{item.label}</a>
                ) : (
                  item.label
                )}
                {index < breadcrumb.length - 1 && ' > '}
              </span>
            ))}
          </div>
        )}
      </div>
      <WaveDivider position="bottom" fill="#FFFFFF" />
    </section>
  );
};

// Section Label Component
interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel = ({ text, className = '' }: SectionLabelProps) => {
  return (
    <span className={`label section-label ${className}`}>{text}</span>
  );
};

// Google Badge Component
interface GoogleBadgeProps {
  link?: string;
}

export const GoogleBadge = ({ link = '#' }: GoogleBadgeProps) => {
  return (
    <div className="google-badge">
      <span className="google-badge-stars">⭐⭐⭐⭐⭐</span>
      <span className="google-badge-text">4.9 · 300+ Google Reviews</span>
      <a href={link} className="google-badge-link">Read All Reviews →</a>
    </div>
  );
};

// Scroll Animation Hook
export const ScrollReveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`fade-in ${className}`}>
      {children}
    </div>
  );
};
