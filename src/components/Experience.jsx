import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Tech Innovators Inc.',
    period: '2023 - Present',
    location: 'San Francisco, CA (Remote)',
    description: 'Led development of enterprise SaaS web platforms, improving load times by 40% and mentoring junior developers.',
    achievements: [
      'Architected high-throughput REST APIs handling 1M+ daily requests.',
      'Designed micro-frontend state architecture using Next.js and TypeScript.',
      'Streamlined CI/CD deployment pipelines using Docker and AWS ECS.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Apex Digital Solutions',
    period: '2021 - 2023',
    location: 'New York, NY',
    description: 'Developed scalable web interfaces and database models for high-growth fintech clients.',
    achievements: [
      'Engineered interactive real-time dashboard analytics with Chart.js and React.',
      'Reduced database latency by 35% through SQL query optimization and indexing.',
      'Implemented OAuth2 and JWT authentication mechanisms across 4 major products.',
    ],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Creative Code Studio',
    period: '2020 - 2021',
    location: 'Remote',
    description: 'Crafted pixel-perfect, responsive UI design systems from Figma prototypes.',
    achievements: [
      'Built reusable accessible component library with React and Tailwind CSS.',
      'Integrated Framer Motion for micro-interactions and smooth scroll animations.',
      'Achieved 98+ Lighthouse scores across all desktop and mobile builds.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge glass-pill">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my professional roles, key contributions, and engineering milestones.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>

              <div className="timeline-content glass">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="meta-tag glass-pill">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="meta-tag glass-pill">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-achievements">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="achievement-item">
                      <ChevronRight size={16} className="achievement-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
