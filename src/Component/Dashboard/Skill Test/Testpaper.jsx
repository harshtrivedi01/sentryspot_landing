import React, { useState } from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';

const questions = [
    {
        question:"Question1",
        options:["option1","option2","option3"]
    },
    {
        question:"Question2",
        options:["option1","option2","option3"]
    },
    {
        question:"Question3",
        options:["option1","option2","option3"]
    },
    {
        question:"Question4",
        options:["option1","option2","option3"]
    },
    {
        question:"Question5",
        options:["option1","option2","option3"]
    }
  
];

function Testpaper() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="flex h-screen w-full ">
      <QuestionList questions={questions} onQuestionClick={handleQuestionClick} />
      <QuestionDetail
        question={questions[currentQuestionIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        disablePrevious={currentQuestionIndex === 0}
        disableNext={currentQuestionIndex === questions.length - 1}
      />
    </div>
  );
}

export default Testpaper;
