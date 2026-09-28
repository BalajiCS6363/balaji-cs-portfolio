import "./Navbar.css";
import { Link } from "react-scroll";
import {  FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="logo">CS</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="certifications" smooth duration={500}>
            Achievements
          </Link>
        </li>

        <li>
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>

      </ul>



      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </motion.nav>
  );
}

export default Navbar;
