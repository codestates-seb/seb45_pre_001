import { useEffect, useState } from 'react';

export default function ViewAnswer({ questionId }) {
  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    fetch(`http://13.124.105.17:8080/questions/${questionId}/comments`)
      .then((res) => res.json())
      .then((json) => {
        if (json.length !== 0) {
          setAnswerList(json);
        }
      })
      .catch((err) => console.log(err));
  }, [questionId]);

  return (
    <>
      {answerList.map((answer, commentId) => {
        <div key={commentId}>{answer.commentBody}</div>;
      })}
    </>
  );
}
