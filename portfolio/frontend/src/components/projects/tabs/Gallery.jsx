import './Gallery.css';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

export default function Gallery({ data, projectId }) {
  const images = data.images || [];

  if (images.length === 0) {
    return (
      <div className="gallery-empty card">
        <p>Screenshots coming soon...</p>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {images.map((img, i) => (
        <div key={i} className="gallery-item card">
          <img
            src={`${API_BASE}/projects/${projectId}/images/${img.filename}`}
            alt={img.caption || `Screenshot ${i + 1}`}
            loading="lazy"
          />
          {img.caption && <p className="gallery-caption">{img.caption}</p>}
        </div>
      ))}
    </div>
  );
}
