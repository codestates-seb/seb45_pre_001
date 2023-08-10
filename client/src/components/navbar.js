import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className="navbar_container">
        <div className="navbar_home">Companies</div>
        <div className="navbar_public">
          <li>
            <div className="icon_Questions"></div>
            <div>Questions</div>
          </li>
          <li>Tags</li>
          <li>Companies</li>
        </div>
        <div className="navbar_collective"></div>
        <div className="navbar_teams"></div>
      </div>
    </div>
  );
}
