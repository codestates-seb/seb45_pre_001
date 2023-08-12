import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledEditor = styled.div`
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #d5d9dc;

  .editor-container {
    padding: 24px;
    min-height: 350px;
  }

  .explanation-box {
    margin-bottom: 5px;
  }

  .next-button {
    height: 36px;
    width: 50px;
    padding: 10px;
    color: white;
    background-color: #0a95ff;
    border-radius: 5px;
    margin-top: 16px;
    cursor: ${(props) => (props.isButtonDisabled ? 'not-allowed' : 'pointer')};

    /* 비활성화된 상태일 때 배경색 변경 */
    &:disabled {
      background-color: #d5d9dc;
    }
  }

  .ck-editor__editable {
    // 568px이상 스크롤 생김
    max-height: 568px;
    min-height: 260px;
    overflow-y: auto;
  }
`;

function Editor5({ title, explanation, isButtonVisible, handleButtonClick }) {
  const [editorContent, setEditorContent] = useState(''); // 텍스트 내용을 상태로 관리

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorContent(data); // 텍스트 내용 업데이트
  };

  // 처음 글자입력시 <p> 태그까지 글자로 인식하여 8부터 시작함 때문에 length를 26으로 설정
  const isButtonDisabled = editorContent.length < 26;
  return (
    <StyledEditor isButtonDisabled={isButtonDisabled}>
      <div className="editor-container">
        <div>
          <div className="title-box">
            <div className="title">{title}</div>
            <div className="explanation-box">{explanation}</div>
          </div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data=""
          onChange={handleEditorChange} // 텍스트 변경 시 호출되는 함수
        />

        {isButtonVisible && (
          <button
            className="next-button"
            onClick={handleButtonClick}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        )}
      </div>
    </StyledEditor>
  );
}

// PropTypes 정의
Editor5.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  refProp: PropTypes.object,
  isButtonVisible: PropTypes.bool.isRequired,
  isButtonHidden: PropTypes.bool.isRequired,
};

export default Editor5;
