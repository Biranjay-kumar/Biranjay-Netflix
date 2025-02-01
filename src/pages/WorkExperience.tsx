import React from "react";
import { FaStar as StarIcon } from "react-icons/fa";
import { IoSchool as SchoolIcon } from "react-icons/io5";
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";

// Define colors for consistency
const colors = {
  workPrimary: "rgb(33, 150, 243)",
  workSecondary: "rgb(240, 240, 240)",
  education: "rgb(255, 224, 230)",
  iconEducation: "rgb(255, 160, 200)",
  iconSuccess: "rgb(16, 204, 82)",
};

const timeLineData = [
  {
    timelineType: "work",
    dateRange: "Jan 2025 – Present",
    title: "Software Development Intern",
    name: "Mars Track Technologies Pvt Ltd",
    techStack: "TypeScript, AWS, MSSQL, GitHub",
    summaryPoints: [
      "Developed 25+ RESTful APIs, improving performance.",
      "Integrated backend solutions using MSSQL.",
      "Deployed applications with CI/CD on AWS.",
    ],
  },
  {
    timelineType: "work",
    dateRange: "Aug 2024 – Jan 2025",
    title: "Full-stack Developer (Intern)",
    name: "Airmuse",
    techStack: "Node.js, Redis, AWS, Docker, K6, Express",
    summaryPoints: [
      "Developed APIs using Node.js and Express for enhanced backend functionality.",
      "Optimized backend with Redis for rate limiting and caching.",
      "Conducted load and stress testing using K6, improving system performance.",
      "Deployed applications on AWS with CI/CD pipelines.",
      "Integrated Docker for smooth development-to-production workflows.",
    ],
  },
  {
    timelineType: "work",
    dateRange: "Jun 2024 – Aug 2024",
    title: "Back End Developer (Intern)",
    name: "Saurashtra Tech Innovation",
    techStack: "Node.js, MongoDB, Express.js",
    summaryPoints: [
      "Developed backend APIs using Node.js and MongoDB.",
      "Implemented secure authentication and optimized database queries.",
    ],
  },
  {
    timelineType: "education",
    dateRange: "Aug 2021 – Present",
    title: "B.Tech in Computer Science and Engineering",
    name: "IIIT Ranchi",
    summaryPoints: [
      "Specializing in Web Development and MERN Stack.",
      "Actively involved in DSA practice and coding challenges.",
      "Consistently ranked in the top 10% for competitive programming.",
    ],
  },
];

// Helper function to get icon based on type
const getIcon = (type: string) => (type === "work" ? <WorkIcon /> : <SchoolIcon />);

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{
              background: item.timelineType === "work"
                ? index === 0 ? colors.workPrimary : colors.workSecondary
                : colors.education,
              color: item.timelineType === "work" && index !== 0 ? "#000" : "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                item.timelineType === "work"
                  ? index === 0 ? colors.workPrimary : colors.workSecondary
                  : colors.education
              }`,
            }}
            date={item.dateRange}
            iconStyle={{
              background: item.timelineType === "work" ? colors.workPrimary : colors.iconEducation,
              color: "#fff",
            }}
            icon={getIcon(item.timelineType)}
          >
            <div style={{ color: "black" }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              {item.techStack && <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>}
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: colors.iconSuccess, color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
