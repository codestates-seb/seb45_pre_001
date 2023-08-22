import { useEffect, useState } from 'react';
import Answer from './Answer';

export default function ViewAnswer({ questionId }) {
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions/${questionId}/comments`)
      .then((res) => res.json())
      .then((json) => {
        setAnswerList(json);
      })
      .catch((err) => console.log(err));
  }, [questionId]);

  return (
    <div>
      {/* answerList가 빈배열이면 h2를 리턴, 아니면 Answer 컴포넌트 리턴 */}
      {answerList.length === 0 ? (
        <h2 className="answer-head">
          Know someone who can answer? Share a link to this question via email,
          Twitter, or Facebook.
        </h2>
      ) : (
        <Answer answerList={answerList} />
      )}
    </div>
  );
}
