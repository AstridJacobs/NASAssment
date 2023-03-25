import { format } from "date-fns";

const getAsteroids = async () => {
  const today = format(new Date(), "yyyy-MM-dd");
  const apiKey = "VKDGLWcWUJfDwgiom0jW3S2VgrHcYMmQb1pVRoIi";
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        return data;
      } else {
        throw new Error("Data not available");
      }
    });
};

export default getAsteroids;
