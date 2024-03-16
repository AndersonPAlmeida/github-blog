import styled from "styled-components";
import imageLogo from "../../assets/Cover.svg";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 29vh;
  position: relative;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background:  url(${imageLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`
