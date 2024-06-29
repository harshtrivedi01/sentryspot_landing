import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import { useParams } from 'react-router-dom';

function Testpaper() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { skillId, skillName } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError(new Error('User not found'));
      setLoading(false);
      return;
    }

    fetch(`https://api.abroadium.com/api/jobseeker/skill-assessment?skill_id=${skillId}&skill_name=${encodeURIComponent(skillName)}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ` ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        if (data && data.data && data.data.questions) {
          setQuestions(data.data.questions); 
        } else {
          throw new Error('Questions not found in data');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        setError(error);
        setLoading(false);
      });
  }, [skillId, skillName]);

  useEffect(() => {
    console.log('Current question index:', currentQuestionIndex);
    console.log('Questions:', questions);
  }, [currentQuestionIndex, questions]);

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

  if (loading) {
    return <div className=' font-bold mx-auto py-60 text-xl'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex h-screen w-full">
      <QuestionList questions={questions} onQuestionClick={handleQuestionClick} />
      {/* <QuestionDetail
        question={questions[currentQuestionIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        disablePrevious={currentQuestionIndex === 0}
        disableNext={currentQuestionIndex === questions.length - 1}
      /> */}
       <QuestionDetail
      question={questions[currentQuestionIndex]}
      onNext={handleNext}
      onPrevious={handlePrevious}
      disablePrevious={currentQuestionIndex === 0}
      disableNext={currentQuestionIndex === questions.length - 1}
      currentQuestionIndex={currentQuestionIndex}
      totalQuestions={questions.length}
    />
    </div>
  );
}

export default Testpaper;

