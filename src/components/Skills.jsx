import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Wrench, ShieldCheck, Zap } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Layout size={20} />,
    skills: [
      { name: 'React', level: '95%', icon: '⚛️' },
      { name: 'Next.js', level: '90%', icon: '▲' },
      { name: 'TypeScript', level: '88%', icon: 'TS' },
      { name: 'Tailwind CSS', level: '92%', icon: '🎨' },
      { name: 'Framer Motion', level: '85%', icon: '✨' },
      { name: 'HTML5 / CSS3', level: '98%', icon: '🌐' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <Server size={20} />,
    skills: [
      { name: 'Node.js', level: '90%', icon: '🟢' },
      { name: 'Express.js', level: '92%', icon: '⚡' },
      { name: 'PostgreSQL', level: '85%', icon: '🐘' },
      { name: 'MongoDB', level: '88%', icon: '🍃' },
      { name: 'REST & GraphQL', level: '90%', icon: '🔌' },
      { name: 'Redis', level: '80%', icon: '⚡' },
    ],
  },
  {
    id: 'tools',
    title: 'DevOps & Tooling',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git & GitHub', level: '95%', icon: '🐙' },
      { name: 'Docker', level: '82%', icon: '🐳' },
      { name: 'AWS / Vercel', level: '85%', icon: '☁️' },
      { name: 'CI/CD Pipelines', level: '80%', icon: '🔄' },
      { name: 'Jest / Cypress', level: '82%', icon: '🧪' },
      { name: 'Figma', level: '88%', icon: '🎨' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge glass-pill">
            <Cpu size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive list of modern frameworks, languages, and tools I use to build seamless web experiences.
          </p>
        </div>

        {/* Tab Filter Buttons */}
        <div className="skills-filter-group">
          <button
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories
            .filter((cat) => activeTab === 'all' || activeTab === cat.id)
            .map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="category-card glass"
              >
                <div className="category-header">
                  <div className="category-icon-box">{cat.icon}</div>
                  <h3 className="category-title">{cat.title}</h3>
                </div>

                <div className="skills-list">
                  {cat.skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-badge">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}</span>
                      </div>
                      <div className="progress-bar-bg">
                        <motion.div
                          className="progress-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
