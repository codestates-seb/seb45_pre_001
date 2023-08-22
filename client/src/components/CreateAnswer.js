import { useState } from 'react';
import { styled } from 'styled-components';
import jwt_decode from 'jwt-decode'; // jwt-decode 패키지를 import

export default function CreateAnswer() {
  const [answerData, setAnswerData] = useState('');

  const jwtToken = localStorage.getItem('jwtToken'); // 로그인 페이지에서 저장한 토큰 가져오기
  console.log(jwtToken);

  // 토큰 해독
  const decodedToken = jwt_decode(jwtToken);
  console.log(decodedToken);

  // memberId와 nickname 얻기
  const nickname = decodedToken.nickname;
  const memberId = decodedToken.memberId;

  const HandleClickPost = () => {
    const postData = {
      questionId: 1,
      memberId,
      nickname,
      commentId: answerData,
    };

    fetch(`http://13.124.105.17:8080/questions/1/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        withCredentials: true,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <FuncCreateAnswer>
      <div>
        <h2>Your Answer</h2>
        <textarea
          value={answerData}
          onChange={(e) => {
            setAnswerData(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={HandleClickPost}>Post Your Answer</button>
      </div>
    </FuncCreateAnswer>
  );
}

const FuncCreateAnswer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  float: none;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: #232629;
  font-weight: 400;
  font-size: 1.3rem;

  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  h2 {
    padding-left: 0;
    margin-bottom: 16px;
    margin-top: 8px;
  }


  textarea {
    width: 50vw;
    height: 30vh;
    border: 1px solid #232629;
    margin-bottom: 10px;
  }

  button {
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 0.8em;
    background-color: #0a95ff;
    color: white;
    display: inline-block;
  }
`;
