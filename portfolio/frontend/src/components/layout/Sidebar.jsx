import { Link, useLocation } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { fetchProjects } from '../../api/client';
import './Sidebar.css';

const COMPANY_GROUPS = [
  { label: 'Trend Micro', match: 'Trend Micro', ids: ['appsiq', 'tmsc'] },
  { label: 'TPI', match: 'TPIsoftware', ids: ['systalk_viki', 'systalk_coach'] },
  { label: 'Others', match: 'Personal', ids: ['others'] },
];

export default function Sidebar() {
  const { data } = useApi(fetchProjects);
  const location = useLocation();
  const projects = data?.projects || [];

  const grouped = COMPANY_GROUPS.map(group => ({
    ...group,
    items: group.ids
      .map(id => projects.find(p => p.id === id))
      .filter(Boolean),
  }));

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
          {grouped.map(group => (
            group.items.length > 0 && (
              <div key={group.label} className="sidebar-group">
                <div className="sidebar-group-label">{group.label}</div>
                {group.items.map(p => (
                  <Link
                    key={p.id}
                    to={`/projects/${p.id}`}
                    className={`sidebar-link sidebar-link--nested ${location.pathname === `/projects/${p.id}` ? 'active' : ''}`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )
          ))}
        </div>
      </nav>
    </div>
  );
}
