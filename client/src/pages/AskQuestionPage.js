import { styled } from 'styled-components';
import Editor5 from '../components/Editor5';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionPageDropdown from '../components/QuestionPageDropdown';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // jwt-decode 패키지를 import
import { useNavigate } from 'react-router-dom';

const StyleAskPage = styled.div`
  background-color: #f8f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;

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
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옴

  const editorRef = useRef(null);
  const editor2Ref = useRef(null);
  const TagRef = useRef(null);
  // 리덕스 스토어에 액션을 디스패치하여 상태를 업데이트 하는 dispatch함수
  const dispatch = useDispatch();

  const {
    checkContainerVisible,
    isChecked,
    titleButtonVisible,
    editorButtonVisible,
    editor2ButtonVisible,
    tagButtonVisible,
    reviewButtonVisible,
    isDropdownOpen,
  } = useSelector((state) => ({
    // 리덕스 스토어에서 상태값을 가져옴
    checkContainerVisible: state.checkContainerVisible,
    isChecked: state.isChecked,
    titleButtonVisible: state.titleButtonVisible,
    tagButtonVisible: state.tagButtonVisible,
    reviewButtonVisible: state.reviewButtonVisible,
    editorButtonVisible: state.editorButtonVisible,
    editor2ButtonVisible: state.editor2ButtonVisible,
    isDropdownOpen: state.isDropdownOpen,
  }));

  // isChecked 상태의 반전 값을 가짐
  const isButtonDisabled = !isChecked;

  // ========== 핸들러 함수내 액션을 디스패치하여 Redux 상태를 업데이트하는 부분입니다. ==========

  // 제목 버튼 클릭 핸들러
  const handleTitleButtonClick = () => {
    // titleButtonVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_TITLE_BUTTON_VISIBLE', payload: false });
    // editorButtonVisible 상태를 표시(true)로 변경
    dispatch({ type: 'SET_EDITOR_BUTTON_VISIBLE', payload: true });
    // 만약 editorRef가 현재 존재하고 에디터 인스턴스가 있는 경우,
    // 첫 번째 에디터의 인스턴스에 포커스를 설정
    if (editorRef.current && editorRef.current.editor) {
      const editorInstance = editorRef.current.editor;
      editorInstance.focus();
    }
  };

  // 첫 번째 에디터 버튼 클릭 핸들러
  const handleEditorButtonClick = () => {
    // editorButtonVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_EDITOR_BUTTON_VISIBLE', payload: false });
    // editor2ButtonVisible 상태를 표시(true)로 변경
    dispatch({ type: 'SET_EDITOR2_BUTTON_VISIBLE', payload: true });
    // 만약 editor2Ref가 현재 존재하고 에디터 인스턴스가 있는 경우,
    // 두 번째 에디터의 인스턴스에 포커스를 설정
    if (editor2Ref.current && editor2Ref.current.editor) {
      const editorInstance = editor2Ref.current.editor;
      editorInstance.focus();
    }
  };

  // 두 번째 에디터 버튼 클릭 핸들러
  const handleEditor2ButtonClick = () => {
    // editor2ButtonVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_EDITOR2_BUTTON_VISIBLE', payload: false });
    // tagButtonVisible 상태를 표시(true)로 변경
    dispatch({ type: 'SET_TAG_BUTTON_VISIBLE', payload: true });
    // 만약 TagRef가 현재 존재하면 (태그 입력란이 마운트되어 있으면),해당 태그 인풋에 포커스를 설정
    if (TagRef.current) {
      TagRef.current.focus();
    }
  };

  // 태그 버튼 클릭 핸들러
  const handleTagButtonClick = () => {
    // tagButtonVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_TAG_BUTTON_VISIBLE', payload: false });
    // checkContainerVisible 상태를 표시(true)로 변경
    dispatch({ type: 'SET_CHECK_CONTAINER_VISIBLE', payload: true });
    // reviewButtonVisible 상태를 표시(true)로 변경
    dispatch({ type: 'SET_REVIEW_BUTTON_VISIBLE', payload: true });
  };

  // 질문 검토 버튼 클릭 핸들러
  const handleReviewButtonClick = async () => {
    // reviewButtonVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_REVIEW_BUTTON_VISIBLE', payload: false });
    //checkContainerVisible 상태를 숨김(false)으로 변경
    dispatch({ type: 'SET_CHECK_CONTAINER_VISIBLE', payload: false });

    const titleInput = document.querySelector('.title-input');
    const contentInput = editorRef.current.editor.getData();

    const title = titleInput.value; // 유저가 입력한 제목
    const questionBody = contentInput; // 유저가 입력한 내용
    const jwtToken = localStorage.getItem('jwtToken'); // 로그인 페이지에서 저장한 토큰 가져오기
    console.log(jwtToken);

    // 토큰 해독
    const decodedToken = jwt_decode(jwtToken);
    console.log(decodedToken);

    // memberId와 nickname 얻기
    const nickname = decodedToken.nickname;
    const memberId = decodedToken.memberId;

    // 요청 할 데이터값 정의
    const requestData = {
      memberId: memberId, // memberId 사용
      nickname: nickname, // nickname 사용
      title,
      questionBody,
    };
    console.log(requestData);

    // 주소값 정의
    const ipv4 = 'http://13.124.105.17:8080';

    try {
      const response = await axios.post(
        `${ipv4}/questions/new-questions`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`, // 토큰을 Authorization 헤더에 추가
          },
        },
      );

      // 응답 처리 (예: 성공 메시지 표시)
      const questionid = response.data.questionId;
      navigate(`/questions/${questionid}`);

      console.log(questionid);
      console.log('질문이 성공적으로 제출되었습니다:', response);
    } catch (error) {
      // 오류 처리 (예: 오류 메시지 표시)
      console.error('질문 제출 오류:', error);
    }
  };

  // 체크박스 변경 핸들러 함수
  const handleCheckboxChange = (event) => {
    // 체크박스의 선택 여부를 가져옴
    const checkedValue = event.target.checked;
    // 리덕스 스토어에 액션을 디스패치하여 isChecked 상태를 업데이트함
    dispatch({ type: 'SET_IS_CHECKED', payload: checkedValue });
  };

  // 드롭다운 토글 함수
  const handleDropdownToggle = () => {
    // isDropdownOpen 상태를 토글함
    dispatch({ type: 'SET_IS_DROPDOWN_OPEN' });
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
            editorRef={editorRef} // 첫 번째 에디터의 ref 전달
          />

          {/* 시도한 내용 입력 부분 */}
          <Editor5
            title="What did you try and what were you expecting?"
            explanation="Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters."
            handleButtonClick={handleEditor2ButtonClick}
            isButtonVisible={editor2ButtonVisible}
            editorRef={editor2Ref}
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
                ref={TagRef}
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
