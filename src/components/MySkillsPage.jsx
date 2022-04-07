import React from "react";
import { LightTheme } from "./Themes";
import styledComponents, { ThemeProvider } from "styled-components";
import { Design, Develope } from "./Allsvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
const Box = styledComponents.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;
const Main = styledComponents.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover{
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  cursor: pointer;

  
`;
const Title = styledComponents.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover &{
    &>*{
      fill:${(props) => props.theme.body}
    }
  }
  &>*:first-child{
    margin-left: 1rem;
  }
`;
const Desc = styledComponents.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover &{
      color: ${(props) => props.theme.body};
  }
  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;

  }
  ul, p{
    margin-left: 2rem
  }
  
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <Main>
          <Title>
            <Design width={40} height={40} />
            Designer
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae.
          </Desc>
          <Desc>
            <strong>I Like to Design</strong>
            <ul>
              <li>Mobile App</li>
              <li>Web Design</li>
            </ul>
          </Desc>
          <Desc>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Desc>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Fronted Developer
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto.
          </Desc>
          <Desc>
            <strong>Skills</strong>
            <p>Html, css, React, sass, Flutter, Tailwind etc</p>
          </Desc>
          <Desc>
            <strong>Tools</strong>
            <p>Git, VsCode</p>
          </Desc>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
