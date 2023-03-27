import { Container } from "../components/styles/Container.styled";
import { Heading, Paragraph } from "../components/styles/Global";

function About() {
  return (
    <Container>
      <h1>NASAssment</h1>
      <br />
      <Paragraph>
        I created this page as assessment assignment for Relatics. I have chosen
        to use React with Javascript as framework and language because these are
        both currently in use at Relatics.
      </Paragraph>
      <br />
      <Heading>Styling</Heading>
      <Paragraph>
        For the styling of this page I used Styled Components. This is a library
        built for React developers, which allows them to use component-level
        styles in your applications.
      </Paragraph>
      <br />
      <Heading>Routing</Heading>
      <Paragraph>
        The routing on this page is handled by React Router, which is the
        default for many React developers and very suitable for the routing on
        this page.
      </Paragraph>
    </Container>
  );
}

export default About;
