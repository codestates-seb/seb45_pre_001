import { useState } from 'react';
import Editor5 from '../components/Editor5';
import { styled } from 'styled-components';

export default function CreateAnswer({ questionId }) {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setEditorData(data);
  };

  const handlePostClick = (memberId, nickname) => {
    // POST 요청 보내기
    const postData = {
      memberId,
      nickname,
      commentBody: editorData,
    };

    fetch(`http://13.124.105.17:8080/questions/${questionId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 토큰을 Authorization 헤더에 추가
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Post request success:', json);
      })
      .catch((error) => {
        console.error('Post request error:', error);
      });
  };

  return (
    <FuncCreateAnswer>
      <form>
        <h2>Your Answer</h2>
        <Editor5 onChange={handleEditorChange} />
      </form>
      <div>
        <button onClick={handlePostClick}>Post Your Answer</button>
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

  button {
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 0.8em;
    background-color: #0a95ff;
    color: white;
    display: inline-block;
  }
`;
