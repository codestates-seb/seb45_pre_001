import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/ViewQuestionDetail';
import { styled } from 'styled-components';
import CreateAnswer from '../components/CreateAnswer';
import ViewAnswer from '../components/ViewAnswer';

export default function QuestionDetail() {
  let params = useParams();

  return (
    <QuestionDetailPage>
      <ViewQuestionDetail questionId={params.id} />
      <ViewAnswer questionId={params.id} />
      <h2 className="answer-head">
        Know someone who can answer? Share a link to this question via email,
        Twitter, or Facebook.
      </h2>
      <CreateAnswer />
    </QuestionDetailPage>
  );
}

const QuestionDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    width: 75vw;
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
