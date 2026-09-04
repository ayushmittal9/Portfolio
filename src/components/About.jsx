import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Code2, Rocket, Heart, CheckCircle2 } from 'lucide-react';
import './About.css';

const highlights = [
  {
    icon: <Code2 className="highlight-icon" size={24} />,
    title: 'Clean & Scalable Architecture',
    description: 'Writing maintainable, modular, and optimized code following best practices.',
  },
  {
    icon: <Rocket className="highlight-icon" size={24} />,
    title: 'Performance Focused',
    description: 'Crafting lightning-fast web applications with high lighthouse scores and smooth UX.',
  },
  {
    icon: <Award className="highlight-icon" size={24} />,
    title: 'Full Stack Versatility',
    description: 'End-to-end expertise spanning responsive React interfaces to Node/SQL microservices.',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Tech Tools Mastered' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge glass-pill">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate Developer Driven by <span className="gradient-text">Innovation</span>
          </h2>
          <p className="section-subtitle">
            A quick glimpse into who I am, what I do best, and how I turn complex problems into elegant solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bio-card glass"
          >
            <h3 className="bio-heading">Building digital products that make a real impact.</h3>
            <p className="bio-text">
              Hello! I'm <strong>Ayush Mittal</strong>, a dedicated Full Stack Developer with a strong foundation in modern web engineering. I specialize in building responsive frontend user interfaces paired with robust, high-availability backend systems.
            </p>
            <p className="bio-text">
              My journey involves working closely with cutting-edge technologies like React, Next.js, Node.js, and TypeScript to deliver high-performance applications. Whether designing intuitive design systems or scaling database queries, I take pride in delivering end-to-end excellence.
            </p>

            <div className="bio-bullets">
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Responsive & Accessible UI/UX Design</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>REST & GraphQL API Architecture</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Database Optimization & Cloud Deployment</span>
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights Grid */}
          <div className="highlights-wrapper">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="highlight-card glass"
              >
                <div className="highlight-icon-box">{item.icon}</div>
                <div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="stats-container glass"
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
