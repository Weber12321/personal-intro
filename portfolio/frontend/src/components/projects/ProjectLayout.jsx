import { useState } from 'react';
import { motion } from 'framer-motion';
import TabBar from './TabBar';
import Description from './tabs/Description';
import Structure from './tabs/Structure';
import Gallery from './tabs/Gallery';
import './ProjectLayout.css';

const TAB_COMPONENTS = {
  text: Description,
  diagram: Structure,
  gallery: Gallery,
};

export default function ProjectLayout({ project }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!project) return null;

  const tabs = project.tabs || [];
  const currentTab = tabs[activeTab];
  const TabComponent = currentTab ? TAB_COMPONENTS[currentTab.type] : null;

  return (
    <motion.div
      className="project-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-header">
        <h1 className="project-name">{project.name}</h1>
        <p className="project-desc">{project.short_description}</p>
        <div className="project-meta">
          {project.company && <span className="badge">{project.company}</span>}
          {project.year && <span className="badge">{project.year}</span>}
          {project.tags?.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
      </div>

      {tabs.length > 0 && (
        <>
          <TabBar
            tabs={tabs}
            activeIndex={activeTab}
            onChange={setActiveTab}
          />
          <div className="tab-content">
            {TabComponent && <TabComponent data={currentTab} projectId={project.id} />}
          </div>
        </>
      )}
    </motion.div>
  );
}
