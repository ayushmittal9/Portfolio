import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Code2, Eye, Sparkles, Filter, X } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'AI Dashboard & Workspace',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    description: 'An AI-powered dashboard featuring custom LLM workflows, real-time analytics, dynamic data visualization, and team collaboration.',
    tags: ['React', 'Next.js', 'Tailwind', 'OpenAI API', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Modern E-Commerce Storefront',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance e-commerce platform with instant search, stripe payments, dynamic filter engine, and accessible glassmorphism UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Zustand'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Cloud SaaS Task Management',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    description: 'Kanban & timeline project tracking platform with real-time WebSocket updates, multi-tenant auth, and automated reporting.',
    tags: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Docker'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Fintech Mobile Web App',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive cryptocurrency & stock portfolio management app with live price tickers, interactive charts, and secure wallet login.',
    tags: ['React Native', 'Chart.js', 'Framer Motion', 'Web3.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Developer Portfolio Engine',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    description: 'A sleek, customizable portfolio website template designed for modern software engineers featuring fluid framer animations.',
    tags: ['React', 'Vite', 'Framer Motion', 'Lucide React'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-badge glass-pill">
            <FolderGit2 size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Recent Work & <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my best engineering projects ranging from complex web apps to polished UI components.
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`project-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="project-card glass"
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <button
                      className="preview-btn gradient-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} />
                      <span>Quick View</span>
                    </button>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link primary"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link secondary"
                    >
                      <span>Code</span>
                      <Code2 size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal-backdrop glass"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="modal-content glass"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="modal-image"
                />
                <div className="modal-body">
                  <span className="project-category">{selectedProject.category}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-desc">{selectedProject.description}</p>

                  <div className="project-tags">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-btn hero-primary-btn"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass hero-secondary-btn"
                    >
                      <span>View GitHub Code</span>
                      <Code2 size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
