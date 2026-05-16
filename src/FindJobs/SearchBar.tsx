import MultiInput from "./MultiInput";

const SearchBar = () => {
  return (
    <div className="flex justify-between px-4 py-6">
      <div className="w-1/5">
        <MultiInput />
      </div>
      <div className="w-1/5">
        <MultiInput />
      </div>
      <div className="w-1/5">
        <MultiInput />
      </div>
    </div>
  );
};

export default SearchBar;
