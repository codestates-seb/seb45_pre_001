import { styled } from 'styled-components';

const StyledHeader = styled.header`
  margin: 0;
  padding: 0;
  position: fixed;
  box-sizing: border-box;
  display: flex;
  border-top: 5px solid;
`;

export default function Header() {
  return (
    <StyledHeader>
      <div>로고</div>
      <div>About</div>
      <div>Product</div>
      <div>For Teams</div>
      <div>
        <input type="text" />
      </div>
      <div>
        <div>Log in</div>
        <div>Sign up</div>
      </div>
    </StyledHeader>
  );
}
