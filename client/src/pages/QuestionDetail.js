import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/ViewQuestionDetail';
import { styled } from 'styled-components';
import CreateAnswer from '../components/CreateAnswer';
import ViewAnswer from '../components/ViewAnswer';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function QuestionDetail() {
  let params = useParams();

  return (
    <QuestionDetailPage>
      <Navbar />
      <QuestionDetailContainer>
        <ViewQuestionDetail questionId={params.id} />
        <ViewAnswer questionId={params.id} />
        <CreateAnswer questionId={params.id} />
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
