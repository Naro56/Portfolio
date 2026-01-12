import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Target, ExternalLink, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Distinction Certificate",
      description: "Awarded for academic excellence in previous semester",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Target,
      title: "Perfect Score in Mathematics",
      description: "Achieved 100/100 in Mathematics at higher secondary level",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Trophy,
      title: "150+ LeetCode Problems",
      description: "Strengthening Data Structures and Algorithms proficiency",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const certificates = [
    {
      title: "AWS Educate Getting Started with Serverless",
      issuer: "Amazon Web Services",
      date: "Jan 2025",
      link: "#",
    },
    {
      title: "HackerRank Problem Solving",
      issuer: "HackerRank",
      date: "Apr 2024",
      link: "#",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-blue-400 text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Recognition
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Achievements & Certifications
            </motion.h2>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Background glow */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 shadow-lg`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl" />
            <div className="relative p-8 rounded-2xl border border-slate-800/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <FileCheck className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Certificates
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
