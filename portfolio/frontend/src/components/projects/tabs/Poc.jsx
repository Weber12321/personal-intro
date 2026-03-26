import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Poc.css';

export default function Poc({ data }) {
  const source = data.poc_source;

  return (
    <div className="poc-tab card">
      {source && (
        <div className="poc-source-banner">
          <span className="poc-source-label">POC for</span>
          <span className="poc-source-name">{source}</span>
        </div>
      )}
      <Markdown remarkPlugins={[remarkGfm]}>
        {data.content || '*POC content coming soon.*'}
      </Markdown>
    </div>
  );
}
