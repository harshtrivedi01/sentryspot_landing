import React from 'react';

const QuestionList = ({ questions, onQuestionClick }) => {
  return (
    <div className="w-1/4 p-4 border-r overflow-y-auto min-h-screen py-24 bg-gray-200">
      <ul>
        {questions.map((question, index) => (
          <li key={index} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => onQuestionClick(index)}>
            {question.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
