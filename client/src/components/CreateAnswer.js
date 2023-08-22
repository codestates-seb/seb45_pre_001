import { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { styled } from 'styled-components';

export default function CreateAnswer({ questionId }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = ClassicEditor.create(
        document.querySelector('#editor'),
      );
    }
  }, []);

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions/${questionId}/comments`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then();
  });

  return (
    <FuncCreateAnswer>
      <form>
        <h2>Your Answer</h2>
        <div id="editor"></div>
      </form>
      <div>
        <button>Post Your Answer</button>
      </div>
    </FuncCreateAnswer>
  );
}

const FuncCreateAnswer = styled.div`
  width: 50vw;
  float: none;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: #232629;
  font-weight: 400;
  font-size: 1.3rem;

  h2 {
    padding-left: 0;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .ck-editor__editable {
    // 260px이상 스크롤 생김
    max-height: 260px;
    min-height: 260px;
    overflow-y: auto;
    margin-bottom: 10px;
  }

  button {
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 0.8em;
    background-color: #0a95ff;
    color: white;
    display: inline-block;
  }
`;
