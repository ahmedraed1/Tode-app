export default function SearchBar({ value, onChange }) {
  return (
    <>
      <div>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Search..."
          className="w-80 h-10 border-2 border-gray-400 rounded-md text-black pl-3 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent focus:ring-inset focus:ring-indigo-600"
        />
      </div>
    </>
  );
}
