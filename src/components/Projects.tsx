import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "The Eagles Dapp",
    description: "Full-stack Dapp with <span class='gradient-highlight'>integrated MLM Contract</span> for <span class='gradient-highlight'>seamless Users management</span>. Features <span class='gradient-highlight'>Next-Auth authentication</span> and <span class='gradient-highlight'>real-time updates</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/screencapture-theeagles-io-2025-09-23-01_05_39.png",
    tags: [ "Next.js", "Tailwind CSS", "TS", "Node.ts", "Express.ts", "Context API", "Mongo","Sockets","Ethers","Wagmi","Zustand"],
    demoUrl: "https://www.theeagles.io/",
    githubUrl: "https://github.com/eagleio786/eagles-frontend"
  },
  {
    id: 2,
    title: "Web3 Sonic Dapp",
    description: "Comprehensive <span class='gradient-highlight'>MLM , Sonic Chain, AI</span> solution with <span class='gradient-highlight'>complete Contract and Payment operations</span>, <span class='gradient-highlight'>secure login and transactions  </span>, and <span class='gradient-highlight'>robust authentication</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%202025-09-23%20at%2001.14.24.png",
    tags: ["Next.ts", "Node.ts", "Postgress", "Wagmi", "Ethers","Express.js","Redux"],
    demoUrl: "https://dapp.web3sonic.com/",
    githubUrl: "https://github.com/kashifali0969082/web3-v2"
  },
  {
    id: 3,
    title: "Imining",
    description: "Product based company <span class='gradient-highlight'>for renting GPU's</span> with <span class='gradient-highlight'>advanced filtering</span>, <span class='gradient-highlight'>search capabilities</span>, and <span class='gradient-highlight'>mission tracking</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%202025-09-23%20at%2004.48.30.png",
    tags: ["react", "Strapi", "TypeScript", "Tailwind"],
    demoUrl: "https://imining.com/",
    githubUrl: "private repo of client"
  },
  {
    id: 4,
    title: "Token Pocket Dapp",
    description: "Full-stack <span class='gradient-highlight'>real-time crypto tracking</span> with <span class='gradient-highlight'>Initial coin offering</span>, <span class='gradient-highlight'>price changes</span>, and <span class='gradient-highlight'>interactive charts</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%202025-09-23%20at%2001.26.46.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "Solidity", "EVM", "SmartContract"],
    demoUrl: "https://pocket-token-git-main-kashif-alis-projects-4b7a74ff.vercel.app",
    githubUrl: "https://github.com/kashifali0969082/Pocket_token"
  },
  {
    id: 5,
    title: "Ai based chat Platform with Voice assistance ",
    description: "Enterprise <span class='gradient-highlight'>chatbot service architecture</span> with <span class='gradient-highlight'>Docker containerization</span>, <span class='gradient-highlight'>Kafka event streaming</span>, and <span class='gradient-highlight'>voice assistance using LiveKit</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%202025-09-23%20at%2001.26.14.png",
    tags: ["Next.ts", "Node.ts", "LiveKit", "Netlify", "Swagger", "Microservices"],
    demoUrl: "https://libre-lyart.vercel.app/dashboard",
    githubUrl: "https://github.com/kashifali0969082/libre"
  },
  {
    id: 6,
    title: "Ilayer",
    description: "Advanced <span class='gradient-highlight'>Token Swap platform</span> comparing <span class='gradient-highlight'>different chains</span> with <span class='gradient-highlight'>interactive visualizations</span> and <span class='gradient-highlight'>actionable insights</span>.",
    image: "https://vjvazuzcbkvwqdfpjdvd.supabase.co/storage/v1/object/public/portfolio-images/Screenshot%202025-09-23%20at%2001.24.09.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "RainbowKit", "Wagmi", "Framer Motion", "Recharts"],
    demoUrl: "https://ilayer-v2.vercel.app/",
    githubUrl: "https://github.com/kashifali0969082/ilayer-v2",
    status: "Completed",
    statusColor: "",
    statusGlow: "Completed"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
