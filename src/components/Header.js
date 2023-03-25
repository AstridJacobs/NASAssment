import { Button } from "./styles/Button.styled";
import { FullHeader, Logo, Navbar } from "./styles/FullHeader.styled";

export default function Header() {
  return (
    <FullHeader>
      <Navbar>
        <Logo src="./images/logo.png" alt="logo" />
        <a href="https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/overview">
          <Button>More on asteroids</Button>
        </a>
      </Navbar>
    </FullHeader>
  );
}
