import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faStar,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_home">Home</div>
      <div className="navbar_public">
        PUBLIC
        <ul>
          <li>
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
        <FontAwesomeIcon icon={faStar} className="icon_Explore" />
        <div>Explore Explore Collectives</div>
      </div>
      <div className="navbar_teams">
        <FontAwesomeIcon icon={faBagShopping} className="icon_Creat" />
        <div>Create free Team</div>
        <div className="navbar_">Looking for your Teams?</div>
      </div>
    </div>
  );
}
