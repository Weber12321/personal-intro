import { motion } from 'framer-motion';
import TimelineNode from './TimelineNode';
import './Timeline.css';

export default function Timeline({ experiences }) {
  if (!experiences?.length) return null;

  return (
    <section className="section">
      <h2 className="section-title">Career Journey</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <TimelineNode experience={exp} isLast={i === experiences.length - 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
