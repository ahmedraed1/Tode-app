import { useState } from "react";
export default function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  const [tagsState, setTagsState] = useState(tags);
  return (
    <>
      <div class="rounded">
        <div class="w-full h-64 flex flex-col justify-between bg-gray-100 text-gray-900 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 class="text-gray-800  font-bold mb-3">{title}</h4>
            <p class="text-gray-800  text-sm">{content}</p>
          </div>
          <div className="flex flex-row gap-2 flex-wrap w-full h-fit">
            {tagsState.map((tag) => (
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <div class="flex items-center justify-between text-gray-800">
              <p class="text-sm">{date}</p>
              <div className="flex flex-row gap-2">
                <button
                  class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                  onClick={() => onEdit(1)}
                >
                  E
                </button>
                <button
                  onClick={() => onDelete(1)}
                  class="w-8 h-8 rounded-full bg-gray-800  text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                >
                  D
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
