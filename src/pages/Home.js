import { Container } from "../components/styles/Container.styled";
import { Paragraph } from "../components/styles/Global";

function Home() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <br />
      <Paragraph>
        The picture you see here as background image is the Astronomy Picture of
        the Day from NASA.
      </Paragraph>
      <br />
      <Paragraph>
        If you want to know which asteroids are near earth today and if they are
        potentially hazardous, please click on 'Asteroids' in the header above.
      </Paragraph>
      <br />
      <Paragraph>
        To get some background information about the establishment of this page
        and the choices made, you can take a look under 'About'.
      </Paragraph>
    </Container>
  );
}

export default Home;
