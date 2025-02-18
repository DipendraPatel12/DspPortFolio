import { motion } from "framer-motion";
import roomfinder from "../assets/firstP.png";
import TodoPro from "../assets/TodoPro.png";
import EcommercePro from "../assets/EcommercePro.png";

const Projects = () => {
  const projectData = [
    {
      image: roomfinder,
      title: "RoomFinder",
      description:
        "A platform for finding and listing rental rooms, flats, and homes with integrated chat functionality.",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT.JS",
        "NODE.JS",
        "EXPRESS",
        "MongoDB",
      ],
      link: "https://finder-pi-lilac.vercel.app", // Add external or internal link
    },
    {
      image: EcommercePro,
      title: "Ecommerce Website",
      description:
        "A fully responsive e-commerce website with product listings, cart functionality, and checkout system.",
      technologies: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT.JS",
        "NODE.JS",
        "EXPRESS",
        "MongoDB",
      ],
      link: "https://ecommerce.example.com",
    },
    {
      image: TodoPro,
      title: "Expense Tracter",
      description:
        "A personal portfolio showcasing my projects and skills, built using modern web technologies.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS"],
      link: "https://assesment-task-git-main-dipendra-s-projects-d6887546.vercel.app/home",
    },
  ];

  const ScrollReveal = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <ScrollReveal>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 cursor-pointer">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="text-xl font-semibold">
                  {project.title || "Untitled Project"}
                </div>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </ScrollReveal>
    );
  };

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
