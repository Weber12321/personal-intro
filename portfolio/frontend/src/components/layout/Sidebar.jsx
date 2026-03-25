import { Link, useLocation } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { fetchProjects } from '../../api/client';
import './Sidebar.css';

export default function Sidebar() {
  const { data } = useApi(fetchProjects);
  const location = useLocation();
  const projects = data?.projects || [];

  return (
    <div className="sidebar-trigger">
      <div className="sidebar-indicator" />
      <nav className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">WH</Link>
          <span className="sidebar-subtitle">Portfolio</span>
        </div>

        <div className="sidebar-section">
          <Link
            to="/"
            className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-title">Projects</div>
          {projects.map(p => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className={`sidebar-link ${location.pathname === `/projects/${p.id}` ? 'active' : ''}`}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
