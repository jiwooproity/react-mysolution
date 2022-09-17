import React from "react";
import _ from "lodash";

import Profile from "../../../static/image/profile.jpg";

import { MainSide } from "./MainSide";
import { Main as CSS } from "../../../style";
import { Link, Route, Routes } from "react-router-dom";
import Music from "../music/Music";
import Portfolio from "../portfolio/Portfolio";
import Story from "../story/Story";
import Home from "../home/Home";

const Main = () => {
  return (
    <CSS.Container>
      <CSS.Wrapper>
        <CSS.SideWrapper>
          <CSS.ProfileWrapper>
            <CSS.Profile>
              <CSS.ProfileImage src={Profile} />
            </CSS.Profile>
            <CSS.ProfileName>So Jiwoo</CSS.ProfileName>
            <CSS.ProfileEmail>jiwooproity@naver.com</CSS.ProfileEmail>
          </CSS.ProfileWrapper>
          <CSS.SideMenu>
            {_.map(MainSide, (menu, index) => (
              <CSS.Menu>
                <Link to={`/${menu.to}`}>
                  <CSS.MenuText key={index}>{menu.name}</CSS.MenuText>
                </Link>
              </CSS.Menu>
            ))}
          </CSS.SideMenu>
        </CSS.SideWrapper>
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/story"} element={<Story />} />
          <Route path={"/portfolio"} element={<Portfolio />} />
          <Route path={"/music"} element={<Music />} />
        </Routes>
      </CSS.Wrapper>
    </CSS.Container>
  );
};

export default Main;
