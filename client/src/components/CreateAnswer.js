/*import { useState } from 'react';
import jwt_decode from 'jwt-decode'; */ // jwt-decode 패키지를 import
import { styled } from 'styled-components';

export default function CreateAnswer({
  answerData,
  setAnswerData,
  HandleClickPost,
}) {
  /*const [answerData, setAnswerData] = useState('');

  const HandleClickPost = () => {
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);

    const postData = {
      questionId: questionId,
      memberId: decodedToken.memberId,
      nickname: decodedToken.nickname,
      commentBody: answerData,
    };

    fetch(`http://13.124.105.17:8080/questions/${questionId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // JWT 토큰을 Authorization 헤더에 포함시킵니다.
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
    /*if (token) {
    } else {
      console.log('JWT token not available.');
    }
  };
*/
  return (
    <FuncCreateAnswer>
      <form>
        <h2>Your Answer</h2>
        <textarea
          value={answerData}
          onChange={(e) => {
            setAnswerData(e.target.value);
          }}
        ></textarea>
      </form>
      <div>
        <button onClick={HandleClickPost}>Post Your Answer</button>
      </div>
    </FuncCreateAnswer>
  );
}

const FuncCreateAnswer = styled.div`
  width: 50vw;
  float: none;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: #232629;
  font-weight: 400;
  font-size: 1.3rem;

  h2 {
    padding-left: 0;
    margin-bottom: 8px;
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
