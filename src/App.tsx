import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
// ‼️ import carousel styles after core package styles
import "@mantine/carousel/styles.css";
import HomePage from "./Pages/HomePage";
import "./App.css";
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
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
