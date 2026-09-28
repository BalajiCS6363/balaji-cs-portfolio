import "./About.css";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaPython,

} from "react-icons/fa";

const expertise = [
  { label: "Python Development", icon: <FaPython /> },
  { label: "Mobile Apps", icon: <FaMobileAlt /> },
  { label: "Web Technologies", icon: <FaCode /> },
  { label: "Data Analysis", icon: <FaChartLine /> },
];

const highlights = [

];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Dedication" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-shell"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.24 }}
      >
        <motion.div className="about-portrait-wrap" variants={fadeUp}>
          <motion.div
            className="about-portrait"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <span className="portrait-ring" />
            <img src="/balaji-profile.png" alt="Balaji C S" />
          </motion.div>

          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />
        </motion.div>

        <div className="about-content">
          <motion.p className="section-kicker" variants={fadeUp}>
            Get To Know
          </motion.p>
          <motion.h2 variants={fadeUp}>About Me</motion.h2>

          <motion.p variants={fadeUp}>
            I'm Balaji C S, an MCA graduate from Cambridge Institute of
            Technology, Bangalore, and a passionate Python and Mobile
            Application Developer. I enjoy building scalable applications with
            clean, efficient code while creating user-friendly digital
            experiences.
          </motion.p>

          <motion.p variants={fadeUp}>
            My expertise includes Python development, web technologies, data
            analysis, and mobile application development. I enjoy transforming
            complex ideas into practical and maintainable solutions. With a
            strong interest in AI and emerging technologies, I continuously
            explore new tools and approaches to improve my skills and deliver
            impactful projects.
          </motion.p>

          <motion.p variants={fadeUp}>
            Beyond development, I value collaboration, creative
            problem-solving, and continuous learning, always striving to
            contribute meaningfully to the tech community.
          </motion.p>

          <motion.div className="about-expertise" variants={container}>
            {expertise.map((item) => (
              <motion.span
                className="expertise-pill"
                key={item.label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {item.icon}
                {item.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="about-stats" variants={container}>
            {stats.map((stat) => (
              <motion.div
                className="about-stat"
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="about-cards"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlights.map((item) => (
          <motion.article
            className="card"
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
