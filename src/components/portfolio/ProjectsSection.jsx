import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Car,
  Link2,
  MessageCircle,
  Wallet,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Automated Vehicle Detection & Monitoring",
      shortTitle: "AVDM",
      icon: Car,
      description:
        "Computer vision–based vehicle detection and proximity awareness system for lane-change and turn scenarios.",
      highlights: [
        "Trained custom YOLOv5 model on ~1200 multi-angle vehicle images",
        "Achieved 0.95 mAP@0.5 and 0.90 F1-score",
        "Real-time distance and relative speed estimation",
        "Evaluated using Precision, Recall, F1-score, and mAP metrics",
      ],
      techStack: [
        "Computer Vision",
        "Deep Learning",
        "YOLOv5",
        "OpenCV",
        "Python",
      ],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/20 to-purple-600/20",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      isCapstone: true,
    },
    {
      id: 2,
      title: "URL Shortener",
      shortTitle: "URL Shortener",
      icon: Link2,
      description:
        "Scalable URL shortening service with containerized deployment and Kubernetes orchestration.",
      highlights: [
        "Built with MongoDB, Express.js, React.js, and Node.js (MERN)",
        "Containerized using Docker, tested with Minikube",
        "RESTful APIs for link creation, redirection, and analytics",
        "Applied microservices architecture principles",
      ],
      techStack: [
        "MERN Stack",
        "Docker",
        "Kubernetes",
        "REST APIs",
        "Minikube",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      id: 3,
      title: "Decentralized Chat Application",
      shortTitle: "ChatApp",
      icon: MessageCircle,
      description:
        "Web3 chat application enabling secure on-chain messaging and ETH transfers through smart contracts.",
      highlights: [
        "Secure on-chain messaging and ETH transfers",
        "MetaMask wallet authentication integration",
        "All operations executed as blockchain transactions",
        "Seamless blockchain interaction with ethers.js",
      ],
      techStack: [
        "React",
        "Solidity",
        "Ethereum",
        "Hardhat",
        "Ethers.js",
        "Vite",
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      image:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    },
    {
      id: 4,
      title: "Expense Tracker",
      shortTitle: "Expense Tracker",
      icon: Wallet,
      description:
        "Personal finance tracker to categorize expenses and provide spending insights with interactive dashboards.",
      highlights: [
        "Expense categorization and spending insights",
        "Interactive dashboards with charts/graphs",
        "Trend analysis and data visualization",
        "Secure user authentication & authorization",
      ],
      techStack: ["MERN Stack", "Chart.js", "JWT", "MongoDB"],
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-blue-400 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Projects That Showcase My Skills
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div
          className={`${
            projects[0] ? "grid lg:grid-cols-2 gap-6" : ""
          } max-w-6xl mx-auto`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative ${
                project.isCapstone ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`relative h-full rounded-2xl bg-gradient-to-br ${
                  project.bgGradient
                } border-2 ${
                  project.isCapstone
                    ? "border-violet-500/50 hover:border-violet-500/80 shadow-2xl shadow-violet-500/20"
                    : "border-slate-800/50 hover:border-slate-700/50"
                } backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden ${
                  project.isCapstone ? "p-8" : "p-8"
                }`}
                onClick={() =>
                  setActiveProject(
                    activeProject === project.id ? null : project.id
                  )
                }
              >
                {/* Enhanced background decoration for capstone */}
                {project.isCapstone && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500" />
                  </>
                )}

                {/* Background decoration */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                />

                {/* Image section for capstone project */}
                {project.isCapstone && project.image && (
                  <div className="relative -m-8 mb-6 -mt-8 -ml-8 -mr-8 h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/30 to-violet-950/80" />
                    {/* Capstone Badge on Image */}
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-white text-sm font-bold shadow-lg flex items-center gap-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Capstone Project
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Image section for regular projects */}
                {!project.isCapstone && project.image && (
                  <div className="relative -m-8 mb-6 -mt-8 -ml-8 -mr-8 h-48 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
                  </div>
                )}

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${
                        project.gradient
                      } shadow-lg ${
                        project.isCapstone ? "scale-110" : ""
                      } transition-transform`}
                    >
                      <project.icon
                        className={`text-white ${
                          project.isCapstone ? "w-8 h-8" : "w-6 h-6"
                        }`}
                      />
                    </div>
                    <motion.div
                      animate={{
                        rotate: activeProject === project.id ? 180 : 0,
                      }}
                      className="p-2 rounded-lg bg-slate-800/50"
                    >
                      <Eye className="w-4 h-4 text-slate-400" />
                    </motion.div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`font-bold text-white mb-3 group-hover:text-blue-300 transition-colors ${
                      project.isCapstone ? "text-3xl md:text-4xl" : "text-xl"
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.isCapstone && (
                    <p className="text-violet-300 text-sm font-medium mb-2">
                      Featured Capstone Project
                    </p>
                  )}
                  <p
                    className={`text-slate-400 leading-relaxed mb-6 ${
                      project.isCapstone ? "text-base" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-slate-800/80 text-slate-300 border-slate-700/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Expandable highlights */}
                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-700/50">
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, hIndex) => (
                              <motion.li
                                key={hIndex}
                                className="flex items-start gap-2 text-sm text-slate-400"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hIndex * 0.05 }}
                              >
                                <span
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}
                                />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click hint and GitHub button */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500">
                      {activeProject === project.id
                        ? "Click to collapse"
                        : "Click to see details"}
                    </p>
                    <a
                      href="https://github.com/Naro56?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Code
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Naro56"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500/50 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <Github className="w-5 h-5" />
            View My Work on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
