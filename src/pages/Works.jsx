import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'hmi',
    title: 'Automotive HMI System',
    intro: 'Designing an in-car interface that balances safety, clarity, and a refined visual language for drivers.',
    image: '/img/HMI.png',
  },
  {
    id: 'ai-accessibility',
    title: 'AI Accessibility Tools',
    intro: 'Exploring how AI can support assistive experiences and make complex systems more inclusive.',
    image: '/img/AI_accessibility.png',
  },
  {
    id: 'accessible-transport',
    title: 'Accessible Public Transport Experience',
    intro: 'Improving accessibility and real-time information in Stockholm\'s SL system.',
    image: '/img/sl.png',
  },
  {
    id: 'smart-home',
    title: 'Smart Home Ecosystem',
    intro: 'Connecting devices into a coherent home experience with calm visuals and clear controls.',
    image: '/img/smart_home.png',
  },

  {
    id: 'cloud-conference',
    title: 'Conference Visual and Motion',
    intro: 'Design the key visual and motions for a conference',
    image: '/img/cloud_platform.png',
  },

  {
    id: 'cloud-platform',
    title: 'Cloud Platform System',
    intro: 'Crafting dashboards, workflows, and information hierarchies for large-scale cloud services.',
    image: '/img/solution_cover.png',
  },
];

export default function Works() {
  return (
    <section id="work" className="section section-work">
      <div className="image-grid">
        {projects.map((project) => (
          <Link
            to={`/${project.id}`}
            key={project.id}
            className="image-card"
          >
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <figcaption>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-intro">{project.intro}</p>
            </figcaption>
          </Link>
        ))}
      </div>
    </section>
  );
}