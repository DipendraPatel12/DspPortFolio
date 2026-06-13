import { motion } from "framer-motion";
import { BiDesktop, BiMobile, BiServer } from "react-icons/bi";

const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <BiDesktop className="text-emerald-400 text-5xl mb-4" />,
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern technologies like React.js and Tailwind CSS.",
    },
    {
      icon: <BiMobile className="text-cyan-400 text-5xl mb-4" />,
      title: "Mobile Development",
      description: "Creating seamless cross-platform mobile experiences for iOS and Android using React Native.",
    },
    {
      icon: <BiServer className="text-emerald-400 text-5xl mb-4" />,
      title: "Backend & APIs",
      description: "Designing scalable and secure server-side architectures and RESTful APIs with Node.js, Express, and databases like MongoDB and MySQL.",
    },
  ];

  return (
    <div
      id="services"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-20 py-20"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl text-center"
      >
        What I Do
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5 w-full max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center max-w-[350px] flex-1 min-w-[280px] p-8 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/60 hover:border-emerald-500/50 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
