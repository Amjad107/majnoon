export default function Sidebar({ blocks }) {
  const frontendBlocks = blocks.filter(block => block.type === 'frontend');
  const backendBlocks = blocks.filter(block => block.type === 'backend');

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Frontend</h2>
        <ul className="space-y-2">
          {frontendBlocks.length > 0 ? frontendBlocks.map((block, index) => (
            <li key={index} className="text-sm">{block.title}</li>
          )) : <li className="text-xs text-gray-400">No frontend blocks yet.</li>}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Backend</h2>
        <ul className="space-y-2">
          {backendBlocks.length > 0 ? backendBlocks.map((block, index) => (
            <li key={index} className="text-sm">{block.title}</li>
          )) : <li className="text-xs text-gray-400">No backend blocks yet.</li>}
        </ul>
      </div>
    </div>
  );
}
