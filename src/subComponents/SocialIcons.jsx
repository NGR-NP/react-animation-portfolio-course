import { motion } from "framer-motion";
import React from "react";
import styledComponents from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/Allsvgs";
import { DarkTheme } from "../components/Themes";
const Icons = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;
    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`;
const Line = styledComponents(motion.span)`
width: 2px;
height:8rem;
background-color: ${(props) =>
  props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const Navlink = styledComponents.a`
text-decoration: none;
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <Navlink
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com"
        >
          <Github
            height={25}
            width={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Navlink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <Navlink
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://fb.me"
        >
          <Facebook
            height={25}
            width={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Navlink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <Navlink
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com"
        >
          <Twitter
            height={25}
            width={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Navlink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.8 }}
      >
        <Navlink
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com"
        >
          <YouTube
            height={25}
            width={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </Navlink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
