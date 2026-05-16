import DreamJob from "../LandingPage/DreamJob";
import Companies from "../LandingPage/Companies";
import NewJobCategory from "../LandingPage/NewJobCategory";
import Working from "../LandingPage/Working";
import Testimonials from "../LandingPage/Testimonials";
import Subscribe from "../LandingPage/Subscribe";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-[Poppins]">
      <DreamJob />
      <Companies />
      <NewJobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default HomePage;
