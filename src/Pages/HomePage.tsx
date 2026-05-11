import Header from "../Header/header";
import DreamJob from "../LandingPage/DreamJob";
import Companies from "../LandingPage/Companies";
import NewJobCategory from "../LandingPage/NewJobCategory";
import Working from "../LandingPage/Working";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-[Poppins]">
      <Header />
      <DreamJob />
      <Companies />
      <NewJobCategory />
      <Working />
    </div>
  );
};

export default HomePage;
