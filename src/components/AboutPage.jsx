import React from "react";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import SpaceMAN from "../assets/Images/spaceman.png";
import styledComponents, { keyframes, ThemeProvider } from "styled-components";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
const Box = styledComponents.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`;
const float = keyframes`
  0% {transform: translateY (-10px)}
  50%{ transform: translateY(15px) translateX(15px)}
  100%{transform: translateY(-10px)}
`;
const Spaceman = styledComponents.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation ${float} 4s ease infinite;
  img{
    width: 100%;
    height: auto;
  }
`;
const Main = styledComponents.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem; 
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={SpaceMAN} alt="spaceman" />
        </Spaceman>
        <Main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ea
          velit? Dignissimos consequatur eveniet, id dolorum explicabo eum
          doloremque enim!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          sint earum eum commodi et nisi laudantium error qui dicta? Error.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          magnam esse a iusto quis ipsa cupiditate necessitatibus, cum maxime
          enim!
        </Main>
        <BigTitle text="About" top="10%" left="35%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
