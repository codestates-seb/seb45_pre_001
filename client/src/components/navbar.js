import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faStar,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border-right: 1px solid #e3e6e8;
  width: 270px;
  margin-right: 0.5rem;
  margin-top: 20px;
  font-size: 13px;
  padding-bottom: 506px;
  padding-top: 24px;
  position: sticky;
  color: #525960;
  .navbar_public {
    margin: 0px 125px 30px 95px;
  }
  .navbar_home {
    margin: 40px 136px 30px 95px;
  }
  .navbar_collective {
    margin: 0px 0px 30px 95px;
  }
  .navbar_teams {
    margin: 0px 0px 30px 95px;
  }
  .navbar_search {
    margin: 0px 30px 30px 95px;
    padding: 4px;
    color: #4682a9;
    background-color: #cee6f3;
    border-radius: 5px;
  }
  .navbar_search:hover {
    cursor: pointer;
    color: #4a55a2;
  }
  .navbar_public_Questions {
    display: flex;
    align-items: center;
  }
  .icon_Questions {
    margin-right: 0.5rem;
  }
  .icon_Explore {
    margin-right: 0.5rem;
  }
  .icon_create {
    margin-right: 0.5rem;
  }
  .navbar_collective_category {
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .navbar_teams_category {
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .text_explore:hover {
    cursor: pointer;
    color: black;
  }
  /* 목록 태그 사의 공백주기 */
  .navbar_public_category li {
    list-style: none;
    margin-top: 30px;
  }
  .navbar_public_category li:hover {
    cursor: pointer;
    color: black;
  }
  .navbar_public_list {
    margin-left: 20px;
  }
  .text_teams:hover {
    cursor: pointer;
    color: black;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="navbar_container">
        <div className="navbar_home">Home</div>
        <div className="navbar_public">
          PUBLIC
          <ul className="navbar_public_category">
            <li className="navbar_public_Questions">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="icon_Questions"
              />
              <div>Questions</div>
            </li>
            <li className="navbar_public_list">Tags</li>
            <li className="navbar_public_list">Users</li>
            <li className="navbar_public_list">Companies</li>
          </ul>
        </div>
        <div className="navbar_collective">
          COLLECTIVES
          <div className="navbar_collective_category">
            <FontAwesomeIcon icon={faStar} className="icon_Explore" />
            <div className="text_explore"> Explore Collectives</div>
          </div>
        </div>
        <div className="navbar_teams">
          TEAMS
          <div className="navbar_teams_category">
            <FontAwesomeIcon icon={faBagShopping} className="icon_create" />
            <div className="text_teams">Create free Team</div>
          </div>
        </div>
        <div className="navbar_search">Looking for your Teams?</div>
      </div>
    </NavbarContainer>
  );
}
