import { motion } from 'framer-motion';
import './TechStack.css';

export default function TechStack({ techStack }) {
  if (!techStack) return null;

  const categories = Object.entries(techStack);

  return (
    <section className="section">
      <h2 className="section-title">Technical Stack</h2>
      <div className="tech-grid">
        {categories.map(([category, items], i) => (
          <motion.div
            key={category}
            className="card tech-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <h3 className="tech-category">{category}</h3>
            <div className="tech-items">
              {items.map(item => (
                <span key={item} className="badge">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
