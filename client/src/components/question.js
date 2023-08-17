// 필수 데이터 : 닉네임, 작성시간, 제목, 본문
// 선택 데이터 : 태그, 조회수
// 월에 해당하는 문자열
// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];
// // 시간을 12시간 형식으로 변환
// const perio = hours >= 12 ? 'PM' : 'AM';
// const twelveHour = hours % 12 || 12;
import React from 'react'; // eslint-disable-line no-unused-vars
import { styled } from 'styled-components';

const QuestionStyle = styled.div`
  li {
    list-style: none;
  }
`;

export default function Question({ question }) {
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
              <span className="time">{question.createdAt}</span>
            </div>
          </div>
        </div>
      </li>
    </QuestionStyle>
  );
}
