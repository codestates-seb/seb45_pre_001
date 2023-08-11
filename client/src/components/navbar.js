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
  height: 400px;
  border: 1px solid black;
  width: 164px;
  margin-right: 0.5rem;
  font-size: 13px;
  .navbar_container {
    padding-right: 0.5rem;
  }
  .navbar_public {
    margin-left: 0.2rem;
  }
  .navbar_home {
    margin-left: 0.2rem;
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
  .icon_Create {
    margin-right: 0.5rem;
  }
  .navbar_collective_category {
    display: flex;
    align-items: center;
  }
  .navbar_teams_category {
    display: flex;
    align-items: center;
  }
  .li {
    margin-left: 2rem;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <div className="navbar_container">
        <div className="navbar_home">Home</div>
        <div className="navbar_public">
          PUBLIC
          <ul className="navbar_publi_category">
            <li className="navbar_public_Questions">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="icon_Questions"
              />
              <div>Questions</div>
            </li>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </ul>
        </div>
        <div className="navbar_collective">
          COLLECTIVES
          <div className="navbar_collective_category">
            <FontAwesomeIcon icon={faStar} className="icon_Explore" />
            <div> Explore Collectives</div>
          </div>
        </div>
        <div className="navbar_teams">
          TEAMS
          <div className="navbar_teams_category">
            <FontAwesomeIcon icon={faBagShopping} className="icon_Create" />
            <div>Create free Team</div>
          </div>
        </div>
        <div className="navbar_">Looking for your Teams?</div>
      </div>
    </NavbarContainer>
  );
}
