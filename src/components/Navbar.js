import React from "react";
import { NavbarLink } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/asteroids">Asteroids</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
    </>
  );
}
