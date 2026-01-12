import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function AboutSection() {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
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
  ];

  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-blue-400 text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Passionate Developer & Problem Solver
            </motion.h2>
          </div>

          {/* Summary */}
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-800/50 backdrop-blur-sm mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-3 left-8 px-4 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
              <span className="text-blue-400 text-xs font-medium">Summary</span>
            </div>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                Computer Science undergraduate with hands-on experience in{" "}
                <span className="text-blue-400 font-medium">computer vision</span>
                ,{" "}
                <span className="text-blue-400 font-medium">
                  deep learning–based object detection
                </span>
                , and{" "}
                <span className="text-blue-400 font-medium">
                  full-stack development
                </span>
                . Strong foundation in data structures, algorithms, and
                object-oriented programming.
              </p>
              <p>
                Actively building real-world projects that combine{" "}
                <span className="text-blue-400 font-medium">
                  AI-driven perception systems
                </span>{" "}
                and{" "}
                <span className="text-blue-400 font-medium">
                  scalable backend architectures
                </span>
                , including vision-based vehicle monitoring and MERN applications
                with containerized deployments.
              </p>
              <p>
                Interested in contributing to engineering teams working on{" "}
                <span className="text-blue-400 font-medium">
                  intelligent systems
                </span>
                ,{" "}
                <span className="text-blue-400 font-medium">
                  scalable software
                </span>
                , and{" "}
                <span className="text-blue-400 font-medium">
                  security-conscious application design
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
