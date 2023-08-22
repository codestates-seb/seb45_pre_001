import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/ViewQuestionDetail';
import { styled } from 'styled-components';
import CreateAnswer from '../components/CreateAnswer';
import ViewAnswer from '../components/ViewAnswer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'; // jwt-decode 패키지를 import

export default function QuestionDetail() {
  let params = useParams();
  const [answerData, setAnswerData] = useState('');
  const [answerList, setAnswerList] = useState([]);

  const getAnswerList = () => {
    fetch(`http://13.124.105.17:8080/questions/${params.id}/comments`)
      .then((res) => res.json())
      .then((json) => {
        setAnswerList(json);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnswerList();
  }, [params.id]);

  const HandleClickPost = () => {
    const token = localStorage.getItem('jwtToken');
    const decodedToken = jwt_decode(token);

    const postData = {
      questionId: params.id,
      memberId: decodedToken.memberId,
      nickname: decodedToken.nickname,
      commentBody: answerData,
    };

    fetch(`http://13.124.105.17:8080/questions/${params.id}/comments`, {
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
        setAnswerList([...answerList, data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <QuestionDetailPage>
      <Navbar />
      <QuestionDetailContainer>
        <ViewQuestionDetail questionId={params.id} />
        <ViewAnswer answerList={answerList} />
        <CreateAnswer
          answerData={answerData}
          setAnswerData={setAnswerData}
          HandleClickPost={HandleClickPost}
        />
      </QuestionDetailContainer>
      <Sidebar />
    </QuestionDetailPage>
  );
}

const QuestionDetailPage = styled.div`
  display: flex;
  justify-content: center;
`;

const QuestionDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 20px;

  h2 {
    width: 50vw;
    float: none;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    color: #232629;
    font-weight: 400;
    padding-top: 8px;
    font-size: 1.3rem;
  }
`;
