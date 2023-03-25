import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import { ImageContainer } from "./components/styles/ImageContainer.styled";
import getApod from "./services/getApodService";
import getAsteroids from "./services/getAsteroidsService";
import { format } from "date-fns";

const theme = {
  colors: {
    header: "#000000",
    body: "#000000",
  },
  mobile: "768px",
};

function App() {
  const [apodData, setApodData] = useState();
  useEffect(() => {
    getApod().then((results) => {
      setApodData(results);
    });
  }, []);

  const [asteroidsData, setAsteroidsData] = useState({});
  useEffect(() => {
    getAsteroids().then((results) => {
      setAsteroidsData(results);
    });
  }, []);

  const today = format(new Date(), "yyyy-MM-dd");

  const todaysAsteroids = asteroidsData?.near_earth_objects?.[today];

  console.log("todaysAsteroids", todaysAsteroids);

  const diameterText = (diaMin, diaMax) => {
    const diaMinFixed = diaMin.toFixed(2);
    const diaMaxFixed = diaMax.toFixed(2);
    return (
      `Estimated diameter: ${diaMinFixed} to ${diaMaxFixed} meters` || "Unknown"
    );
  };

  const hazardText = (hazard) =>
    hazard ? "Potentially hazardous" : "No hazard";

  console.log(todaysAsteroids);

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
        <h1>Asteroids near earth on {format(new Date(), "dd-MM-yyyy")}</h1>
        <Container>
          {todaysAsteroids?.map((asteroid) => (
            <Card
              key={asteroid.id}
              item={{
                title: asteroid.name,
                diameterText: diameterText(
                  asteroid.estimated_diameter.meters.estimated_diameter_min,
                  asteroid.estimated_diameter.meters.estimated_diameter_max
                ),
                hazardText: hazardText(
                  asteroid.is_potentially_hazardous_asteroid
                ),
              }}
              hazardous={asteroid.is_potentially_hazardous_asteroid}
            />
          ))}
        </Container>
      </ImageContainer>
    </ThemeProvider>
  );
}

export default App;
