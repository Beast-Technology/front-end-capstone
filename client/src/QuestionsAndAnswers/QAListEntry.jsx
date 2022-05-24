import React from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from './Helpful.jsx';

export default function QAListEntry({q}) {
  return (
    <li>
      <div className="question">
        <p>Q:</p>

        <div className="question-container">
          <p className="question-title">{q.question_body}</p>

          <div className="question-actions">
            <Helpful count={q.question_helpfulness} />
            |
            <span className="underline">Add Answers</span>
          </div>
        </div>
      </div>

      <AnswerList answers={q.answers} />
    </li>
  )
}