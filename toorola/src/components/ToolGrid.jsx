import ToolCard from './ToolCard.jsx';

export default function ToolGrid({ tools, showDate = false }) {
  return (
    <ul className="grid grid--tools">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <ToolCard tool={tool} showDate={showDate} />
        </li>
      ))}
    </ul>
  );
}