import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code2,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nareshpv.2022@gmail.com",
      href: "mailto:nareshpv.2022@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8073247929",
      href: "tel:+918073247929",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:bg-slate-700",
    },
    {
      icon: Code2,
      label: "LeetCode",
      href: "https://leetcode.com",
      color: "hover:bg-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-blue-400 text-sm font-medium tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let's Build Something Amazing
            </motion.h2>
            <motion.p
              className="text-slate-400 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm always excited to connect with fellow developers, discuss new
              opportunities, or collaborate on interesting projects.
            </motion.p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4 shadow-lg`}
                >
                  <method.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  {method.label}
                </p>
                <p className="text-white font-medium">{method.value}</p>
                {method.href && (
                  <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 ${link.color} transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 rounded-xl font-medium shadow-lg shadow-blue-500/25"
              onClick={() =>
                (window.location.href = "mailto:nareshpv.2022@gmail.com")
              }
            >
              <Send className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 pt-8 border-t border-slate-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Naresh P V. Crafted with passion.
        </p>
      </motion.div>
    </section>
  );
}
