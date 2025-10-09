'use client'
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonial";
import TopProjects from "@/components/TopProjects";
import UpworkProfileSection from "@/components/UpworkSection";


export default function Home() {

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <TopProjects />
      <Projects />
      <Testimonials />
      <UpworkProfileSection />
      <ContactForm />
    </main>
  );
}
