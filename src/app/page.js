import { FaBriefcase, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { RiKakaoTalkFill } from 'react-icons/ri'
 export const metadata = {
  title: 'Abdur Razzak ',
  description: "I'm Abdur Razzak — a passionate Full-Stack Web Developer and Top Rated Freelancer at UpWork who transforms complex business requirements into user-centric digital solutions. I specialize in scalable architectures using technologies like React.js, Next.js, TypeScript, Tailwind CSS,ShadCN, Node.js, Express.js and MongoDB, while also offering deep expertise in WordPress Customization. My mission is to build secure, fast, and impactful web applications that drive growth and delight users."
} 
export default function Home() {
  
  return (
    <div className="grid min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col items-center gap-8">
        <div className="text-6xl text-cyan-400 hover:text-cyan-500 transition-colors duration-300">
          <RiKakaoTalkFill />
        </div>

        <div className="flex gap-4 items-center flex-wrap justify-center">
          <a
            className="rounded-full border-2 border-cyan-400 transition-all flex items-center justify-center bg-transparent text-cyan-400 gap-2 hover:bg-cyan-400 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/karthikrayaprolu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            className="rounded-full border-2 border-cyan-400 transition-all flex items-center justify-center bg-transparent text-cyan-400 gap-2 hover:bg-cyan-400 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://linkedin.com/in/rayaprolu-karthik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            className="rounded-full border-2 border-cyan-400 transition-all flex items-center justify-center bg-transparent text-cyan-400 gap-2 hover:bg-cyan-400 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:karthikrayaprolu13@gmail.com"
          >
            <FaEnvelope className="text-xl" />
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
