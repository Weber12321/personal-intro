import { useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { fetchProject } from '../api/client';
import ProjectLayout from '../components/projects/ProjectLayout';

export default function Project() {
  const { projectId } = useParams();
  const { data: project, loading, error } = useApi(
    () => fetchProject(projectId),
    [projectId]
  );

  if (loading) return <div style={{ padding: '2rem', color: '#999' }}>Loading...</div>;
  if (error) return <div style={{ padding: '2rem', color: '#c00' }}>Project not found.</div>;

  return <ProjectLayout project={project} />;
}
