import React from "react";

export default function ResumePDF() {
  const resumeData = {
    name: "NARESH P V",
    contact: "+91 8073247929 | Bangalore | nareshpv.2022@gmail.com",
    summary:
      "Computer Science undergraduate with hands-on experience in computer vision, deep learning–based object detection, and full stack development. Strong foundation in data structures, algorithms, and object-oriented programming. Interested in contributing to innovative tech solutions in a collaborative environment.",
    education: [
      {
        degree: "B Tech Computer Science Engineering",
        institution: "PES University",
        period: "2022 - Present",
        location: "Bangalore",
      },
      {
        degree: "PUC (Pre-University Course)",
        institution: "M D R Science P U College",
        period: "2020 - 2022",
        location: "Tumkur",
      },
    ],
    skills: {
      Languages: ["C++", "Python", "JavaScript"],
      "AI/CV": ["Computer Vision", "CNNs", "Deep Learning"],
      Frameworks: ["React", "Node.js", "Express", "OpenCV", "PyTorch"],
      Databases: ["MongoDB", "MySQL"],
      "Cloud/DevOps": ["Docker", "Kubernetes (Minikube)", "AWS (basic)"],
      Backend: ["REST APIs", "JWT"],
      "CS Core": ["DSA", "OOP", "DBMS", "Operating Systems"],
    },
    projects: [
      {
        title: "Automated Vehicle Detection and Monitoring (AVDM)",
        tags: ["Computer Vision", "Deep Learning", "YOLOv5", "OpenCV"],
        highlights: [
          "Developed a computer vision–based vehicle detection and proximity awareness system for lane-change and turn scenarios.",
          "Trained a custom YOLOv5 object detection model on ~1200 multi-angle vehicle images, achieving 0.95 mAP@0.5 and 0.90 F1-score.",
          "Implemented real-time distance and relative speed estimation using sequential proximity data to enhance decision awareness.",
          "Evaluated model performance using Precision, Recall, F1-score, and mAP metrics.",
        ],
      },
      {
        title: "URL Shortener",
        tags: ["MERN Stack", "Docker", "Kubernetes (Minikube)", "REST APIs"],
        highlights: [
          "Developed a scalable URL shortening service using MongoDB, Express.js, React.js, and Node.js (MERN).",
          "Containerized the application using Docker and tested Kubernetes orchestration locally using Minikube to validate scaling and service management.",
          "Implemented RESTful APIs for link creation, redirection, and analytics such as click counts and expiry handling.",
          "Applied microservices architecture principles to structure the system and ensure modularity",
        ],
      },
      {
        title: "Decentralized Chat Application (ChatApp)",
        tags: ["React", "Solidity", "Ethereum", "Hardhat", "Ethers.js", "Vite"],
        highlights: [
          "Built a Web3 chat application enabling secure on-chain messaging and ETH transfers through smart contracts.",
          "Integrated MetaMask for wallet authentication; all operations (account creation, messaging, payments) executed as blockchain transactions with visibility on Etherscan.",
          "Leveraged Context API and ethers.js to ensure seamless blockchain interaction and efficient frontend state management",
        ],
      },
      {
        title: "Expense Tracker",
        tags: ["MERN Stack"],
        highlights: [
          "Created a personal finance tracker to categorize expenses and provide spending insights.",
          "Implemented interactive dashboards with charts/graphs for data visualization and trend analysis.",
          "Added secure user authentication & authorization for persistent storage and management of financial history.",
        ],
      },
    ],
    achievements: [
      "Awarded Distinction Certificate for academic excellence in previous semester",
      "Achieved a perfect score (100/100) in Mathematics at the higher secondary level",
      "Solved 150+ LeetCode problems, strengthening Data Structures and Algorithms proficiency",
    ],
    certificates: [
      "AWS Educate Getting Started with Serverless (Jan, 2025)",
      "HackerRank Problem Solving (Apr, 2024)",
    ],
  };

  return (
    <div className="hidden">
      <div
        id="resume-pdf"
        className="bg-white text-black p-12"
        style={{ width: "8.5in", height: "11in", fontSize: "11px" }}
      >
        {/* Header */}
        <div className="text-center mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold mb-1">{resumeData.name}</h1>
          <p className="text-sm text-gray-700">{resumeData.contact}</p>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Summary</h2>
          <p className="text-justify text-sm leading-relaxed">
            {resumeData.summary}
          </p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Education</h2>
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-xs text-gray-600">{edu.institution}</p>
                </div>
                <div className="text-right text-xs text-gray-600">
                  <p>{edu.period}</p>
                  <p>{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Skills</h2>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.entries(resumeData.skills).map(
              ([category, skills], idx) => (
                <div key={idx}>
                  <span className="font-semibold">{category}:</span>{" "}
                  {skills.join(", ")}
                </div>
              )
            )}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Projects</h2>
          {resumeData.projects.map((project, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold text-sm">{project.title}</p>
              <p className="text-xs text-gray-600 mb-1">
                {project.tags.join(", ")}
              </p>
              <ul className="text-xs space-y-1">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="text-justify">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Achievements</h2>
          <ul className="text-xs space-y-1">
            {resumeData.achievements.map((achievement, idx) => (
              <li key={idx}>• {achievement}</li>
            ))}
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h2 className="text-lg font-bold mb-2 border-b pb-1">Certificates</h2>
          <ul className="text-xs space-y-1">
            {resumeData.certificates.map((cert, idx) => (
              <li key={idx}>• {cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
