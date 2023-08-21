import { useEffect, useRef } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { styled } from 'styled-components';

export default function CreateAnswer() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = ClassicEditor.create(
        document.querySelector('#editor'),
      );
    }
  }, []);

  return (
    <FuncCreateAnswer>
      <form>
        <h2>Your Answer</h2>
        <div id="editor"></div>
      </form>
    </FuncCreateAnswer>
  );
}

const FuncCreateAnswer = styled.div`
  width: 75vw;
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
    margin-bottom: 20px;
  }
`;
