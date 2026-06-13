import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dsp from "../assets/anime_avatar.png";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      id="home"
      className="px-8 flex min-h-screen w-full items-center justify-center py-28 md:px-16 lg:px-32"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-10 w-full max-w-7xl">
        
        {/* Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-1 flex-col items-center lg:items-start justify-center gap-5 text-center lg:text-left"
        >
          <h1 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-5xl font-light md:text-6xl lg:text-7xl">
            Dipendra Singh Patel
          </h1>
          <h3 className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent text-2xl md:text-3xl font-medium">
            FullStack Developer
          </h3>
          <p className="text-sm md:text-base text-gray-400 max-w-[600px] leading-relaxed">
            I&apos;m a fullstack developer skilled in React.js, React Native, Node.js and Express.js,
            focused on building clean, scalable applications. From web and mobile front-end design to
            seamless database integration with MongoDB and MySQL, I create efficient solutions for
            dynamic user experiences. Let&apos;s build something great together!
          </p>
        </motion.div>

        {/* 3D Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] cursor-pointer"
          >
            <div
              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 w-full h-full"
            >
               <img
                  src={dsp}
                  alt="Dipendra Singh Patel"
                  className="w-full h-full object-cover rounded-full pointer-events-none ring-4 ring-emerald-500/50"
               />
            </div>
            
            {/* Glossy overlay for 3D effect */}
            <div 
              style={{
                transform: "translateZ(75px)",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none mix-blend-overlay"
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
