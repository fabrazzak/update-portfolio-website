"use client";
import { useVersion } from '@/context/VersionContext';
import VersionSwitcher from '@/components/VersionSwitcher';

// V1 Components
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonial";
import TopProjects from "@/components/TopProjects";
import UpworkProfileSection from "@/components/UpworkSection";

// V2 Components
import AboutV2 from '@/components/v2/AboutV2';
import ContactV2 from '@/components/v2/ContactV2';
import HeroV2 from '@/components/v2/HeroV2';
import ProjectsV2 from '@/components/v2/ProjectsV2';
import SkillsV2 from '@/components/v2/SkillsV2';
import TestimonialsV2 from '@/components/v2/TestimonialV2';

export default function Home() {
  const { version } = useVersion();

  return (
    <main>
      <VersionSwitcher />

      {version === 'v1' ? (
        <>
          <Hero />
          <About />
          <Skills />
          <TopProjects />
          <Projects />
          <Testimonials />
          <UpworkProfileSection />
          <ContactForm />
        </>
      ) : (
        <>
          <HeroV2 />
          <AboutV2 />
          <SkillsV2 />
          <ProjectsV2 />
          <TestimonialsV2 />
          <ContactV2 />
        </>
      )}
    </main>
  );
}
