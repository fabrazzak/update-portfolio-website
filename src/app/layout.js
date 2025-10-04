'use client'

import './globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { FaArrowUp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import CursorTrail from '@/components/CursorTrail'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Testimonials from '@/components/Testimonial'
import UpworkSection from '@/components/UpworkSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import TopProjects from '@/components/TopProjects'
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  const [showButton, setShowButton] = useState(false)
  const [loading, setLoading] = useState(true)

  // Add scroll event listener to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle loading screen
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (hasVisited) {
      setLoading(false)
    }
  }, [])

  const finishLoading = () => {
    setLoading(false)
    localStorage.setItem('hasVisited', 'true')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <>
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      <html lang="en" className="scroll-smooth">
        <head>
          <title>Abdur Razzak | I am  a passionate Full-Stack Web Developer and Top Rated Freelancer at UpWork who transforms complex business requirements into user-centric digital solutions. I specialize in scalable architectures using technologies like React.js, Next.js, TypeScript, Tailwind CSS,ShadCN, Node.js, Express.js and MongoDB, while also offering deep expertise in WordPress Customization. My mission is to build secure, fast, and impactful web applications that drive growth and delight users</title>
          <meta name="description" content="Professional portfolio showcasing my skills, projects, and achievements" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Your Name | Professional Title" />
          <meta property="og:description" content="Professional portfolio showcasing my skills, projects, and achievements" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourportfolio.com" />
          <meta property="og:image" content="/preview-image.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="overflow-x-hidden">
          <Analytics/>
          <CursorTrail />
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen finishLoading={finishLoading} key="loading" />
            ) : (
              <motion.div 
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full relative"
              >
                {/* Single Navbar */}
                <Navbar />
                
                {/* Main content without extra padding */}
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <TopProjects></TopProjects>
                  <Projects />
                  {/* <Achievements /> */}
                  <Testimonials></Testimonials>
                  <UpworkSection></UpworkSection>
                  <ContactForm></ContactForm>
                </main>
                <Footer></Footer>

                <AnimatePresence>
                  {showButton && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      onClick={scrollToTop}
                      className="fixed bottom-8 right-8 bg-cyan-400 text-black p-2 rounded-full shadow-lg hover:bg-cyan-500 transition-all duration-300 focus:outline-none z-50"
                      aria-label="Scroll to top"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaArrowUp className="text-md" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </body>
      </html>
    </>
  );
}