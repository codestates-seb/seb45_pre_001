import { styled } from 'styled-components';

const DeatailArticle = styled.article`
  #content {
    display: flex;
    width: 1000px;
    height: 50%;
    border: 1px solid black;
  }
`;

export default function QuestinoDetail() {
  return (
    <DeatailArticle>
      <div id="content">
        <div>본문입니다.</div>
      </div>
    </DeatailArticle>
  );
}
