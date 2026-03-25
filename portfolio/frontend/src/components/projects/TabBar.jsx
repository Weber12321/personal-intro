import './TabBar.css';

export default function TabBar({ tabs, activeIndex, onChange }) {
  return (
    <div className="tab-bar">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          className={`tab-item ${i === activeIndex ? 'active' : ''}`}
          onClick={() => onChange(i)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
