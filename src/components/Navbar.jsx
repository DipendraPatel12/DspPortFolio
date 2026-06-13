import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-4 py-5 text-white backdrop-blur-md md:justify-evenly md:px-16 md:py-6">
      <a
        href="#home"
        className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent opacity-80 text-xl sm:text-2xl md:text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Dipendra Singh Patel
      </a>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
        <a href="#services" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Services</li></a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contact</li></a>
      </ul>

      {/* Desktop Social */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-emerald-400 hover:opacity-100">
          <a href="https://github.com/DipendraPatel12" target="_blank" rel="noreferrer"><BsGithub /></a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-cyan-400 hover:opacity-100">
          <a href="https://www.linkedin.com/in/dipendra-singh-patel-623187210" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[69px] sm:top-[84px] flex h-screen w-full sm:w-1/2 flex-col items-center sm:items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-8 items-center sm:items-start text-xl">
            <a href="#home" onClick={menuOpen} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Home</li></a>
            <a href="#services" onClick={menuOpen} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Services</li></a>
            <a href="#tech" onClick={menuOpen} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Tech</li></a>
            <a href="#projects" onClick={menuOpen} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Projects</li></a>
            <a href="#contact" onClick={menuOpen} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"><li>Contact</li></a>
          </ul>

          <ul className="flex flex-wrap gap-6 items-center justify-center">
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-emerald-400 hover:opacity-100">
              <a href="https://github.com/DipendraPatel12" target="_blank" rel="noreferrer"><BsGithub /></a>
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-cyan-400 hover:opacity-100">
              <a href="https://www.linkedin.com/in/dipendra-singh-patel-623187210/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
