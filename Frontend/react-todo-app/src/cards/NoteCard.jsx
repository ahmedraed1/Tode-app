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
  return (
    <>
      <div class="rounded">
        <div class="w-full h-64 flex flex-col justify-between bg-gray-100 text-gray-900 rounded-lg border border-gray-400 mb-6 py-5 px-4">
          <div>
            <h4 class="text-gray-800  font-bold mb-3">13 things to work on</h4>
            <p class="text-gray-800  text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div className="flex flex-row gap-2 flex-wrap w-full h-fit">
            <span className="block">#Vue</span>
            <span className="block">#react</span>
            <span className="block">#javascript</span>
          </div>
          <div>
            <div class="flex items-center justify-between text-gray-800">
              <p class="text-sm">March 28, 2020</p>
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
