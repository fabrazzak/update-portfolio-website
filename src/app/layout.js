"use client";

import "./globals.css";
import { VersionProvider, useVersion } from "@/context/VersionContext";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import CursorTrail from "@/components/CursorTrail";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import FooterV2 from "@/components/v2/FooterV2";
import Navbar from "@/components/Navbar";
import NavbarV2 from "@/components/v2/NavbarV2";
import { Analytics } from "@vercel/analytics/next";

function BodyContent({ children }) {
  const { version } = useVersion();
  
  return (
    <>
      {version === 'v1' ? <Navbar /> : <NavbarV2 />}
      {children}
      {version === 'v1' ? <Footer /> : <FooterV2 />}
    </>
  );
}

export default function RootLayout({ children }) {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  // Add scroll event listener to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle loading screen
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const finishLoading = () => {
    setLoading(false);
    localStorage.setItem("hasVisited", "true");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <html lang="en" className="scroll-smooth">
        <head>
          <title>
            Abdur Razzak | Full-Stack Web Developer | React, Next.js &amp; WordPress
            Expert
          </title>

          <meta
            name="description"
            content="Abdur Razzak is a passionate Full-Stack Web Developer and Top Rated Upwork Freelancer specializing in React, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, and advanced WordPress customization. Building fast, secure, and scalable web solutions."
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            property="og:title"
            content="Abdur Razzak | Full-Stack Web Developer &amp; Top Rated Upwork Freelancer"
          />

          <meta
            property="og:description"
            content="I transform complex business ideas into fast, secure, and user-centric web applications using React, Next.js, MERN stack, and WordPress."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.abdur-razzak.site/" />
          <meta property="og:image" content="/preview-image.jpg" />

          <link rel="icon" href="/favicon.ico" />
        </head>

        <body className="overflow-x-hidden">
          <Analytics />
          <VersionProvider>
            <BodyContent>
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
                    <div>
                      {children}
                    </div>

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
            </BodyContent>
          </VersionProvider>
        </body>
      </html>
    </>
  );
}
