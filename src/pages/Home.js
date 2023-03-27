import { Paragraph } from "../components/styles/Global";

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <Paragraph>
        The picture you see here as background image is the Astronomy Picture of
        the Day from NASA.
      </Paragraph>
      <Paragraph>
        If you want to know which asteroids are near earth today and if they are
        potentially hazardous, please click on 'Asteroids' in the header above.
      </Paragraph>
      <Paragraph>
        To get some background information about the establishment of this page,
        you can take a look under 'About'.
      </Paragraph>
    </>
  );
}

export default Home;
