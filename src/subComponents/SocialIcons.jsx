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
const Line = styledComponents.span`
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
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
