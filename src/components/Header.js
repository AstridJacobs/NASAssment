import Navbar from "./Navbar";
import { Button } from "./styles/Button.styled";
import { FullHeader, Logo } from "./styles/FullHeader.styled";
import { HeaderContainer } from "./styles/FullHeader.styled";

export default function Header() {
  return (
    <FullHeader>
      <HeaderContainer>
        <Logo src="./images/logo.png" alt="logo" />
        <Navbar />
        <a href="https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/overview">
          <Button>More on asteroids</Button>
        </a>
      </HeaderContainer>
    </FullHeader>
  );
}
