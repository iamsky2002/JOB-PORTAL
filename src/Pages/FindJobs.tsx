import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950">
      <SearchBar />
      <Jobs />
    </div>
  );
};

export default FindJobs;
