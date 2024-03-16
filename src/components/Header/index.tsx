import { Background, HeaderContainer } from "./style";
import logo from "/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <Background>
        <img src={logo} alt="Logo da página"/>
      </Background>
    </HeaderContainer>
  );
}