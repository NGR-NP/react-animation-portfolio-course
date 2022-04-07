import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./Allsvgs";
import Intro from "./Intro";

const MainContainer = styledComponents.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styledComponents.div`
  padding: 2rem;
`;
const Contact = styledComponents.a`
color: ${(props) => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`;
const Blog = styledComponents(NavLink)`
color: ${(props) => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
transform: rotate(90deg) translate(-50%, -50%);
`;
const Work = styledComponents(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
transform:  translate(-50%, -50%) rotate(-90deg);
`;
const BottomBar = styledComponents.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styledComponents(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styledComponents(NavLink)`
  z-index:1;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
const rotate = keyframes`
from{
  transform: rotate(0)
}
to{
  transform: rotate(360deg)
}

`;
const Center = styledComponents.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  &>:first-child{
    animation: ${rotate} infinite 2s linear;
  }
  &>:last-child{
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;
const DarkDiv = styledComponents.div`
position: absolute;
top: 0;
bottom: 0;
right: 50%;
width: ${(props) => (props.click ? "50%" : "0%")};
height: ${(props) => (props.click ? "100%" : "0%")};
z-index: 1;
background-color: #000;
transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <DarkDiv click={click} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click hear</span>
        </Center>
        <Contact
          href="mailto:contact@tejbahadurkarki.com.np"
          target="_blank"
          rel="noreferrer"
        >
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            say hi..
          </motion.h3>
        </Contact>
        <Blog to="/blog">
          <motion.h3 whileHover={{ scale: 1.1 }} whileTab={{ scale: 0.9 }}>
            Blog
          </motion.h3>
        </Blog>
        <Work to="/work" click={click}>
          <motion.h3 whileHover={{ scale: 1.1 }} whileTab={{ scale: 0.9 }}>
            Work
          </motion.h3>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTab={{ scale: 0.9 }}>
              About
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTab={{ scale: 0.9 }}>
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
