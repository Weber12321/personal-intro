import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Description.css';

export default function Description({ data }) {
  return (
    <div className="description-tab card">
      <Markdown remarkPlugins={[remarkGfm]}>{data.content || ''}</Markdown>
    </div>
  );
}
