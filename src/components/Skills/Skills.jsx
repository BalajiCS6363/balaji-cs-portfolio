import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaFigma,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Web Technologies",
    icon: <FaCode />,
    description:
      "Creating responsive and interactive user experiences using modern web development frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    title: "Backend Development",
    icon: <FaDatabase />,
    description: "Building scalable backend solutions and database systems.",
    skills: ["Python", "SQL", "MongoDB"],
  },

  {
    title: "UI / UX Design",
    icon: <FaFigma />,
    description: "Designing user-friendly and visually appealing interfaces.",
    skills: ["Figma", "Adobe XD", "Prototyping"],
  },

  {
    title: "Mobile Application Development",
    icon: <FaMobileAlt />,
    description: "Developing responsive and user-friendly mobile applications.",
    skills: ["Flutter", "Dart", "Java", "Android Studio"],
  },

  {
    title: "AI / Machine Learning",
    icon: <FaBrain />,
    description:
      "Building intelligent and data-driven solutions using AI and Machine Learning.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "Scikit-Learn",
      "Machine Learning",
    ],
  },

  {
    title: "Tools & DevOps",
    icon: <FaTools />,
    description:
      "Utilizing development tools and DevOps practices for efficient development and deployment.",
    skills: ["Git", "GitHub Actions", "Docker", "Vercel", "CI/CD"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-title"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.span variants={fadeUp}>Skills & Expertise</motion.span>

        <motion.h2 variants={fadeUp}>Technical Stack</motion.h2>

        <motion.p variants={fadeUp}>
          Showcasing my technical skills and hands-on experience across modern
          technologies, programming languages, and development frameworks.
        </motion.p>
      </motion.div>

      <motion.div
        className="skills-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-card"
            key={category.title}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
          >
            <div className="skill-card-top">
              <span className="skill-icon">{category.icon}</span>
              <span className="skill-count">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.035 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
