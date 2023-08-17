// 필수 데이터 : 닉네임, 작성시간, 제목, 본문
// 선택 데이터 : 태그, 조회수
export default function Question({ data }) {
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

  return (
    <li className="qusestion_container">
      <div className="question_content">
        <h3 className="question_content_title">
          {data.title}
          {/* 링크 넣기 */}
        </h3>
        <span className="question_content_body">{/* 본문 */}</span>
        <div className="question_content_post">
          <div className="question_post_user">{/* 작성자 */}</div>
          <div className="question_post_time">
            asked
            <span className="time">{/* 시간 */}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
