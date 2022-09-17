import styled from "styled-components";

const Main = {};

Main.Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e6;

  padding: 80px;
`;

Main.Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  background-color: #fdfdfe;

  border-radius: 25px;
  overflow: hidden;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

Main.SideWrapper = styled.div`
  width: 260px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

Main.ProfileWrapper = styled.div`
  width: 100%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

Main.Profile = styled.div`
  width: 120px;
  height: 120px;

  margin: 0px 0px 15px 0px;

  border-radius: 60px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  overflow: hidden;
`;

Main.ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
`;

Main.ProfileName = styled.span`
  font-size: 15px;
  line-height: 15px;
  font-weight: 700;

  margin: 0px 0px 5px 0px;

  color: #000c3a;
`;

Main.ProfileEmail = styled.span`
  font-size: 12px;
  line-height: 12px;

  color: #b2b6c3;
`;

Main.SideMenu = styled.div`
  width: 100%;
  padding: 0px 62px;

  display: flex;
  flex-direction: column;
`;

Main.Menu = styled.div`
  padding: 5px 0px;

  a {
    text-decoration: none;
  }
`;

Main.MenuText = styled.span`
  font-size: 15px;
  line-height: 15px;
  font-weight: 500;

  color: #000c3a;

  &:hover {
    color: #173fd8;
  }
`;

export { Main };
