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
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="logo-box">로고</div>
        <div>About</div>
        <div>Product</div>
        <div>For Teams</div>
        <form className="searchbar">
          <img src="/search-icon.png" alt="search-icon" />
          <input type="text" />
        </form>
        <div>
          <div>Log in</div>
          <div>Sign up</div>
        </div>
      </div>
    </StyledHeader>
  );
}
