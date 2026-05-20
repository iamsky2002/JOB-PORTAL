import { useState } from "react";
import { talents } from "../Data/TalentData";
import TalentCard from "./TalentCard";
import Sort from "../FindJobs/Sort";

const Talents = () => {
  const [sort, setSort] = useState("Relevance");

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between items-center mb-5">
        <div className="text-2xl font-semibold">Talents</div>
        <Sort value={sort} onChange={setSort} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {talents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
