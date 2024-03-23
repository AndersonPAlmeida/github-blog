import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Datas, Description, Name, ProfileContainer } from './style'
import perfil from '/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={perfil} />
      <Description>
        <Name>
          <span>Cameron Williamson</span>
          <a href="#">
            <span>GITHUB </span>
            <FaArrowUpRightFromSquare size={14}/>
          </a>
        </Name>
        
        <div className="bio">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </div>

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
      </Description>
    </ProfileContainer>
  )
}