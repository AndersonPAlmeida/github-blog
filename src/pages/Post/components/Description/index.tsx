import { FaAngleLeft, FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Datas, DescriptionContainer, Header, Links } from "./style";
import { NavLink } from 'react-router-dom';

export function Description() {
  return (
    <DescriptionContainer>
      <Links>
        <NavLink to="/" title="Home">
          <FaAngleLeft size={14} />
          Voltar
        </NavLink>
        <a href="#">
          Ver no github 
          <FaArrowUpRightFromSquare size={14}/>
        </a>
      </Links>

      <Header>
        <h2>JavaScript data types and data structures</h2>

        <Datas>
          <div>
            <FaGithub size={18}/>
            <span>cameronwll</span>
          </div>
          <div>
            <FaBuilding size={18}/>
            <span>Rocketseat</span>
          </div>
          <div>
            <FaUserGroup size={18}/>
            <span>32 seguidores</span>
          </div>
        </Datas>
      </Header>
    </DescriptionContainer>
  )
}