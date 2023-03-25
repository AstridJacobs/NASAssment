const getApod = async () => {
  const apiKey = "VKDGLWcWUJfDwgiom0jW3S2VgrHcYMmQb1pVRoIi";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.media_type === "image") {
        return data.url;
      } else {
        throw new Error("Image not available");
      }
    });
};

export default getApod;
