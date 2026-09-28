import "./Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-title">
        <h2>Education & Experience</h2>

        <p>
          My educational journey, internship experience, and achievements
          in Artificial Intelligence, Machine Learning, and Software Development.
        </p>
      </div>

      <div className="timeline">

      {/* Internship */}
      <motion.div
        className="timeline-item left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

          <div className="card-header">

            <div className="card-icon">
              💼
            </div>

            <div className="card-meta">
              <span>Apr 2026 – July 2026</span>
              <p>Hyderabad, India</p>
            </div>

          </div>

          <h3>Machine Learning Intern</h3>

          <h4>NXT SYNC Pvt. Ltd</h4>

          <p>
            Internship focused on developing Machine Learning models,
            performing data analysis, and building intelligent solutions
            using real-world datasets.
          </p>

          <div className="achievement-title">
            Key Achievements:
          </div>

          <ul>
            <li>Developed and trained ML models for prediction tasks.</li>
            <li>Performed data cleaning and feature engineering.</li>
            <li>Built chatbots using Dialogflow and NLP.</li>
          </ul>

          <div className="skill-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Machine Learning</span>
            <span>Dialogflow</span>
            <span>NLP</span>
          </div>

        </motion.div>


        {/* MCA */}
        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="card-header">

            <div className="card-icon">
              🎓
            </div>

            <div className="card-meta">
              <span>2024 – Present</span>
              <p>Bangalore, India</p>
            </div>

          </div>

          <h3>Master of Computer Applications</h3>

          <h4>Cambridge Institute of Technology, India</h4>

          <p>
            Pursuing a Master of Computer Applications with a focus on
            software development, artificial intelligence, machine learning,
            and data-driven solutions.
          </p>

          <div className="achievement-title">
            Key Achievements:
          </div>

          <ul>
            <li>
              Published Research Paper tittled "Intelligent Manufacturing and Supply Chain Optimization using Machine Learning".
            </li>

            <li>
              Developed AI and Machine Learning projects for predictive analytics.
            </li>

            <li>
              Built cross-platform applications using Flutter.
            </li>
          </ul>

          <div className="skill-tags">
            <span>Algorithms</span>
            <span>Data Structures</span>
            <span>Machine Learning</span>
            <span>Distributed Systems</span>
            <span>Cyber Security</span>
          </div>

        </motion.div>


        {/* BSc */}
        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="card-header">

            <div className="card-icon">
              📘
            </div>

            <div className="card-meta">
              <span>2021 – 2024</span>
              <p>Vijayapura, India</p>
            </div>

          </div>

          <h3>Bachelor of Science (Computer Science)</h3>

          <h4>Pragathi First Grade College</h4>

          <p>
            Completed Bachelor of Science in Computer Science with strong
            foundations in programming, database management, and software development.
          </p>

          <div className="achievement-title">
            Key Achievements:
          </div>

          <ul>
            <li>Built a strong foundation in programming and core CS concepts.</li>
            <li>Completed projects in software and database development.</li>
            <li>Strengthened analytical and problem-solving skills.</li>
          </ul>

          <div className="skill-tags">
            <span>Programming</span>
            <span>Databases</span>
            <span>Networking</span>
            <span>Problem Solving</span>
            <span>Software Development</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;