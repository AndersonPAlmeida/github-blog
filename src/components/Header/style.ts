import styled from "styled-components";
import imageLogo from "../../assets/Cover.svg";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 29vh;
  
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  background:  url(${imageLogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 

  img {
    width: 15rem;
    height: 10rem;
  }
`
