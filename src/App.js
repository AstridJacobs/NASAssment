import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles, theme } from "./components/styles/Global";
import { ImageContainer } from "./components/styles/ImageContainer.styled";
import getApod from "./services/getApodService";
import Home from "./pages/Home";
import Asteroids from "./pages/Asteroids";
import About from "./pages/About";
import NoPageFound from "./pages/NoPageFound";

function App() {
  const [apodData, setApodData] = useState();
  useEffect(() => {
    getApod().then((results) => {
      setApodData(results);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ImageContainer
        style={{
          backgroundImage: `url(${apodData})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asteroids" element={<Asteroids />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </BrowserRouter>
      </ImageContainer>
    </ThemeProvider>
  );
}

export default App;
