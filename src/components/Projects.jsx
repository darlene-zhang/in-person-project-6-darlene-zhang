// State: activeFilter (string) tracks the selected project filter, defaulting to 'all'.
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'fullstack',
    image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
    description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    category: 'frontend',
    image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App',
    description: 'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
    tags: ['JavaScript', 'CSS3', 'API']
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'webapp',
    image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager',
    description: 'A productivity app with drag-and-drop features, collaboration tools, and deadline tracking.',
    tags: ['React', 'TypeScript', 'Firebase']
  },
  {
    id: 4,
    title: 'Creative Portfolio',
    category: 'design',
    image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
    description: 'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
    tags: ['HTML5', 'CSS3', 'GSAP']
  }
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Design', value: 'design' },
    { label: 'Web App', value: 'webapp' }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              className={`project-card ${project.id === 1 ? 'featured' : ''}`}
              key={project.id}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <span>🔗</span> Live Demo
                    </a>
                    <a href="#" className="project-link">
                      <span>💻</span> Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">
                    {filters.find(filter => filter.value === project.category)?.label}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
