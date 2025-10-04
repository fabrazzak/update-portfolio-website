'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"
import { AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://www.linkedin.com/in/abdur--razzak/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.upwork.com/freelancers/~01cbcc4bb65e1d54ef", icon: SiUpwork, label: "Upwork" },
    { href: "https://wa.me/8801703906980", icon: AiOutlineWhatsApp, label: "WhatsApp" },
    { href: "https://facebook.com/yourprofile", icon: FaFacebook, label: "Facebook" },
    { href: "https://github.com/fabrazzak", icon: FaGithub, label: "GitHub" },
  ]

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <footer className="w-full bg-gray-900/80 backdrop-blur-lg  border-gray-800  px-6">
      <div className="max-w-6xl mx-auto">
        {/* Animated divider similar to header */}
        <div className="relative mb-8 h-px overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          {/* Copyright text */}
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Abdur Razzak. All rights reserved.
          </motion.p>

          {/* Social links with improved styling */}
          <div className="flex items-center space-x-5 ">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                aria-label={social.label}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

         
          
        </div>
      </div>
    </footer>
  )
}

export default Footer