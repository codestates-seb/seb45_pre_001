import { styled } from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  padding: 0;
  position: fixed;
  box-sizing: border-box;
  min-width: auto;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  border-top: 3px solid rgba(255, 153, 0, 1);
  border-bottom: 1px solid rgba(214, 217, 220, 1);

  .header-container {
    width: 97.2307692rem;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .logo-box {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;

    span {
      color: black;
    }

    b {
      color: black;
    }
  }

  .logo-box img {
    height: 30px;
    margin: 0 3px;
  }

  .header-container nav {
    display: flex;

    a {
      color: black;
    }
  }

  .searchbar {
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid rgba(186, 191, 196, 1);
    border-radius: 10px;
    flex-grow: 1;
    flex-shrink: 10000;
  }

  .membership-button-box {
    display: flex;
    align-items: center;
    padding-right: 12px;
    height: 100%;
  }

  .membership-button-box a {
    font-size: 13px;
    text-align: center;
    position: relative;
    padding: 8px 0.8em;
    margin-left: auto;
    cursor: pointer;
  }

  .login-button {
    background-color: rgba(225, 236, 244, 1);
    border-radius: 5px;
    color: rgba(57, 115, 157, 1);
  }

  .signup-button {
    background-color: rgba(10, 149, 255, 1);
    border-radius: 5px;
    color: white;
  }
`;

const StyledOl = styled.ol`
  list-style: none;
  display: flex;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <a href="/" className="logo-box">
          <img src="/small-logo.png" alt="logo-img" />
          <span>Stack</span>
          <b>overflow</b>
        </a>
        <StyledOl>
          <nav className="small-nav">
            <a href="https://stackoverflow.co/">
              <div>About</div>
            </a>
            <div>Product</div>
            <a href="https://stackoverflow.co/teams/">
              <div>For Teams</div>
            </a>
          </nav>
        </StyledOl>
        <form className="searchbar">
          <img src="/search-icon.png" alt="search-icon" />
          <input type="text" />
        </form>
        <StyledOl className="membership-button-box">
          <li>
            <a href="/login" className="login-button">
              Log in
            </a>
          </li>
          <li>
            <a href="/signup" className="signup-button">
              Sign up
            </a>
          </li>
        </StyledOl>
      </div>
    </StyledHeader>
  );
}
