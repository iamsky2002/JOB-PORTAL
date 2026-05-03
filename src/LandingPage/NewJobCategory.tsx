/**
 * NewJobCategory Component
 * Renders the "Explore Career Opportunities" section.
 * Displays a headline, a subtitle, and a grid of job category cards (e.g., Digital Marketing).
 */
const NewJobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Explore <span className="text-bright-sun-400">Career</span> Opportunities
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Discover opportunities that perfectly match your skills and ambitions. Take the next step in your professional journey with us. Begin your next great career adventure today.
      </div>
      <div className="flex flex-col items-center w-64">
        <div className="p-2 bg-bright-sun-300 rounded-full">
          <img
            className="h-8 w-8"
            src="/Category/Digital Marketing.png"
            alt=""
          />
        </div>
        <div>Digital Marketing</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
          numquam?
        </div>
        <div>1k+ job posted</div>
      </div>
    </div>
  );
};
export default NewJobCategory;
