// 필수 데이터 : 닉네임, 작성시간, 제목, 본문
// 선택 데이터 : 태그, 조회수
import React from 'react'; // eslint-disable-line no-unused-vars
import { styled } from 'styled-components';

const QuestionStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-size: 13px;
  border-top: 1px solid rgb(227, 230, 232);
  .question_content_title {
    font-size: 17px;
    padding-bottom: 5px;
    color: rgb(0, 116, 204);
  }
  .question_content_body {
    padding-bottom: 8px;
  }
  .question_content_post {
    display: flex;
    justify-content: flex-end;
  }
  .question_post_user {
    margin-right: 2px;
  }
  .time {
    margin-left: 2px;
  }
  li {
    list-style: none;
  }
`;

export default function Question({ question }) {
  const questionTime = new Date(question.createdAt);
  // '월'을 설정
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // get(월,일,년,시간,분) : 원하는 값 추출
  const month = months[questionTime.getMonth()];
  const day = questionTime.getDate();
  const year = questionTime.getFullYear();
  const hours = questionTime.getHours();
  const minutes = questionTime.getMinutes();

  // 시간을 12시간 형식으로 변환
  const period = hours >= 12 ? 'PM' : 'AM';
  const twelveHour = hours % 12 || 12;
  const formattedTime = `${month} ${day}, ${year} at ${twelveHour}:${minutes} ${period}`;
  return (
    <QuestionStyle>
      <li className="qusestion_container">
        <div className="question_content">
          <h3 className="question_content_title">{question.title}</h3>
          <span className="question_content_body">{question.questionBody}</span>
          <div className="question_content_post">
            <div className="question_post_user">{question.nickname}</div>
            <div className="question_post_time">
              asked
              <span className="time">{formattedTime}</span>
            </div>
          </div>
        </div>
      </li>
    </QuestionStyle>
  );
}
