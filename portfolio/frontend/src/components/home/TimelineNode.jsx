import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Timeline.css';

export default function TimelineNode({ experience, isLast }) {
  const [expanded, setExpanded] = useState(false);
  const exp = experience;

  return (
    <div className={`timeline-node ${isLast ? 'last' : ''}`}>
      <div className="timeline-marker">
        <div className={`timeline-dot ${expanded ? 'active' : ''}`} />
        {!isLast && <div className="timeline-line" />}
      </div>

      <div
        className={`timeline-card card ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="timeline-header">
          <span className="timeline-year">{exp.year}</span>
          <div className="timeline-info">
            <h3 className="timeline-company">{exp.company}</h3>
            <p className="timeline-title">{exp.title}</p>
            <p className="timeline-summary">{exp.summary}</p>
          </div>
          <span className={`timeline-chevron ${expanded ? 'open' : ''}`}>&#9662;</span>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="timeline-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {exp.highlights?.length > 0 && (
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              {exp.description && (
                <p className="timeline-description">{exp.description}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
