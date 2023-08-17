import { styled } from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  min-width: auto;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  background-color: white;
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

  .searchbar {
    display: flex;
    align-items: center;
    padding-left: 10px;
    flex-grow: 1;
    flex-shrink: 10000;

    div {
      display: flex;
      align-items: center;
      flex-grow: 1;
      position: relative;
      padding: 0 8px;
    }

    input {
      border: 1px solid rgba(186, 191, 196, 1);
      border-radius: 5px;
      display: block;
      width: 100%;
      cursor: unset;
      padding: 0.6em 0.7em 0.6em 32px;
      color: rgba(12, 13, 14, 1);
      font-size: 13px;

      ::placeholder {
        color: rgba(196, 191, 196, 1);
      }
    }

    img {
      width: 18px;
      height: 18px;
      color: rgba(131, 140, 149, 1);
      left: 0.7em;
      right: auto;
      position: absolute;
      pointer-events: none;
    }
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

const Styelnav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledOl = styled.ol`
  list-style: none;
  display: flex;
  gap: 4px;
  padding: 2px 0;

  .small-nav {
    display: flex;
    align-items: center;
    :hover {
      background-color: rgba(227, 230, 232, 1);
      color: rgba(35, 38, 41, 1);
      border-radius: 1000px;
    }
    a {
      color: rgba(82, 89, 96, 1);
      padding: 6px 12px;
    }
    span {
      cursor: pointer;
      color: rgba(82, 89, 96, 1);
      padding: 6px 12px;
    }
  }
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
          <li className="small-nav">
            <a href="https://stackoverflow.co/">About</a>
          </li>
          <li className="small-nav">
            <span>Product</span>
          </li>
          <li className="small-nav">
            <a href="https://stackoverflow.co/teams/">For Teams</a>
          </li>
        </StyledOl>
        <form className="searchbar">
          <div>
            <img src="/search-icon.png" alt="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </form>
        <Styelnav>
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
        </Styelnav>
      </div>
    </StyledHeader>
  );
}