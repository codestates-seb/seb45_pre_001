import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { styled } from 'styled-components';
import PropTypes from 'prop-types'; // prop-types를 임포트해야 합니다.

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

  button {
    height: 36px;
    width: 50px;
    padding: 10px;
    color: white;
    background-color: #0a95ff;
    border-radius: 5px;
    margin-top: 16px;
  }

  .ck-editor__editable {
    // 568px이상 스크롤 생김
    max-height: 568px;
    min-height: 260px;
    overflow-y: auto;
  }

  /* .hidden {
    display: none;
  } */
`;

function Editor5({ title, explanation, handleButtonClick }) {
  return (
    <StyledEditor>
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
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        {title === 'What did you try and what were you expecting?' && (
          <button className="hidden" onClick={handleButtonClick}>
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
  handleButtonClick: PropTypes.func.isRequired, // handleButtonClick prop에 대한 정의 추가
};

export default Editor5;
