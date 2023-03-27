import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Container } from "../components/styles/Container.styled";
import getAsteroids from "../services/getAsteroidsService";
import { format } from "date-fns";

function Asteroids() {
  const [asteroidsData, setAsteroidsData] = useState({});
  useEffect(() => {
    getAsteroids().then((results) => {
      setAsteroidsData(results);
    });
  }, []);

  const today = format(new Date(), "yyyy-MM-dd");

  const todaysAsteroids = asteroidsData?.near_earth_objects?.[today];

  const diameterText = (diaMin, diaMax) => {
    const diaMinFixed = diaMin.toFixed(2);
    const diaMaxFixed = diaMax.toFixed(2);
    return (
      `Estimated diameter: ${diaMinFixed} to ${diaMaxFixed} meters` || "Unknown"
    );
  };

  const hazardText = (hazard) =>
    hazard ? "Potentially hazardous" : "No hazard";

  return (
    <>
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
    </>
  );
}

export default Asteroids;
