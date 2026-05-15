import Header from "../Header/header";
import DreamJob from "../LandingPage/DreamJob";
import Companies from "../LandingPage/Companies";
import NewJobCategory from "../LandingPage/NewJobCategory";
import Working from "../LandingPage/Working";
import Testimonials from "../LandingPage/Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-[Poppins]">
      <Header />
      <DreamJob />
      <Companies />
      <NewJobCategory />
      <Working />
      <Testimonials />
    </div>
  );
};

export default HomePage;
