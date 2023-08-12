import { styled } from 'styled-components';
import Editor5 from '../components/Editor5';
import { useState } from 'react';
import QuestionPageDropdown from '../components/QuestionPageDropdown';

const StyleAskPage = styled.div`
  background-color: #f8f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  // next 버튼
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

  // 중복체크 확인 버튼
  .review-button {
    width: 145px;
    height: 37px;
    /* padding: 10px; */
    background-color: #0a95ff;
    color: white;
    border-radius: 5px;
    cursor: ${(props) => (props.isButtonDisabled ? 'not-allowed' : 'pointer')};

    /* 비활성화된 상태일 때 배경색 변경 */
    &:disabled {
      background-color: #d5d9dc;
    }
  }
`;

function AskQuestionPage() {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checkedValue = event.target.checked;
    SetIsChecked(checkedValue); // 체크박스 상태 업데이트
  };

  const isButtonDisabled = !isChecked;

  const [checkContainerVisible, setCheckContainerVisible] = useState(false);

  const [titleButtonVisible, setTitleButtonVisible] = useState(true);
  const [editorButtonVisible, setEditorButtonVisible] = useState(false);
  const [editor2ButtonVisible, setEditor2ButtonVisible] = useState(false);

  const [tagButtonVisible, setTagButtonVisible] = useState(false);
  const [reviewButtonVisible, setReviewButtonVisible] = useState(false);

  const handleTitleButtonClick = () => {
    setTitleButtonVisible(false);
    setEditorButtonVisible(true);
  };

  const handleEditorButtonClick = () => {
    setEditorButtonVisible(false);
    setEditor2ButtonVisible(true);
  };

  const handleEditor2ButtonClick = () => {
    setEditor2ButtonVisible(false);
    setTagButtonVisible(true);
  };

  const handleTagButtonClick = () => {
    setTagButtonVisible(false);
    setReviewButtonVisible(true);
    setCheckContainerVisible(true);
  };

  const handleReviewButtonClick = () => {
    setReviewButtonVisible(false);
    setCheckContainerVisible(false);
  };

  // 드롭다운 상태를 관리하는 상태 변수
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 토글 함수
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyleAskPage isButtonDisabled={isButtonDisabled}>
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

            {titleButtonVisible && (
              <button onClick={handleTitleButtonClick} className="next-button">
                Next
              </button>
            )}
          </div>

          {/* 문제 내용 입력 부분 */}
          <Editor5
            title="What are the details of your problem?"
            explanation="Introduce the problem and expand on what you put in the title. Minimum 20 characters."
            handleButtonClick={handleEditorButtonClick}
            isButtonVisible={editorButtonVisible}
          />

          {/* 시도한 내용 입력 부분 */}
          <Editor5
            title="What did you try and what were you expecting?"
            explanation="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
            handleButtonClick={handleEditor2ButtonClick}
            isButtonVisible={editor2ButtonVisible}
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
                // ref={myElementRef}
                className="tag-input"
                type="text"
                placeholder="e.g. (c flutter django)"
              />
              {tagButtonVisible && (
                <button className="next-button" onClick={handleTagButtonClick}>
                  Next
                </button>
              )}
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
            <div>
              <QuestionPageDropdown
                isOpen={isDropdownOpen}
                onToggle={handleDropdownToggle}
              />
              {/*     */}
            </div>
            {checkContainerVisible && (
              <div className="check-container">
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
                    onClick={handleCheckboxChange}
                  ></input>

                  {/* 중복 확인 체크박스에 대한 라벨 */}
                  <label htmlFor="verify-not-duplicate">
                    I confirm that none of these posts answers my question.
                  </label>
                </div>
              </div>
            )}

            {/* 질문 검토 버튼 */}
            <div>
              {reviewButtonVisible && (
                <button
                  onClick={handleReviewButtonClick}
                  className="review-button "
                  disabled={isButtonDisabled}
                >
                  Review your question
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
      {/* footer 넣을자리 */}
    </StyleAskPage>
  );
}

export default AskQuestionPage;
