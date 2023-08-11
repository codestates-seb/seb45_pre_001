import { styled } from 'styled-components';
import Editor5 from '../components/Editor5';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import QuestionPageDropdown from '../components/QuestionPageDropdown';

const StyleAskPage = styled.div`
  background-color: #f8f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative;
  top: 56px; */

  // 사이드 여백 조정
  .inner {
    width: 1216px;
    padding: 0 24px 24px 24px;
    margin-bottom: 165px;
  }

  // Ask a public question 부분
  .question-header {
    display: flex;
    align-items: center;
    height: 130px;
    position: relative;
    background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  // Writing a good question 공지 부분
  .notice-container {
    max-width: 800px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    margin: 16px 0 16px 0;
    background-color: #ebf4fb;
    border-radius: 7px;
    border: 1px solid #a6ceed;
    ul {
      margin-left: 30px;
    }
    h2 {
      margin-bottom: 8px;
    }
    h5 {
      margin: 15px 0 8px 0;
    }
  }

  // title ~ duplicate 박스들 감싸고 있는 부모 ( 메인 컨텐츠 )
  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  // 각 박스들 부모
  .title-container,
  .tag-container,
  .duplicate-check-container {
    max-width: 800px;
    padding: 24px;
    border: 1px solid #d5d9dc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    background-color: #ffffff;
  }

  // 설명 박스
  .explanation-box {
    font-size: 13px;
  }

  // input창
  .title-input,
  .tag-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #d5d9dc;
    margin-top: 5px;
    border-radius: 7px;
  }
  // next 버튼 hidden클래스와 같이 쓰임
  .next-button {
    height: 36px;
    width: 50px;
    padding: 10px;
    color: white;
    background-color: #0a95ff;
    border-radius: 5px;
    margin-top: 16px;
  }

  // 중복체크 박스
  .duplicate-check-container {
    gap: 16px;
  }

  // 드롭다운 부모
  .dropdown-container {
    background-color: #f4f6f6;
    border: 1px solid #d5d9dc;
    position: relative;
  }

  // 드롭다운
  .dropdown-button {
    padding: 12px 16px;
    display: flex;
    width: 100%;
  }

  // 드롭다운 내부 텍스터 내용박스
  .dropdown-box {
    color: #6a737c;
    font-size: 16px;
    width: 100%;
    display: flex;
  }
  // 드롭다운 내용 컨테이너
  .dropdown-content {
    position: absolute;
    height: 210px;
    top: 100%; /* 드롭다운 버튼 아래에 배치 */
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #d5d9dc;
    z-index: 1;
  }

  .dropdown-text-container {
    height: 100vh;
  }
  .dropdown-text {
    height: 102px;
    border-bottom: 1px solid #efeff2;
    padding: 12px 16px;
  }

  .icon-button {
    margin-left: auto;
  }

  // 체크 박스 부모
  .check-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  // 체크 박스
  .check-box {
    background-color: #f2f2f3;
    padding: 8px;
  }

  // 체크표시
  .checkbox {
    margin-right: 5px;
  }

  // 버튼요소,check-container에 사용
  /* .hidden {
    display: none;
  } */

  // 중복체크 확인 버튼
  .review-button {
    width: 145px;
    height: 37px;
    /* padding: 10px; */
    background-color: #0a95ff;
    color: white;
    border-radius: 5px;
  }
`;

function AskQuestionPage() {
  const handleButtonClick = () => {
    // 버튼이 클릭되었을 때 실행할 작업을 여기에 작성필요
    console.log('Button clicked!');
  };

  // 드롭다운 상태를 관리하는 상태 변수
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 토글 함수
  const handleDropdownToggle = () => {
    console.log('dkdkdk');
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyleAskPage>
      {/* header 넣을자리 */}
      <div className="inner">
        {/* 질문 헤더 부분 */}
        <div className="question-header">
          <h1>Ask a public question</h1>
        </div>

        {/* 안내 메시지 부분 */}
        <div className="notice-container">
          <h2>Writing a good question</h2>
          <p>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process.
          </p>
          <p>
            Looking to ask a non-programming question? See the topics here to
            find a relevant site.
          </p>
          <h5>step</h5>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>

        {/* 메인 컨텐츠 */}
        <main>
          {/* 제목 입력 부분 */}
          <div className="title-container">
            <div className="title-box">
              <div className="title">Title</div>
              <div className="explanation-box">
                Be specific and imagine you’re asking a question to another
                person.
              </div>
            </div>
            <div>
              <input
                className="title-input"
                type="text"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              ></input>
            </div>
          </div>

          {/* 문제 내용 입력 부분 */}
          <Editor5
            title="What are the details of your problem?"
            explanation="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
          />

          {/* 시도한 내용 입력 부분 */}
          <Editor5
            title="What did you try and what were you expecting?"
            explanation="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
            handleButtonClick={handleButtonClick}
          />

          {/* 태그 입력 부분 */}
          <div className="tag-container">
            <div className="tag-box">
              <div className="tag">Tags</div>
              <div className="explanation-box">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </div>
            </div>
            <div>
              <input
                className="tag-input"
                type="text"
                placeholder="e.g. (c flutter django)"
              ></input>
              <button
                className="hidden next-button"
                onClick={handleButtonClick}
              >
                Next
              </button>
            </div>
          </div>

          {/* 중복 확인 부분 */}
          <div className="duplicate-check-container">
            <div className="duplicate-box">
              <div className="title">
                Review questions already on Stack Overflow to see if your
                question is a duplicate.
              </div>
              <div className="explanation-box">
                Clicking on these questions will open them in a new tab for you
                to review. Your progress here will be saved so you can come back
                and continue.
              </div>
            </div>
            {/* 추가부분!!!! */}
            <div>
              <QuestionPageDropdown
                isOpen={isDropdownOpen}
                onToggle={handleDropdownToggle}
              />

              {/* <div className="dropdown-container ">
              <button
                className="
                dropdown-button"
                onClick={handleDropdownToggle}
              >
                <div className="dropdown-box">
                  Do any of these posts answer your question? */}
              {/* 드롭다운 버튼 */}
              {/* <button className="icon-button">
                    <FontAwesomeIcon
                      className="faChevronIcon"
                      icon={isDropdownOpen ? faChevronUp : faChevronDown}
                    />
                  </button>
                </div>
              </button> */}
              {/* {isDropdownOpen && (
                <div className="dropdown-content"> */}
              {/* 드롭다운 컨텐츠 내용 */}
              {/* <div className="dropdown-text-container">
                    <div className="dropdown-text">
                      질문 관련 상세 페이지 이동
                    </div>
                    <div className="dropdown-text">
                      질문 관련 상세 페이지 이동
                    </div>
                  </div>
                </div>
              )} */}
            </div>
            <div className="check-container hidden">
              {/* 중복 질문 확인 부분 */}
              <div className="title">
                Confirm that none of these existing posts on Stack Overflow
                answers your question.
              </div>

              {/* 중복 확인 체크박스 */}
              <div className="check-box">
                <input
                  className="checkbox"
                  id="verify-not-duplicate"
                  type="checkbox"
                ></input>

                {/* 중복 확인 체크박스에 대한 라벨 */}
                <label htmlFor="verify-not-duplicate">
                  I confirm that none of these posts answers my question.
                </label>
              </div>
            </div>

            {/* 질문 검토 버튼 */}
            <div>
              <button
                onClick={handleButtonClick}
                className="review-button hidden"
              >
                Review your question
              </button>
            </div>
          </div>
        </main>
      </div>
      {/* footer 넣을자리 */}
    </StyleAskPage>
  );
}

export default AskQuestionPage;
