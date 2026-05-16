import MultiInput from "./MultiInput";
import { dropdownData } from "../Data/JobsData";

const SearchBar = () => {
  return (
    <div className="flex justify-between px-4 py-6">
      {dropdownData.slice(0, 3).map((item, index) => (
        <div key={index} className="w-1/5">
          <MultiInput {...item} />
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
