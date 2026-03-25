import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ profile }) {
  if (!profile) return null;

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="hero-name">
        <span className="hero-name-zh">{profile.name_zh}</span>
        <span className="hero-name-en">{profile.name}</span>
      </h1>
      <div className="hero-divider" />
      <p className="hero-title">{profile.title}</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-meta">
        <span>{profile.location}</span>
        <span>{profile.email}</span>
      </div>
    </motion.section>
  );
}
