import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Question from '../components/question';

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
    <div className="main_container">
      <div className="main_header">
        <h1>All Question </h1>
        <button className="qa_btn">Ask Question</button>
      </div>
      <div className="main_question_filer">
        <div className="question_item">questions</div>
        <div className="question_filters">
          <div className="question_filters_item">
            {/* 버튼 클릭시 필터 기능이용해서 구현 진행 */}
            <button className="question_filter_newest">Newest</button>
            <button className="question_filter_active">Active</button>
            <button className="question_filter_bountied">Bountied</button>
            <button className="question_filter_unanswered">Unanswerd</button>
            <button className="question_filter_more">More</button>
          </div>
          {/* 버튼을 누르면 모달이 dropdown되면서 뜨게 구현 */}
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
        {questions.map((data, questionId) => {
          <Question data={data} key={questionId} />;
        })}
      </div>
    </div>
  );
}
