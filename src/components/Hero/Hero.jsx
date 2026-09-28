import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  const stats = [
 
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-ambient hero-ambient-one"></div>
      <div className="hero-ambient hero-ambient-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Python | Flutter | Machine Learning
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Balaji CS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Full Stack Developer | Computer Science Graduate
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer and Flutter Developer passionate about building scalable
          applications, modern user interfaces, and intelligent software
          solutions. Experienced in Machine Learning, Data Analytics and
          full-stack development with a strong focus on solving real-world
          problems through technology.
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="hero-buttons">
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=balajibalu2102003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            Email
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/BalajiCS6363"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/balaji-c-s-9ba20a42b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/file/d/1dmPI0XLyO_nYyk89eQbae6vjxZlvmQWw/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            <FaFileAlt />
            Resume
          </motion.a>
        </div>

        <div className="scroll-text">
          <span>Scroll to explore</span>
          <FaArrowDown />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
