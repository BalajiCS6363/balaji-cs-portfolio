import "./Certifications.css";
import { motion } from "framer-motion";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <motion.section
      className="certifications"
      id="certifications"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="certifications-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Achievements & Certifications</h2>
        <p>
          A quick overview of my learning milestones and professional growth in
          AI, cloud, and development.
        </p>
      </motion.div>

      <motion.div
        className="certification-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {certifications.map((item, index) => (
          <motion.article
            className="certification-card"
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="certification-header">
              <div className="certification-badge">🏆</div>
              <span className="certification-year">{item.year}</span>
            </div>

            <h3>{item.title}</h3>
            <h4>{item.provider}</h4>

            <p>{item.overview}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Certifications;
