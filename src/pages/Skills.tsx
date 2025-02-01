import React from 'react';
import './Skills.css';
import { FaAws, FaDocker, FaGitAlt, FaJava, FaNodeJs, FaReact, FaDatabase  } from 'react-icons/fa';  // Keep only the used ones
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage, SiMongodb } from 'react-icons/si';  // Add SiMongodb


const iconMap: { [key: string]: JSX.Element } = {
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  FaDatabase: <FaDatabase />
};

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'FaReact', description: 'Building interactive UIs' },
      { name: 'HTML5', icon: 'SiHtml5', description: 'Markup language for creating web pages' },
      { name: 'CSS3', icon: 'SiCss3', description: 'Style sheets for web pages' },
      { name: 'TypeScript', icon: 'SiTypescript', description: 'Strongly typed JavaScript superset' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs', description: 'JavaScript runtime for server-side development' },
      { name: 'Express', icon: 'FaNodeJs', description: 'Backend framework for Node.js' },
      { name: 'Spring Boot', icon: 'SiSpringboot', description: 'Framework for Java-based backend services' },
      // { name: 'PHP', icon: 'SiPhp', description: 'Server-side scripting language' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'FaAws', description: 'Cloud computing services platform' },
      { name: 'Docker', icon: 'FaDocker', description: 'Containerization platform for software' },
      { name: 'Kubernetes', icon: 'SiKubernetes', description: 'Container orchestration for automating app deployment' },
      { name: 'Jenkins', icon: 'SiHeroku', description: 'Platform as a Service (PaaS) for app hosting' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', description: 'Open-source relational database' },
      { name: 'MongoDB', icon: 'SiMongoDB', description: 'NoSQL database' }, // Correct icon for MongoDB
      { name: 'MySQL', icon: 'SiMysql', description: 'Popular relational database system' },
      { name: 'Redis', icon: 'FaDatabase', description: 'In-memory data structure store, used as a database, cache, and message broker' }, // Correct icon for MSSQL
    ],
  },
  
  {
    category: 'Messaging & Communication',
    skills: [
      { name: 'RabbitMQ', icon: 'SiRabbitmq', description: 'Message broker for handling asynchronous tasks' },
      // { name: 'iMessage', icon: 'SiImessage', description: 'Instant messaging service by Apple' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillsData.map((categoryData, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{categoryData.category}</h3>
          <div className="skills-grid">
            {categoryData.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
