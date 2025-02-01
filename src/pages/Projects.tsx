import React from "react";
import "./Projects.css";
import eduvaultImage  from "../images/Eduvalt.jpg"
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo,
} from "react-icons/si";
import { Project } from "../types";
import { GrDeploy, GrKubernetes } from "react-icons/gr";

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
      image: { url: "https://via.placeholder.com/150" },
    },
    {
      title: "Microservices-Driven Coding Platform ",
      description: "A high-performance coding platform built with Express.js, Fastify, Redis, and MongoDB, supporting efficient problem management, multi-language execution, and fast submissions. It uses Docker, design patterns, and Redis queues to improve performance, with real-time communication via Socket.IO.",
      techUsed: "Express.js, Fastify, Redis, MongoDB",
      image: { url: "https://via.placeholder.com/150" }
    }
,    
    {
      title: "Chat Application",
      description:
        "A real-time chat application built with Node.js, Express, and Socket.io, allowing users to communicate instantly through private and group chats. The app uses MongoDB for persistent message storage and supports features like user authentication, message history, and real-time notifications.",
      techUsed: "Node.js, Express, Socket.io, MongoDB",
      image: { url: "https://via.placeholder.com/150" },
    },
    {
      title: "Hotel Booking Application",
      description:
        "A full-stack hotel booking platform built with Node.js, Express, and MongoDB. Users can search for available hotels, book rooms, and manage their reservations. The app offers features like user authentication, booking history, and real-time availability updates.",
      techUsed: "Node.js, Express, MongoDB, React",
      image: { url: "https://via.placeholder.com/150" },
    },
    {
      title: "LiquidX",
      description:
        "LiquidX is a comprehensive liquidation platform designed to help businesses efficiently sell surplus or unused inventory. Built with Node.js, Express, and MongoDB, the app allows users to list items, manage bids, and track sales, offering real-time updates and streamlined transactions.",
      techUsed: "Node.js, Express, MongoDB, React",
      image: { url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhEQEBAVEhUQFRAVEA8PDw8PEBAPFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAECBQYA/8QANRAAAgECBQMCBQIFBAMAAAAAAQIAAxEEEiExQQVRcWGBBhMiMpFCoRRSYrHRI3LB8BWS4f/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAuEQACAgIDAAEDAwMDBQAAAAAAAQIRAyEEEjFBBRNRIjJhI5HwFHGxFUKhwdH/2gAMAwEAAhEDEQA/AE0adNM9IM0zGEYwplGQQqwnOyFkWQTKGNQMvAyUSYjEYIiI2ANSEqkxZDSiVFbLqIyAy0tiAoRGQ6LBY6CCqyxDxQq6x0y5FBSlqGs9kjINhqKyyIkiakdkij1JJEFl6yi0YEfTKrDWQ1R8C0WtCmJJWEarGsTqK1qkWy2MTPeobxS9JUPYJ4yKciNvDAnYR0YcmjVw2HksxzkNhbSFQvXfiMMhas9pLGUbFsTUuIOxbCFMElUgWtIpDuCbL/xZA2k7C/aTCrjrWh7IR4LDPj/WDRUuOctSaOjqsaRo6ZW0Mo0SfglFzOdmQ0SrCZWxgJWCwkxWKRK2APSEqkVy8GVErK2EtGQCryyIyKAyweghjJAoBVEsRbEHaMhwq0xLULYCsIw8StMy2I1FmEYiJWQlA61SGwxiJOOYtlyK5o1hoA9SEKSPSEKCjc7SE7Uja6X0vYmMkY82c6LD4UCOc+c2w9wICsqzQimdiXO8LZoxxQKnc6mLY8qQM6m3aD5JeiQJBbBmoLWksZJgKiDYSMsTZc0BIDuYKvLDZQxTeMmBoapNDIraDZpgzICROaYWEFUcQBooHgZKLLK2ChqiJTIrkMLEK6L3joFHiJYgpAiJYi1IussRGilQRhkgDRkWJHvmS0nUFUaEdILg6JdgijVpdFXoTLkjjg5y8RqYzDJTIS17j7u55l8oJRs89/1XJLJ/AlUozOnZ3cWVTjaFKtOQvTAMJApgXSMOpACkg1ngIUBsd6bRubxkUZZUjqcLTAEc5s3bDO0BXRSMRilWtraAsjAWxeIFgBA2iyEGCNY8CCyONgEqkE3G8XtsdxTWggqXNhzDYvXR6vRFtIARmwNO4bWRFjegjGOIc1mjWdJIPReMmK0N02jMqaDK8yZUSiSZz5ehF6hgHRCGLIDGklTZWxqnKJFUgt5ELRGaWxQ3UurRydSrGOh0iQ0dBohmjoaiowrsCyqWA3IF7SyMW/APLCD6ykk2Hw3RXbVz8sdj958CaIYJSMPK+sYMH6Y/qY6Oj0B/M3+45ZeuPH5ORP69nf7aQjWxVOhWHy0JCg6ZhYkjS588TRHFGK/kx5/qGfkKsjtIp0astXNVrbsTmBJGU+gjSjqjD92pbZrslL7SNhcWO48yj7Ufwa8P1LNi1GXhnYnp4ZfmUm05DkD8NzK8mLr4dzg/WllX9WNfyjJqAg2Ya/8AHe8q8O5CUZx7RdoA7Qj0AdpBqBFpBqN3pFLaOjFnZvoNIxhZBaQFAnrcQ2FQsWqkC9+YB038ClNRqTFoeUjzVIRPSpIMV0MrQtTazn0iL0te4halfaNZWoFK1TUESWNGLPPWF41oigzljUjWdVRCUq0dMDiO0qkYpaGqZmfKIGWc2fpAdRJXYUyqLA2BjNOUyEaGUlRW0XJhiFIqJamEII6IQYyGQNmjodIYoYUmzPmVDtlUszf4HqY9pelGTMo6jTYDE9UFJ6dSjot8rAEkHvodm9DNOCbWvgwcrjfdi5P1f5/Y0sRiVa5JuDbKw+7Odhfi06UW0eWz4YvbMqs9UEk1Axa9m2IA/SZcoxe0c3PJ46bfpi4qg5LAkjldAwU8sTwPELTL8GaHX0e6XhKv6GAtuz6iw7eYKSWyr7neT6m1hqCIpNVs/LaEU1/2ga+5lUpNG3j8WM/fDJq4v+IcfMJWle1KlT+ksBpfTYTn55tLR6jjcXpC0qoafAUigWi5VlvZKjZ1a/Gb9JmTHya1P+50MGR4nUtp/wDgyKtwSrCxG4O4m20dGNNWgDmEY9RF2AkBJ6Op6algI0TnZmaRaPZmoBWq2gbHjGxeq1heQZfgRxFVja8VyGjFEGtpDYji7FamI0lbyFscZQYgnYRHkH+2vkolQ3Jifc2P0VUFWqCdY3dCdGilapfQQSn+Boxr0sAOZX2YxzJM3G4vTEKIx6iY6KZjtNpRk8KgytOdk9ISxlNkIEDYA1OVSFYwsrELQoJ6Oglg0sJRN4yCQiAn6tALk30BA1tL8MHkmoop5XJjx8Mssvj/AJGEwrOQWqohYXQfNYNUXgKL/aIOYoYXq3+Th8fmyyw7SVIw+shVzgk5zoV5BGx03I7yvFl/B0YzbS/A10av8ymmYfYDfTUadh+n953MU+yTOFysKUmh2nT0AzXbdQq5rkcEW08y2TknaWjzkoxm6vZ6nRDX0BYb5SWIbsRtGWTVbKlhlfw/5G6dO/0j7hchgALNt9spi5J2/DZhUZycVK2v4MT4jrhQKI2YguRcFh+r24leWZ6LgYOq/wA9Fun0gw0axa9wL3P8qA9rbzlZct+nZ+51/wBl/lmzU6fiKaBhsBdlX5YCdiFtrKIRhkl1rZnlycdtv++zN6oSyh2RQ6kBmpm6sp2uOCP+Zvw45QVPw6HA5OOcnCMr/gzGMuOoM9Mp3a8hTldI6fDiwliOdN2Ed4RUhW/eBIsekCr1xDZWkBqOCIG0RJpmaGa5AmdzNSivkKmXLrvFWxXp6B0K4GkAZJsurDX1isGweUXiNj26L1baWksCbKmNYbM3pPSHrajQdzNGTPGHpoz8mOL02K/wuUUtm1ErjzFdGSHPUpVRjJobdpvTNj2MI0oyCUHRpz8jIFvKBSRFbIHpymQrDCAQuJEQ8Y8RkUvLRwgMKBQDE17K9hmuLFf5h2mzhzUcls531fjPPxGk6ppnH/E+BqCqtZM5DhWQ3JdD/IO1jwJrkk7a8Zw8WVKKg3tGp1HH1f8AT+Yv+oET5hNrhub+omDHjX3HXhcv1Rq9Gh8PnRAVBudCWIzHgKO/rxOtBUlZnzNPw6CoDmN0ZGNgE+YCfIbcrL4vXpxeTiXa1uyAh+7KuU6BvqDHv9O/uYzZlUPylsk1wAQwYAXyFVDP5z7AD0lc6WzqcSH6aSOS6y2b6hsQ31Akhj3F+eJja7Wehx/04RXzZbpONAZsiXZFY0weWtcA+9pgniJeRx/U9M5/o3U8ZUrqVqsarHdmYj+rMNsoE0LHHVIRTddX4dXRqBlrLTBHLaGxN9bX72mx5O0XFB+n8WWLkrLN68RnHtM56w3el4ewEiMOaRqs1o1mdKxWri7QdixYgDYmN2FcRX5tzFciddEVnttzK5SoMY2TT0U9zERJPYpfe0RsYrSpQWGxk2A9YGytN2UXUxLH8QQAXgckS7LsIv3IgSY/0vECmgAnL5XIl30Zc67S2N4vHB0ax4MPGzdsiTKcWPrJHFE6nyZ6uL0d34DU5Rk8FYyk583sAUNKmAusrYGHpytsQKDAAkNGQaPZo6QUiLx0MSTGRASIzMAu/HpLIy6uxp9ejU9p+ivUcHisIA4c/Lb9YXNla36jwb7GbI5ll+dnm83HxdqitHMOWZrlrm5uTvcnnzvLcOOnoWTSR0eCTKgvcWNjbRsjb+B3m/JDqkzm4c6yzml4jdw6uAGQI6qCH+W7sqg/2MiaZkzwlXhakrXstMZm0Kl8rFdzrttLJNIwYMM5PaoT6nin+mnYJb6QFbP5B4mTJI9HxMMav4Ri42ndbKft1U9z44vHjjvHaGfJrkOM/PgyUqMrBgbEWytb7SDz/aYcqOpGKar8mmMUz3VFSm1T6S6LZmblSeBEjPJJpN/2/wDYscOPH+p/H5Ok6bgPl08ruCTq1th6CdCMFii79ZycvOcs6lBVFCVXpQD5g2naZJRtnfwfVoZF1fpqUEyrCi6T7MBUrSuUh0hPFKG2iMZSozS7faJLY9L0aoUwFuTJYknsAag3ladjfBZat5OxU0Hp4Gtv8l7cfSZHGfqTKXnxedkHwPS6tR7MppqNWdlI07L3MOPDOct6Qmfl48UbT7P+DaOCwq2plL7XYk39zxNy4kGqo56z8mX67oYTAYUG4pg59ACbgeO0X/SY18CPk8l67eDHyaCC4pJp3FzCuND8CLLnm6cmSlenuEUX/oG8s+zFfAJRyXtv+5xWHYlRPIciNTO5kS7DuES4YSrHJRyJlD00c5jFy1GHrPXYZ9oJnYxvtBMNQlGVgYysxSYpYGVtgYVZVIDDJKxWEvCgFS0dIdEgx0Em8ZELGMQN0qqFqCJlbUbK+RG4UdNjitak9FjkVxZm3sJj4HLl/q4r4OLnxfobOQT4UKn6aiPrcE30/wAz1eDOvXGjl8iMpqoyorj+m1FXlbbnS3g+k1PJHIvwc7FDLx52tp+ieFFUMAlQIDf6WuVJO9xteUtV4zoKf3I31djuKFUAZcQh0+wgbc7fqHeBvXoMUF2tw0ZlKi72AOVhbXU+0r6J7bNs87iqitGmnTHtrubanQa3miM1FdUYJY3OfdvYofh13IC2BO5zAD3B3mTPlUVqNnU48mvWanS/hWogZ2qr8xbFEUqbqPuv6zNi5K+5FVSG5aeTG0ipq/jtOtkpo4yxUL1Qx11AExTfUftFPQZMbdbdpRKR6XgS7402Z+IxUqs30RTxWkllclsFRrC5MiYzTo18H0SrVGYkIp2ZtyPQSxYpS/gwZufjxuvWPU/hamCM1VmH6hYC/vHXGS9Zjl9Tm06js06GGo09Epqvtcn8y+MIrxGOeXLk3JsrieohTa/mWqAYcdyF36nmQ2O17H1jdaLI8frJCFFyWFze+59TDZplpaHCmmW9rak8g8Wk7Iq7K7Jr1fpYEXtbSLewRjtMn5i6XHAgsFSs5+imgni+RK5nYntjuDG8yydNFEjnOti1XyJ6rhyvEdXi7xnsOYMjDIbWZGKWERsDCJKpMDDLEAXvIgGv03oLVBmdsoOw5lqcVpmXLy1B1FWKdV6eaLBb3B1Bjuvgu4+f7qsTElmgsxhslF+mrd4nIlUBczqJu1qxRWYC5CmwtfWcr6ZkgubFz0no5OeLljdHPv1Ws2oY66bC1p7z7ZxXKD9QD/ydT9RvrpcAi3Y+mknWgqCe0K4li/AHqBYe39/xK5JF+ODS0DpU7a5dts177cevP4iNI0JP8jq1yLaW8Lbtv+BGVEeNP0uMbV4I53F7cRkrFUI/ixpOo1F1bKbf0j/vMrlhb8Y6UPwNYTr63vUVRlBIKizXEoXCbdt2HJljGLoxsEXa9SppmJITsDOktenCzZW9RND+JFrWlE0peFUFsycTXAJtOflez2X02HXCJorVGCqCxOwGplO26RtnJRVydI2aPwriDbMUUHf6iSo8S9ceb9OfL6nhV0mzeo/D+GQAFcx5Yk3J72l6wxRzZ8/PJ2nSGeoYrKoA8D0EvgirDi7Ntib4020j0jQsKsWr4omx9LSWkPHGlaF0S511vf8AMXsNJ14MUlBG2hOokciuUmitOllcgdwR6QJklLtGx2gh+u/JglIqk1qgYF2J8RXMMnSQVkHMTsVqTRh0hoJ4/M/1HcktjWFGszTZVIwviKl9amei4GS8Zv4kv0tC2HluRl0htZmbELiVtihElcmRhAYABU3HkSWB+HW0sTlUeJzsuZw/3OY8faTZ7EIldcrmx4btLeLzm5dMhI9sUu0TlcRTysyg3ym1+86dnVhLtFMExhTHQ50ddTM/Lf6CnkeG5ScB1vOHhklK2YZJ0YPxF0Z1ZqtA5la5NLZk/wBvcT1vD+t43WPNp/n4Zh+wmc29Z1NmUgi2jaHU6TtQyxyLtF2hXjUWWGJB/wC6Wva/5glRZGNDZY5EexIe+U8t4lSlbovWPRC4jTfe2t9LH7T44j9qQOhDV+drGxv+lv6v8xkxGlejxxJ7bb8ge8bYrSqyaGPVtVAP9Vt5ZB6Obyf1fpvRrU6gYAMBryOIzVox9K8EXpP8w0kBcjYgcGZ2mjTixx02OYT4WqM2au/y1/lXVj/iZPsOUrkzty+pQxwUcStnQ4TD0aAy01A7sbFj7zRCEY+HOyZMud3NlzjBGoVYWJ/xZJJkov8AtUhXEvnI1jJ0WwXVEqNT6QNkvQN1J9LwNhTSIprqPeCwSfoShpcesF2JP8olVvUHiAF1AddrCK2UrbE6NXfzFbLZRLNVi9gfbRmYfYTyOb9x2ZejWHGszT8K5LRn/EVLQHsZ1/p2T9NF/FezJoibps1sZWZ2xC4iNgLrK2RhAYEwDfT0zOogk6QmR1E2cYbGcvL+8y49oVq1jlPiNgxpzVlqWzHvO3ZrPMYQo1OjLpeYubKombOzRGriceBlfhbHtaWuDlNJFUaOb6misLvqRqttwZ7L6P8AT54ouc9X8GDlcxJ9YbZzWKosgPICKAfUPedGcHFP/PkuxZVk34bLVr9OBF82HxH0c6E3I8AGZ3H+votg3RmrVGthcLcgcPQfVh7GXeDetb9/5X/0Jntck6WAvuHTg+ePaWR0tiP+P7fgQx2KJBRNL7sCdR4glN1ozZJKTCdN0sOANZIOkVTimzaw1bRfEtUtGd49nU4HFqqDYG2p5Mqbtl6wMpieo9jFNGPBsRauW3MlmhQUSCx/+ydg6PbC0DbAw1MDiArkXte5ksHhKC4EVsD0XdACDFsTb0CtqTxI5UPWglFbMWPtApkmrjSB16tzYRHP8EjClbBCn+0ULmGpjSQqk9mbhNhPKZ/3nbn6OUd5ml4VS8KdapXQ+Js4M6ZMLqRztITqTZ0GHEpbFZYRGwBFitkZcRUwG10Oja9Q+0y8rP0qKM2Z3oPimubzFF29iwVC9rhh6Tbh0x3poySJ0bNVlWjJhRu9MWyzmc+XwY8z/UN4fV/Ex4oNySRRN0jP6zjrHKvv6T2P0v6aof1JrZxeXyq/RD05+vVvf1noG0kYsWNt2KYh/wBpllLZ0YY0lbHejVKb0cTQJttVJ7KN7et7TFnU+8ZQNeHJFP8AV4YpqqNVvvcX3B5/M10VPOitXVbjYcdol7oSWRtWDoYZm1tYdzI3QsccpBKf0lh4F/MVTosljpmnRbX0FvzGcw4cNytj1KsTc3i9jc0GzXk7ADlrDxJYnrLKTa8nYjSCJc2g7AdJBF0PmCxHtDCxSpo9cCByJTkQ5zStz/AUuvoTDLyeOJFvbEySfiIrtewEVkh+lNgESxMHgZTtURU27Qtix9JHmCyGbgjpPMcn9x3Joep7zKyth8Wl09o3HlUiuOpHL5LEj1M7MpaOgnouJXZCRFYAglcnsBYQJkOkwYtTUTl8h3kZjk7kDryQ9GiBvofE1r4GfpkEzoI1JHo6YTfwgss5PMdswzexDHdU+XcAi5nb+lcBJLJNHL5nI6rqvTEeuTqeeZ6mMqRyI4rdsXdtZRmzKKtnSw4tC9YxePk7qw8mNaM5mIJsSL6Gxtcdj6QN7FrRamhYhVBJOwEsKqd0bWF6dkW9TUn9PAlcjXixFK9TgSps3Rx0I4mkzEFR5ldgyY7ejQpr/wB9Y1jRSitDlK2kIjGlkAFcXEIFphaG2sFiz9DDvIIeqtA5USKLK0VzZKL1EIF5W/yLF7oOgtaMimWwWIJDADneK3saFddgGurXve/7SMP7o1QXXxFbK7SBO99/xFuxtE5/SNZErMvpraTz3L9O7kNNRMBSxsC6wQdSKnpnN4ynZzOtGVxNsHcQcjY9nhFbIXERsBdYAHSUD9Czl5P3syP0DVlmJbGiBYaGaX6M/TGO83xejV8BKIuRGb0CT0b6D6fac+Me+eMTBkZiVMCGJLbz3mDF1gkeTz8iTysy+pYYoQF1Bk5ElCNm7iLuyopWGu88zyeU8sqXh2oY1FCdcztcB/0zDzPQmC6LVrG4BVOajDT27y+UbZTGWjeTD0sOuVNW5Y7mFmjFhb2ZmLrljKZM6EYqKFrSpsNllkAFQ8GSwMMmtoExRqk+tobFa+RtGkEZGaxg70N6gge8VzsWqDKm0VlbkMBd41ldnnYsLfmK2RJRdkU3C6E+DB2SJKPbaKtUu1+BB23YrjUaKvbUyNix9AUqpJ1itjyil4Q28TuiI8TK3lCkZfTGnJ5WzuZDbWc8zsaobSvxlcjH6xSsbzoYZ3Evwsz5ZZeSIGQsICFl4kAzpKH2icuf7mZH6Cqy7D6NEEdj4miQWzHddT5muL0ak9DGCW7RpPRXkejXxdXJTJjfSManyt/ByuZNxxNoxqedtdh3M9seVUfkNVwmYXzDTvMvNxPJicY+nT4ORQlsEnR6tTUDKv8AOxsLek85h+nZnKpKjsT5WNLWww6fhaOrt81x/wCoPid7DjWGPVMyyjkzO6pA8X1YsLJ9I4A0jOZox8aMfTNqtfUmVuRqSoUYytscqYgKJDSWQsp5gsAxTbWCwNDF9oLFCipA5k6hKesRuwPQxSHEKZVJjKVbSdkVuJcPbcwdqFq/AYqknbSL2C1omsAbW4itixdFH2sOIG6IvSgglkpEIA7Sh5b0gnm9YlSYLBGt2EfqEzOnnWc/NtHdmb9Pac5mVjNAyuQsvBbq1K6maMM6DjezCE1GosBIQmCwkoNR5ED8AzpKJ+kTmy9Mj9B1Jdi9CgU0SGZlVx9RmiD0Xxehvpq63i5ZUivKx3qZAp3YXH7Tf9Axt5pTflHJ58v6TS+TDbFX5t6T19nCUD1LFEGLJ2XYlTBYzq1ZiVZ7AbAaC0wSzNOmd3Fx8dKSQp82J3s0UeNWDsSiheCxgbNA2QjeLZCRFshIaCyF1qQWCg6t3iWAapCCxWHRpLEaCJU2tJYrQVTbUwWK0Q1Qk+IreyUkgue4EEnRWShlcsiQtHhK3kb0iUQfMHWT9BZVqnaOoJAsBUMegJ2Soj0gbMvC6ETkz2j0MjoMOdJz5LZml6MJvKmKy+JW6wQlTEWmc5WSzETpRdo1p2iIQk2gISm4gfgGdFS+0TnS9ZnfpR5Zi9IiiUmY2UE+Jsjink1BWSUlFbCp8POxzOwQduZ1uP8ATJ1/UdFL5sVqKscpjDURoM5HvOjDh4IfF/7lL/1Gb3SEeqdRNRSmUBTxNPeMdRQ8OHFfudnJYkFDb8HuJdDN2Rzs3FeKX8EU6vfY7HsfWP2op6WRidRfkfuJm5C/7jocGb/axXPMqZ0aJzw2KQzyWGj15LAeDxbDROaLZKPAQACjSAgxuItihaT7AwWBoKXgsUMrCSxWFDExXIRl1iSyJChFlEptilriRRb9AyC19JYkkxGyCI9i2Df+0JPgE9zGqyJ0As3eChuyFqW4nKfh3WbuDbSYcnpRNDYlLEC7iJ8iMxeo0rG83YZaovxsTEuLSZCEpuIH4BnSYSkWUW/My4uNkzTqKMk5qPo4uERdajTv8X6RCG8m2Z3lnLUEVqdVVdKa+/E60emNVFDR4kpO5szsRjnb7j7cRZZTVDBCPgo9SVvKW9RepVlTyB6iGJIOhErWRp2gSxqSpmXUplTpqDuJrhyk/wBxz8nCr9oL+JOqnX+4EbJkuNC4sTjO62QTKEzcezRgEEwgLCCwUWyxQkgi8Uhe8FkLoIGwB0btEbAwiwWKGWK5ChQ0VzAEUymUrEYUEQdWJZYPHSSFZcDaSyu9FobF9K1H7Q2FL8gc25MdMLQMNfQRrI0kGWlGKzMWchnoTYwDTHlRTM0BM7KwiGKwMS6hSuJfhlsaDMe02F56QJpdJ6fnOY7cCbuJxPubl4Zs2XrpG3iMT8tcq7/2nZjCGNUkUY8TyO2YtXEMxuxJiPIdCOOMVSBtVlUpjdQTVpW5hUQRqStzDQJ3i9haFaryWAUqmOhRd5YhGDMsQrIBjJisteSwFiYLIXDRWyHotkCCK2AIixXIAZDEchWXDRHIAQRfQBFaChWFVpBGEA2gchAl9oLFZYn9oUL4SAeYSFxLfgRi9VbnxAh06QwlMCNaK27ZdQJO6D1Ziics7xpYFpnyISSNRTMjKgimBoDQPErcQwYq9MOutiZvi9GheFAIyVsJ1fTksntPR8aPWCOdkdyM3H1NTBlkdDDHRnkzO5GgGzStyCBZojkEoXlTkAE7ydhQDtGTFFqhl8WIwDGWoRlDHFZFoQFryALpFbAXVYrkRlxEsBcCLbIXBi0KWBisBcNAKEWBsDCKYLFDLFEYYCAUKgjUIyRIiVZdRfeML4ySbCByoKjbBg+8CkxuoUAmMotg0i/yZasQ6s//2Q==" },
    },
    {
      title: "Eduvault",
      description:
        "Eduvault is a robust e-commerce platform designed for educational course sales, built using the MERN stack. With features like secure JWT authentication, responsive design, and CRUD functionality for course management, it integrates Razorpay for payments and Cloudinary for media handling. Eduvault aims to empower 40% of enthusiastic programmers by providing easy access to top-quality educational resources.",
      techUsed:
        "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose",
      image: { url: eduvaultImage  },
    },
    {
      title: "CareerSearch",
      description:
        "CareerSearch W is a comprehensive job portal built with the MERN stack that empowers recruiters to post job listings, manage recruitment, and streamline hiring processes. Job seekers can search, apply, and track their applications with advanced features like job matching, filters, and a user-friendly dashboard to enhance user satisfaction and the recruitment process.",
      techUsed:
        "React.js, Express, Node.js, Tailwind CSS, MongoDB, React-Redux Toolkit",
      image: { url: "https://via.placeholder.com/150" },
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
