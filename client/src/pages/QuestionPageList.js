import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Question from '../components/question';
import Header from '../components/Header';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
    cursor: pointer;
  }
  &.pagination_btn {
    margin-right: 7px;
    border-radius: 4px;
    border: solid 1px rgb(227, 230, 232);
  }
  &.active {
    background-color: rgb(244, 130, 37);
    border: none;
    color: white;
  }
`;

export default function QuestionListPage() {
  // 질문 목록 저장
  const [questions, setQuestions] = useState([]);
  // 현재 페이지와 페이지당 아이템 수를 나타내는 상태 설정
  const [currentPage, setCurrentPage] = useState(1);
  // 각 페이지에 표시될 아이템의 수
  const itemsPerPage = 15;

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions`)
      .then((res) => res.json())
      .then((json) => {
        const sortedQuestions = json.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        setQuestions(sortedQuestions);

        setCurrentPage(1);
      });
  }, []); // 첫렌더링시에만 api호출이 되게 빈 배열을 넣어줌

  // 페이지 번호를 변경할 때마다 호툴되는 핸들러 함수
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleQuestions = questions.slice(startIndex, endIndex);

  const totalPages = Math.ceil(questions.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const renderPageNumbers = pageNumbers.map((number) => (
    <Button
      className={`pagination_btn ${currentPage === number ? 'active' : ''}`}
      key={number}
      onClick={() => handlePageChange(number)}
    >
      {number}
    </Button>
  ));

  return (
    <>
      <Header />
      <ContentContainer>
        <Navbar />
        <QuestionPage>
          <div className="main_container">
            <div className="main_header">
              <h1>All Question </h1>
              {/* 질문 페이지로 넘어가기 위한 Link 추가 */}
              <Link to="/questions/new-questions">
                <button className="qa_btn">Ask Question</button>
              </Link>
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
              {visibleQuestions.map((question, idx) => (
                <Question question={question} key={idx} />
              ))}
            </div>
            <div className="pagination">{renderPageNumbers}</div>
          </div>
        </QuestionPage>
        <Sidebar />
      </ContentContainer>
    </>
  );
}
