import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import HomePage from "./Pages/HomePage";
import FindJobs from "./Pages/FindJobs";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const theme = createTheme({
    colors: {
      "mine-shaft": [
        "#fafafa",
        "#f5f5f5",
        "#e6e6e6",
        "#d6d6d6",
        "#a5a5a5",
        "#767676",
        "#575757",
        "#434343",
        "#2d2d2d",
        "#1a1a1a",
      ],
      "bright-sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b74f06",
        "#943d0c",
        "#7a320d",
      ],
    },
    fontFamily: "'Poppins', sans-serif",
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[Poppins] flex flex-col relative">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/find-jobs" element={<FindJobs />} />
              <Route path="/find-talent" element={<FindTalentPage />} />
              <Route path="/talent-profile" element={<TalentProfilePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
