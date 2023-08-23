import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { useState } from 'react';

export default function Answer({ answerList }) {
  const initialCounts = Array(answerList.length).fill(0); //카운트 초기화
  const [counts, setCounts] = useState(initialCounts); // 초기화된 카운트를 사용

  const handleVote = (index, voteType) => {
    const updateCounts = [...counts];
    if (voteType === 'up') {
      updateCounts[index]++;
    } else if (voteType === 'down') {
      updateCounts[index]--;
    }
    setCounts(updateCounts);
  };

  return (
    <AnswerContainer>
      <h2>{answerList.length} Answer</h2>
      {answerList.map((item, index) => (
        <div key={item.commentId} className="answer-box">
          <div className="vote-section">
            <div className="voting-btn-box">
              <button
                onClick={() => {
                  handleVote(index, 'up');
                }}
              >
                <FontAwesomeIcon icon={faSortUp} className="voting-up-btn" />
              </button>
              <span className="voting-count">{counts[index]}</span>
              <button
                onClick={() => {
                  handleVote(index, 'down');
                }}
              >
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="voting-down-btn"
                />
              </button>
            </div>
          </div>
          <div className="fetch-data-container">
            <div className="answer-body">{item.commentBody}</div>
            <div className="rigth-box">
              <div className="user-info">
                <div className="user-action-time">
                  answered&nbsp;
                  <span>{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <div className="user-box">
                  <div className="user-avatar">
                    <a href="/">
                      <img src="small-logo.png" alt="" />
                    </a>
                  </div>
                  <div className="user-detail">
                    <a href="/">{item.nickname}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AnswerContainer>
  );
}

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  width: 50vw;
  border-top: 1px solid rgba(214, 217, 220, 1);

  h2 {
    margin-bottom: 16px;
  }

  .answer-box {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(214, 217, 220, 1);
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .fetch-data-container {
    width: 100%;
    margin: 10px 0;
  }

  .answer-body {
    margin-bottom: 10px;
  }

  .rigth-box {
    display: flex;
    justify-content: end;
  }

  .vote-section {
    vertical-align: top;
    width: auto;
    padding-right: 16px;
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
      width: 15px;
      height: 15px;
    }
    .voting-down-btn {
      position: relative;
      bottom: 5px;
      color: #3b4045;
      vertical-align: bottom;
      overflow-clip-margin: content-box;
      width: 15px;
      height: 15px;
    }
  }

  .voting-count {
    margin: 2px;
    color: #232629;
    text-align: center;
    font-weight: 500;
    font-size: 1.3rem;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    width: 230px;
    text-align: left;
    background-color: #d8eaf7;
    border-radius: 4px;
    padding: 5px 6px 7px 7px;
    color: #6a737c;

    .user-action-time {
      margin-top: 1px;
      margin-bottom: 4px;
      font-size: 12px;
    }

    .user-box {
      display: flex;
      align-items: center;
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
`;
