import { FaAngleLeft, FaCircleExclamation } from "react-icons/fa6";
import { Information, NotFoundContainer } from "./style";
import { NavLink } from "react-router-dom";

export function NotFound(){
  return (
    <NotFoundContainer>
      <NavLink to="/" title="Home">
        <FaAngleLeft size={14} />
        Voltar
      </NavLink>
      <Information>
        <FaCircleExclamation />
        <h1>Página não encontrada</h1>
      </Information>
    </NotFoundContainer>
  )
}