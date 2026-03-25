import { useState, useMemo } from 'react';
import ReactFlow, { Controls, Background, Handle, Position, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import './Structure.css';

const NODE_COLORS = {
  input: { bg: '#F5F0EB', border: '#8B6F47' },
  process: { bg: '#FFF8F0', border: '#A8895E' },
  agent: { bg: '#F0EBE5', border: '#6B5535' },
  output: { bg: '#EBF0E5', border: '#5B7A3E' },
  default: { bg: '#FFFFFF', border: '#8B6F47' },
};

function CustomNode({ data }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const colors = NODE_COLORS[data.nodeType] || NODE_COLORS.default;

  return (
    <div
      className="flow-node"
      style={{ background: colors.bg, borderColor: colors.border }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Handle type="target" position={Position.Left} className="flow-handle" />
      <div className="flow-node-label">{data.label}</div>
      {showTooltip && data.tooltip && (
        <div className="flow-node-tooltip">
          {data.tooltip}
        </div>
      )}
      <Handle type="source" position={Position.Right} className="flow-handle" />
    </div>
  );
}

const nodeTypes = { custom: CustomNode };
const proOptions = { hideAttribution: true };

export default function Structure({ data }) {
  const nodes = useMemo(() =>
    (data.nodes || []).map(n => ({
      id: n.id,
      type: 'custom',
      position: { x: n.x, y: n.y },
      data: { label: n.label, tooltip: n.tooltip, nodeType: n.type || 'default' },
    })),
    [data.nodes]
  );

  const edges = useMemo(() =>
    (data.edges || []).map((e, i) => ({
      id: `e-${i}`,
      source: e.source,
      target: e.target,
      label: e.label || '',
      animated: true,
      style: { stroke: '#8B6F47' },
      labelStyle: { fontSize: 11, fill: '#666' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#8B6F47' },
    })),
    [data.edges]
  );

  return (
    <div className="structure-tab card">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={proOptions}
      >
        <Controls />
        <Background color="#E8E4DF" gap={20} />
      </ReactFlow>
    </div>
  );
}
