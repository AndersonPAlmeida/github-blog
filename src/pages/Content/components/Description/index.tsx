import { FaAngleLeft, FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Datas, DescriptionContainer, Header, Links } from "./style";

export function Description() {
  return (
    <DescriptionContainer>
      <Links>
        <a href="#">
          <FaAngleLeft size={14} />
          Voltar
        </a>
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