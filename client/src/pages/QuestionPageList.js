import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';

export default function QuestionListPage() {
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
    </div>
  );
}
