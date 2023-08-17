import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Question from '../components/question';
import Header from '../components/Header';
import { styled } from 'styled-components';

const QuestionPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 56px;
  padding: 24px;
  .main_container {
    width: 727px;
  }
  .main_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 12px;
  }
  .qa_btn {
    background-color: #0a95ff;
    color: white;
    border-radius: 5px;
    width: 100px;
    height: 36px;
  }
  .qa_btn:hover {
    background-color: #4477ce;
    cursor: pointer;
  }
  .main_question_filer {
    display: flex;
    justify-content: space-between;
  }
  .question_filters {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }
  .question_filters_item {
    margin: 0px 16px 1px 0px;
  }
  .select_filter_contatiner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: rgb(57, 115, 157);
    background-color: rgb(225, 236, 244);
    width: 70px;
    height: 33px;
    padding: 9.6px;
    border-radius: 6px;
  }
`;

const Button = styled.button`
  /* 글씨 크기 만큼 너비를 조절 하기위해 inline-block을 사용 */
  display: inline-block;
  width: auto;
  height: 33px;
  padding: 9.6px;
  border: solid 1px black;
  cursor: pointer;
  color: rgb(59, 64, 69);
  border: solid 1px rgb(186, 191, 196);
  /* button 중에 해당 버튼만 radius주기 */
  border-top-left-radius: ${(props) => (props.leftRadius ? '6px' : '0')};
  border-bottom-left-radius: ${(props) => (props.leftRadius ? '6px' : '0')};
  border-top-right-radius: ${(props) => (props.rightRadius ? '6px' : '0')};
  border-bottom-right-radius: ${(props) => (props.rightRadius ? '6px' : '0')};
  font-size: 12px;
  &:hover {
    background-color: rgb(227, 230, 232);
  }
`;

export default function QuestionListPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions?page=1`)
      .then((res) => res.json())
      .then((json) => {
        setQuestions(json.data);
        console.log(json);
      });
  }, []);

  return (
    <>
      <Header />
      <QuestionPage>
        <div className="main_container">
          <div className="main_header">
            <h1>All Question </h1>
            <button className="qa_btn">Ask Question</button>
          </div>
          <div className="main_question_filer">
            <div className="question_item">{questions.length} questions</div>
            <div className="question_filters">
              <div className="question_filters_item">
                {/* 버튼 클릭시 필터 기능이용해서 구현 진행 */}
                <Button className="question_filter_newest" leftRadius>
                  Newest
                </Button>
                <Button className="question_filter_active">Active</Button>
                <Button className="question_filter_bountied">Bountied</Button>
                <Button className="question_filter_unanswered">
                  Unanswerd
                </Button>
                <Button className="question_filter_more" rightRadius>
                  More
                </Button>
                {/* 버튼을 누르면 모달이 dropdown되면서 뜨게 구현 */}
              </div>
              <button className="select_filter_contatiner">
                <FontAwesomeIcon
                  icon={faArrowDownWideShort}
                  className="select_filter_icon"
                />
                <div className="select_filer_text">Filter</div>
              </button>
            </div>
          </div>
          <div className="main_questions">
            {questions.map((question, idx) => (
              <Question question={question} key={idx} />
            ))}
          </div>
        </div>
      </QuestionPage>
    </>
  );
}
