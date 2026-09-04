import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Sparkles, Code, Terminal, Layers, Share2, Globe } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="glow-bg hero-glow-1"></div>
      <div className="glow-bg hero-glow-2"></div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <div className="status-badge glass-pill">
            <span className="pulse-dot"></span>
            <span className="status-text">Available for new opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Ayush Mittal</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="hero-bio">
            I build exceptional, high-performance web applications with modern frontend design,
            scalable backend architectures, and seamless user experiences.
          </p>

          <div className="hero-cta-buttons">
            <a href="#projects" className="gradient-btn hero-primary-btn">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="glass hero-secondary-btn">
              <span>Contact Me</span>
              <Mail size={18} />
            </a>
          </div>

          <div className="social-links-wrapper">
            <span className="social-label">Connect with me:</span>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass" aria-label="GitHub">
                <Code size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass" aria-label="LinkedIn">
                <Share2 size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass" aria-label="Twitter">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-visual"
        >
          <div className="code-card glass">
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">developer.ts</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = &#123;{'\n'}
                  {'  '}<span className="property">name</span>: <span className="string">'Ayush Mittal'</span>,{'\n'}
                  {'  '}<span className="property">role</span>: <span className="string">'Full Stack Engineer'</span>,{'\n'}
                  {'  '}<span className="property">location</span>: <span className="string">'Global / Remote'</span>,{'\n'}
                  {'  '}<span className="property">skills</span>: [{'\n'}
                  {'    '}<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'Next.js'</span>,{'\n'}
                  {'    '}<span className="string">'TypeScript'</span>, <span className="string">'PostgreSQL'</span>, <span className="string">'Docker'</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="property">passion</span>: <span className="string">'Building beautiful & performant web applications'</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="floating-card badge-1 glass"
          >
            <Sparkles className="badge-icon" size={20} />
            <div>
              <div className="badge-title">Modern UI/UX</div>
              <div className="badge-desc">Figma to Pixel-Perfect Code</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="floating-card badge-2 glass"
          >
            <Layers className="badge-icon accent" size={20} />
            <div>
              <div className="badge-title">Scalable Backends</div>
              <div className="badge-desc">APIs & Cloud Infrastructure</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
