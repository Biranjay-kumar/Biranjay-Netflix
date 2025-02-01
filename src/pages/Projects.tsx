import React from "react";
import {
  FaAngular,
  FaAws,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import {
  SiArgo,
  SiAwsamplify,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJquery,
  SiMaterialdesign,
  SiMongodb,
  SiPostgresql,
  SiRubyonrails,
  SiTerraform,
} from "react-icons/si";
import CarrerSearch from "../images/Carrer-search.jpg";
import ChatImage from "../images/Chat.jpg";
import Ecomm from "../images/Ecomm.jpg";
import eduvaultImage from "../images/Eduvalt.jpg";
import Hotel from "../images/Hotel.png";
import LiquidX from "../images/LiquidX.jpg";
import microImage from "../images/micro-image.jpg";
import { Project } from "../types";
import "./Projects.css";

const techIcons: { [key: string]: JSX.Element } = {
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  Cognito: <FaAws />,
  Lambda: <FaAws />,
  ECS: <FaAws />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  "CI/CD": <FaGitlab />,
  GitLab: <FaGitlab />,
  GitHub: <FaGithub />,
  Heroku: <GrDeploy />,
  Netlify: <GrDeploy />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Azure: <FaMicrosoft />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  "Spring Boot": <FaJava />,
  Python: <FaPython />,
  "Node.js": <FaNodeJs />,
  "Express.js": <FaNodeJs />,
  Hibernate: <FaJava />,
  Maven: <FaJava />,
  Gradle: <FaJava />,
  JUnit: <FaJava />,
  Mockito: <FaJava />,
  Jest: <FaReact />,
  React: <FaReact />,
  Angular: <FaAngular />,
  "Vue.js": <FaVuejs />,
  "Next.js": <FaReact />,
  Gatsby: <FaReact />,
  "Nuxt.js": <FaVuejs />,
  Redux: <FaReact />,
  Vuex: <FaVuejs />,
  "Tailwind CSS": <SiCss3 />,
  Bootstrap: <SiCss3 />,
  JQuery: <SiJquery />,
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Vendora",
      description:
        "Vendora is a modern e-commerce platform that connects sellers with customers, offering a seamless shopping experience. It empowers businesses to easily showcase and sell their products while ensuring a secure, user-friendly environment.",
      techUsed: "AWS, Docker, Kubernetes",
      image: { url: Ecomm },
    },
    {
      title: "Microservices-Driven Coding Platform ",
      description:
        "A high-performance coding platform built with Express.js, Fastify, Redis, and MongoDB, supporting efficient problem management, multi-language execution, and fast submissions. It uses Docker, design patterns, and Redis queues to improve performance, with real-time communication via Socket.IO.",
      techUsed: "Express.js, Fastify, Redis, MongoDB",
      image: { url: microImage },
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application built with Node.js, Express, and Socket.io, allowing users to communicate instantly through private and group chats. The app uses MongoDB for persistent message storage and supports features like user authentication, message history, and real-time notifications.",
      techUsed: "Node.js, Express, Socket.io, MongoDB",
      link: "https://chatapp.example.com",
      image: { url: ChatImage },
    },

    {
      title: "Hotel Booking Application",
      description:
        "A full-stack hotel booking platform built with Node.js, Express, and MongoDB. Users can search for available hotels, book rooms, and manage their reservations. The app offers features like user authentication, booking history, and real-time availability updates.",
      techUsed: "Node.js, Express, MongoDB, React",
      image: { url: Hotel },
    },
    {
      title: "LiquidX",
      description:
        "LiquidX is a comprehensive liquidation platform designed to help businesses efficiently sell surplus or unused inventory. Built with Node.js, Express, and MongoDB, the app allows users to list items, manage bids, and track sales, offering real-time updates and streamlined transactions.",
      techUsed: "Node.js, Express, MongoDB, React",
      image: {
        url: LiquidX,
      },
    },
    {
      title: "Eduvault",
      description:
        "Eduvault is a robust e-commerce platform designed for educational course sales, built using the MERN stack. With features like secure JWT authentication, responsive design, and CRUD functionality for course management, it integrates Razorpay for payments and Cloudinary for media handling. Eduvault aims to empower 40% of enthusiastic programmers by providing easy access to top-quality educational resources.",
      techUsed:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose",
      image: { url: eduvaultImage },
    },
    {
      title: "CareerSearch",
      description:
        "CareerSearch  is a comprehensive job portal built with the MERN stack that empowers recruiters to post job listings, manage recruitment, and streamline hiring processes. Job seekers can search, apply, and track their applications with advanced features like job matching, filters, and a user-friendly dashboard to enhance user satisfaction and the recruitment process.",
      techUsed:
        "React.js, Express, Node.js, Tailwind CSS, MongoDB, React-Redux Toolkit",
      image: { url: CarrerSearch },
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <img
              src={project.image.url}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(", ").map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
