import {
  BiLogoGit,
  BiLogoGithub,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {/* MongoDB */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-amber-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* React */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* TailwindCSS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Node.js */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-amber-200 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Redux */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoRedux className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Git */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoGit className="cursor-pointer text-[80px] text-red-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* GitHub */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoGithub className="cursor-pointer text-[80px] text-gray-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Express */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiExpress className="cursor-pointer text-[80px] text-gray-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* MySQL */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiMysql className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiPostgresql className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Docker */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiDocker className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        {/* Redis */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiRedis className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
