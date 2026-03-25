import { motion } from 'framer-motion';
import './Education.css';

export default function Education({ education, languages }) {
  return (
    <div className="edu-lang-row">
      {education?.length > 0 && (
        <motion.section
          className="section edu-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="edu-list">
            {education.map((edu, i) => (
              <div key={i} className="card edu-card">
                <h3>{edu.institution_zh || edu.institution}</h3>
                <p className="edu-field">{edu.field}</p>
                <p className="edu-degree">{edu.degree}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {languages?.length > 0 && (
        <motion.section
          className="section lang-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="section-title">Languages</h2>
          <div className="lang-list">
            {languages.map((lang, i) => (
              <div key={i} className="card lang-card">
                <span className="lang-name">{lang.language}</span>
                <span className="lang-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}
