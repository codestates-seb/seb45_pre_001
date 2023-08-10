import { styled } from 'styled-components';
import Editor5 from '../components/Editor5';

const StyleAskPage = styled.div`
  background-color: #f8f9f9;
  height: 1124px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inner {
    width: 1216px;
    height: 1200px;
    padding: 0 24px 24px 24px;
  }

  .question-header {
    display: flex;
    align-items: center;
    height: 130px;
    position: relative;
    background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
    background-repeat: no-repeat;
    background-position: right bottom;
  }
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

  main {
    height: 1233px;
    margin-bottom: 48px;
  }

  .title-container,
  .tag-container {
    max-width: 800px;
    height: 124px;
    padding: 24px;
    border: 1px solid #d5d9dc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    background-color: #ffffff;
  }

  .explanation-box {
    font-size: 13px;
  }

  .title-input,
  .tag-input {
    height: 33px;
    width: 100%;
    padding: 8px;
    border: 1px solid #d5d9dc;
    margin-top: 5px;
    border-radius: 7px;
  }
`;

function AskQuestionPage() {
  return (
    <StyleAskPage>
      <div className="inner">
        <div className="question-header">
          <h1>Ask a public question</h1>
        </div>
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
        <main>
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
            </div>
          </div>
        </main>
        <Editor5 />
      </div>
    </StyleAskPage>
  );
}

export default AskQuestionPage;
