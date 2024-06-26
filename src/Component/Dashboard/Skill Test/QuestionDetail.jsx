import React from 'react';

const QuestionDetail = ({ question, onNext, onPrevious, disablePrevious, disableNext }) => {
  return (
    <div className="flex-1 py-24 bg-slate-200 px-5  ">
      <h1 className="text-2xl mb-4">{question.question}</h1>
      <ul className="mb-4">
        {question.options.map((option, index) => (
          <li key={index} className="mb-2">
            <input type="radio" id={`option-${index}`} name="option" className="mr-2" />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button
          className={`p-2 bg-blue-500 rounded-md text-white ${disablePrevious ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={onPrevious}
          disabled={disablePrevious}
        >
          Previous
        </button>
        <button
          className={`p-2 bg-blue-500 rounded-md text-white ${disableNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={onNext}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionDetail;
