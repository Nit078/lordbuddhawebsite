import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="logo-section">
          <div className="logo">
            <img src="images/logo_lord.avif" alt="Lord Buddha Public School Logo" />
          </div>
          <div className="school-name">
            <h1>Lord Buddha Public School</h1>
            <p>Pathra Bazar, Siddharthnagar</p>
          </div>
        </div>
        <div className="contact-quick">
          <a href="tel:09457338032">📞 094573 38032</a>
          <a href="mailto:lbpssiddharthnagar@gmail.com">✉️ lbpssiddharthnagar@gmail.com</a>
        </div>
      </div>
      <nav>
        <ul>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('gallery')}>Gallery</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('facilities')}>Facilities</a></li>
          <li><a onClick={() => scrollToSection('academics')}>Academics</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Nurturing Young Minds, Building Bright Futures</h2>
        <p>Welcome to Lord Buddha Public School - Where education meets excellence, and every child's potential is realized through dedicated teaching and holistic development.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Apply for Admission</button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('about')}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { number: '1K+', label: 'Happy Students' },
    { number: '50+', label: 'Expert Teachers' },
    { number: '9', label: 'Classes (LKG-8th)' },
    { number: '100%', label: 'Commitment' }
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Gallery Component
const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    { id: 1, src: 'images/schoolbuild.png', title: 'Our Beautiful Campus', desc: 'Modern infrastructure with spacious grounds' },
    { id: 2, src: 'images/outdoorlearning.png', title: 'Outdoor Education', desc: 'Learning beyond classrooms' },
    { id: 3, src: 'images/yogawellness.png', title: 'Yoga & Wellness', desc: 'Holistic development of mind and body' },
    { id: 4, src: 'images/interactivelearning.png', title: 'Interactive Classes', desc: 'Engaging teaching methods' },
    { id: 5, src: 'images/outdoorevent.png', title: 'Special Events', desc: 'Celebrating achievements together' },
    { id: 6, src: 'images/creativeactivites.png', title: 'Creative Expression', desc: 'Fostering creativity and talent' },
    { id: 7, src: 'images/communityengagement.png', title: 'Community Learning', desc: 'Building values and character' },
    { id: 8, src: 'images/natureconnection.png', title: 'Nature Connection', desc: 'Learning from our environment' }
  ];

  const openLightbox = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Vibrant Campus Life</h2>
        <p className="section-subtitle">Experience the energy, learning, and joy that defines Lord Buddha Public School</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item" onClick={() => openLightbox(item.src)}>
              <img src={item.src} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div className="lightbox active" onClick={closeLightbox}>
          <span className="lightbox-close">&times;</span>
          <img src={lightboxImage} alt="Gallery" />
        </div>
      )}
    </section>
  );
};

// About Component
const About = () => {
  const values = [
    { 
      icon: '🎓', 
      title: 'Academic Excellence', 
      desc: 'Comprehensive curriculum designed to build strong fundamentals and foster a love for learning through innovative teaching methods.' 
    },
    { 
      icon: '💎', 
      title: 'Character Building', 
      desc: 'Emphasis on moral values, discipline, respect, and developing compassionate individuals who contribute positively to society.' 
    },
    { 
      icon: '🌟', 
      title: 'Holistic Development', 
      desc: 'Equal focus on academics, sports, arts, and co-curricular activities to nurture well-rounded personalities.' 
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Our School</h2>
        <p className="section-subtitle">A legacy of excellence in education, rooted in values and tradition</p>
        
        <div className="about-content">
          <div className="about-text">
            <p>Lord Buddha Public School is a premier educational institution in Siddharthnagar, dedicated to providing quality education from LKG to 8th standard. Named after the enlightened one, our school embodies the principles of wisdom, compassion, and holistic development.</p>
            
            <p>We believe in nurturing not just academic excellence but also character, creativity, and critical thinking. Our experienced faculty and modern infrastructure create an environment where every child can discover their unique talents and reach their full potential.</p>
            
            <p>With a strong foundation in values and a forward-looking approach to education, we prepare our students to become responsible citizens and future leaders of tomorrow.</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.icon} {value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Facilities Component
const Facilities = () => {
  const facilities = [
    { icon: '📚', title: 'Well-Equipped Library', desc: 'Extensive collection of books, magazines, and digital resources to encourage reading and research among students.' },
    { icon: '🔬', title: 'Science Laboratories', desc: 'Modern labs for hands-on learning in physics, chemistry, and biology with latest equipment and safety measures.' },
    { icon: '💻', title: 'Computer Lab', desc: 'State-of-the-art technology center with latest computers to prepare students for the digital age.' },
    { icon: '⚽', title: 'Sports Facilities', desc: 'Spacious playgrounds and equipment for various indoor and outdoor games to promote physical fitness.' },
    { icon: '🎨', title: 'Activity Rooms', desc: 'Dedicated spaces for art, music, dance, and creative expression to nurture artistic talents.' },
    { icon: '🏫', title: 'Smart Classrooms', desc: 'Well-ventilated classrooms equipped with modern teaching aids for effective and engaging learning.' }
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <h2 className="section-title">World-Class Facilities</h2>
        <p className="section-subtitle">Modern infrastructure designed to enhance learning and growth</p>
        
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card">
              <div className="facility-icon">{facility.icon}</div>
              <h3>{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Academics Component
const Academics = () => {
  const classes = [
    { title: 'Pre-Primary', desc: 'LKG & UKG - Building strong foundations through play-based learning, creative activities, and social development in a nurturing environment.' },
    { title: 'Primary', desc: 'Classes 1-5 - Developing core skills in language, mathematics, science, and social studies with focus on conceptual understanding.' },
    { title: 'Upper Primary', desc: 'Classes 6-8 - Advanced learning with emphasis on critical thinking, problem-solving, and preparing for higher education.' }
  ];

  return (
    <section id="academics" className="academics">
      <div className="container">
        <h2 className="section-title">Our Academic Programs</h2>
        <p className="section-subtitle">From foundation to excellence - comprehensive education at every level</p>
        
        <div className="classes-grid">
          {classes.map((classItem, index) => (
            <div key={index} className="class-card">
              <h3>{classItem.title}</h3>
              <p>{classItem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', content: 'Lord Buddha Public School\nPathra Bazar, Siddharthnagar\nUttar Pradesh, India' },
    { icon: '📞', title: 'Phone', content: '094573 38032', link: 'tel:09457338032' },
    { icon: '✉️', title: 'Email', content: 'lbpssiddharthnagar@gmail.com', link: 'mailto:lbpssiddharthnagar@gmail.com' },
    { icon: '📱', title: 'Instagram', content: '@lord_buddha_public_school_79', link: 'https://instagram.com/lord_buddha_public_school_79' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you. Reach out for admissions or any queries.</p>
        
        <div className="contact-grid">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <p><a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">{info.content}</a></p>
                  ) : (
                    <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: '📷', title: 'Instagram', link: 'https://instagram.com/lord_buddha_public_school_79' },
    { icon: '✉️', title: 'Email', link: 'mailto:lbpssiddharthnagar@gmail.com' },
    { icon: '📞', title: 'Phone', link: 'tel:09457338032' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              title={social.title}
              target={social.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Lord Buddha Public School. All rights reserved.</p>
          <p>Building futures, one student at a time.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stats />
      <Gallery />
      <About />
      <Facilities />
      <Academics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;