import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Server, Cloud, Wrench, Gamepad2 } from 'lucide-react';
import ProjectCarousel from './components/ProjectCarousel';
import Section from './components/Section';
import SkillCard from './components/SkillCard';

function App() {
  const projects = [
    {
      title: "Athelorn the Sorce-Smith",
      description: "An action RPG game where you play as a blacksmith with magical powers. Features dynamic combat systems and crafting mechanics.",
      image: "https://i.ibb.co/rsWG8cH/image-2024-10-23-221241413.png?auto=format&fit=crop&q=80&w=2070",
      link: "https://mvollstagg.itch.io/athelorn-the-sorce-smith"
    },
    {
      title: "Duologue Me!",
      description: "A real-time messaging web application enabling instant communication between users.",
      image: "https://app-duologue-me.vercel.app/assets/demo.png?auto=format&fit=crop&q=80&w=2034",
      link: "https://app-duologue-me.vercel.app/"
    }
  ];

  const skillGroups = [
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Backend Development",
      skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "Dapper", "Hangfire", "RabbitMQ", "SignalR", "Blazor"]
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Frontend Development",
      skills: ["TypeScript", "React", "Angular", "HTML", "CSS", "JavaScript", "jQuery", "Tailwind", "Bootstrap"]
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      title: "Databases & Storage",
      skills: ["MySQL", "MsSQL", "Redis", "Elasticsearch", "Firebase"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "Cloud & DevOps",
      skills: ["Azure DevOps", "Jenkins"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-red-400" />,
      title: "Tools & Testing",
      skills: ["Postman", "xUnit", "Serilog"]
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-orange-400" />,
      title: "Game Development",
      skills: ["Unity 3D"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(30deg,_#ff0000_12%,_transparent_12.5%,_transparent_87%,_#ff0000_87.5%,_#ff0000),linear-gradient(150deg,_#00ff00_12%,_transparent_12.5%,_transparent_87%,_#00ff00_87.5%,_#00ff00),linear-gradient(270deg,_#0000ff_12%,_transparent_12.5%,_transparent_87%,_#0000ff_87.5%,_#0000ff)] bg-gray-900 bg-[length:2em_2em]"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Muhammet Arslan</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">Back End Developer & Game Developer</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/mvollstagg" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mvollstagg/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mvollstagg@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Section title="About Me" id="about">
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="text-lg leading-relaxed">
            Passionate developer with expertise in full stack web development and game creation. 
            I specialize in building scalable web applications and creating immersive gaming experiences. 
            With a strong foundation in software architecture and game design, I bring ideas to life 
            through clean code and creative solutions.
          </p>
        </div>
      </Section>

      {/* Updated Skills Section */}
      <Section title="Skills" id="skills" className="bg-gray-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <SkillCard 
              key={index}
              icon={group.icon}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" id="projects">
        <div className="max-w-6xl mx-auto">
          <ProjectCarousel projects={projects} />
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Contact" id="contact" className="bg-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">Let's work together! Reach out through any of these channels:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="mailto:mvollstagg@gmail.com" 
               className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
              <Mail className="text-blue-400" />
              <span>mvollstagg@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/mvollstagg/" 
               className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors">
              <Linkedin className="text-green-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2024 Muhammet Arslan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
