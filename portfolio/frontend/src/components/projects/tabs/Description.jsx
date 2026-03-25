import Markdown from 'react-markdown';
import './Description.css';

export default function Description({ data }) {
  return (
    <div className="description-tab card">
      <Markdown>{data.content || ''}</Markdown>
    </div>
  );
}
