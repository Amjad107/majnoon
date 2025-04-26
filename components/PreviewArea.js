import { useState } from 'react';

export default function PreviewArea({ blocks, setBlocks }) {
  const handleEdit = (index, newContent) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index].content = newContent;
    setBlocks(updatedBlocks);
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-6 overflow-y-auto">
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-lg min-h-[80vh] flex flex-col items-center justify-start space-y-6 p-4">
        {blocks.length === 0 ? (
          <div className="text-gray-400 dark:text-gray-300 text-lg">Start building your website with AI!</div>
        ) : (
          blocks.map((block, index) => (
            <div
              key={index}
              className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col space-y-2"
            >
              <EditableBlock
                content={block.content}
                onChange={(newContent) => handleEdit(index, newContent)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function EditableBlock({ content, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState(content);

  const saveEdit = () => {
    setIsEditing(false);
    onChange(tempContent);
  };

  return (
    <div>
      {isEditing ? (
        <textarea
          value={tempContent}
          onChange={(e) => setTempContent(e.target.value)}
          onBlur={saveEdit}
          autoFocus
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      ) : (
        <div onClick={() => setIsEditing(true)} className="cursor-pointer">
          {content}
        </div>
      )}
    </div>
  );
}
