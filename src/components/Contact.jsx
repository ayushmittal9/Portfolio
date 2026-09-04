import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Code2, Share2, Globe, MessageSquare, ArrowUp } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge glass-pill">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, a job opportunity, or just want to connect? Feel free to drop a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info-card glass"
          >
            <h3 className="info-title">Contact Information</h3>
            <p className="info-desc">
              I'm always open to discussing new opportunities, tech collaborations, or innovative web development projects.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <a href="mailto:ayush@example.com" className="info-value">
                    ayush.mittal@example.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label">Phone / WhatsApp</span>
                  <span className="info-value">+1 (555) 019-2834</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">San Francisco, CA / Remote</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="social-heading">Follow My Work:</span>
              <div className="social-icon-row">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-pill glass">
                  <Code2 size={18} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill glass">
                  <Share2 size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-pill glass">
                  <Globe size={18} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-card glass"
          >
            {submitted ? (
              <div className="success-message text-center">
                <CheckCircle2 size={54} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out, Ayush will get back to you shortly.</p>
                <button
                  className="gradient-btn reset-form-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-btn form-submit-btn"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer glass">
        <div className="container footer-container">
          <p>© {new Date().getFullYear()} Ayush Mittal. All rights reserved.</p>
          <p className="footer-tagline">Crafted with React, Framer Motion & CSS Glassmorphism</p>
          <button className="back-to-top glass" onClick={scrollToTop} aria-label="Back to Top">
            <ArrowUp size={18} />
          </button>
        </div>
      </footer>
    </section>
  );
}
