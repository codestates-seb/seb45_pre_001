import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ViewQuestionDetail({ questionId }) {
  //questionData 상태 만들기
  const [questionData, setQuestionData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions/${questionId}`)
      .then((response) => response.json())
      .then((json) => {
        setQuestionData(json);
      })
      .catch((error) => console.log(error));
  }, [questionId]);
  const questionTime = new Date(questionData.createdAt);
  const updateTime = '';
  return (
    <>
      <DeatailArticle>
        <div className="question-header">
          <h1>{questionData.title}</h1>
          <div className="ask-btn">
            <Link to="/questions/new-questions">Ask Question</Link>
          </div>
        </div>
        <div className="question-info">
          <div>
            <span>Asked</span>
            <time>{questionTime.toLocaleString()}</time>
          </div>
          <div>
            <span>Modified</span>
            <a href="?lastactivity">{updateTime}</a>
          </div>
          <div>
            <span>Viewed</span>
            12 times
          </div>
        </div>
        <div className="body-container">
          <div className="vote-section">
            <div className="voting-btn-box">
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <FontAwesomeIcon icon={faSortUp} className="voting-up-btn" />
              </button>
              <span className="voting-count">{count}</span>
              <button
                onClick={() => {
                  setCount(count + -1);
                }}
              >
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="voting-down-btn"
                />
              </button>
            </div>
          </div>
          <div className="content-section">
            <div className="question-content">
              <div>{questionData.questionBody}</div>
            </div>
            <div className="sub-function">
              <div className="social-btn-box">
                <div>
                  <a href="/">Share</a>
                </div>
                <div>
                  <a href="/">Follow</a>
                </div>
              </div>
              <div className="author-box">
                <div className="user-info">
                  <div className="user-action-time">
                    Asked&nbsp;
                    <span>{questionTime.toLocaleString()}</span>
                  </div>
                  <div className="user-avatar">
                    <a href="/">
                      <img src="small-logo.png" alt="" />
                    </a>
                  </div>
                  <div className="user-detail">
                    <a href="/">{questionData.nickname}</a>
                  </div>
                </div>
                <div className="etc">
                  <span>
                    <svg className="svg-icon">
                      <path
                        fill="#FFC166"
                        d="M10.7 17c-2.3 0-3.9-2.05-5.07-3.54l-.49-.6c-.67-.8-1.59-1.63-2.4-2.36A10.91 10.91 0 0 1 1.1 8.87c-.16-.28-.15-.8.18-.96.44-.23.95-.05 1.32.24l3.5 2.75c.1.08.2-.06.13-.15-.57-.8-3.42-4.77-3.71-5.15-.49-.63-.17-1.45.68-1.45.44 0 .76.28.96.51l3.6 4.42c.08.09.23 0 .17-.1L4.41 2.96c-.64-1.1 1.13-2 1.77-.9l3.8 6.13c.07.1.22.03.18-.09A153.8 153.8 0 0 0 8.1 2.54c-.31-.68-.2-1.14.36-1.42.52-.27 1.14-.07 1.47.48l3.69 8.3c.02.04.05.05.1.06a.1.1 0 0 0 .09-.07l.66-2.28c.2-.66.95-1 1.6-.81.7.18 1.09.86.89 1.5-.33 1.27-.7 2.52-1.09 3.77-.58 1.86-1.03 3.33-3.11 4.4-.7.35-1.38.53-2.05.53Z"
                      ></path>
                      <path
                        d="M14 .37a.5.5 0 0 0-.88.45l1.96 3.9a.5.5 0 0 0 .9-.45L14 .37Zm-1.17 2.17a.5.5 0 0 0-.91.42l.84 1.87a.5.5 0 1 0 .91-.41l-.84-1.88Zm-10.6 9.74a.5.5 0 0 1 .7-.02l1.7 1.6a.5.5 0 0 1-.7.72l-1.68-1.6a.5.5 0 0 1-.02-.7Zm-1.39.98a.5.5 0 1 0-.68.73l3.03 2.84a.5.5 0 0 0 .68-.73L.84 13.26Z"
                        opacity=".4"
                      ></path>
                    </svg>
                    &nbsp;New contributor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DeatailArticle>
    </>
  );
}

const DeatailArticle = styled.article`
  /* header와 겹치지 않게 position 설정*/
  position: relative;
  top: 56px;
  width: 50vw;
  margin-bottom: 56px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 13px;
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 8px;
    flex: 1 auto;
    overflow-wrap: break-word;
  }

  a {
    color: #3b4045;
  }

  .ask-btn > a {
    margin-left: 12px;
    padding: 0.8em;
    background-color: #0a95ff;
    color: white;
    display: inline-block;
    border-radius: 6px;
    text-align: center;
    position: relative;
    white-space: nowrap;
  }

  .question-info {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e3e6e8;
    white-space: nowrap;
  }

  .question-info > div {
    margin-bottom: 8px;
    margin-right: 16px;

    span {
      color: #6a737c;
      margin-right: 2px;
    }
  }

  .body-container {
    display: grid;
    grid-template-columns: max-content 1fr;
  }

  .vote-section {
    vertical-align: top;
    width: auto;
    padding-right: 16px;
    grid-column: 1;
  }

  .voting-btn-box {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    margin: -2px;
    color: #babfc4;
  }

  .voting-btn-box > button {
    margin: 2px;
    cursor: pointer;
    align-self: center;
    color: #3b4045;
    border: 1px solid #d6d9dc;
    border-radius: 50%;
    padding: 0.8em;

    .voting-up-btn {
      position: relative;
      top: 5px;
      color: #3b4045;
      vertical-align: bottom;
      overflow-clip-margin: content-box;
      width: 20px;
      height: 20px;
    }
    .voting-down-btn {
      position: relative;
      bottom: 5px;
      color: #3b4045;
      vertical-align: bottom;
      overflow-clip-margin: content-box;
      width: 20px;
      height: 20px;
    }
  }

  .voting-count {
    margin: 2px;
    color: #232629;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .content-section {
    vertical-align: top;
    padding-right: 16px;
    grid-column: 2;
    width: auto;
    min-width: 0;
  }

  .question-content {
    width: 100%;
    font-size: 16px;
    line-height: 1.5;

    ol {
      margin-left: 30px;
      margin-bottom: 1.1em;
    }
  }

  .sub-function {
    display: flex;
    justify-content: space-between;
    margin-left: 0;
    margin-top: 4px;
    margin-bottom: 4px;

    .social-btn-box {
      display: flex;
      color: #6a737c;
      padding-top: 2px;
      width: 96px;
      margin-right: 16px;

      div {
        margin: 4px;
      }

      :hover {
        color: #838c95;
      }
    }

    .author-box {
      display: flex;
      flex-direction: column;
      margin-right: 0;
      margin-left: 16px;
      margin-top: 4px;
      margin-bottom: 4px;
      width: 200px;
      text-align: left;
      vertical-align: top;
      background-color: #d8eaf7;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      .user-info {
        height: 100%;
        box-sizing: border-box;
        padding: 5px 6px 7px 7px;
        color: #6a737c;
      }
      .user-action-time {
        margin-top: 1px;
        margin-bottom: 4px;
        font-size: 12px;
      }

      .user-avatar {
        float: left;
        width: 32px;
        height: 32px;
        border-radius: 1px;
      }

      .user-avatar > a > img {
        width: 32px;
        height: 32px;
      }

      .user-detail {
        float: left;
        margin-left: 8px;
        width: calc(100% - 40px);
        line-height: 17px;
        word-wrap: break-word;

        a {
          color: #0074cc;
        }
      }
    }

    .etc {
      position: relative;
      background-color: #d0e3f1;
      color: #3b4045;
      padding: 6px 8px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      svg {
        width: 18px;
        height: 18px;
        vertical-align: bottom;
      }
    }
  }
`;
