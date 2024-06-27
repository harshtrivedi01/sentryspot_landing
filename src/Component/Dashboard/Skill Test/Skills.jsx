 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setTokenError('Please log in first.');
      setLoading(false);
      return;
    }

    axios.get('https://api.abroadium.com/api/jobseeker/user-skills', {
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setSkills(response.data.data);
        } else {
          throw new Error('API response is not an array');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the skills data!", error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 401) {
          setTokenError('Unauthorized access. Please log in again.');
        } else {
          setError(error);
        }
        setLoading(false);
      });
  }, []);

  const handleTakeTest = (skillId, skillName) => {
    navigate(`/testpaper/${skillId}/${encodeURIComponent(skillName)}`);
  };

  if (loading) {
    return <div className='py-32 font-semibold px-7'>Loading...</div>;
  }

  if (tokenError) {
    return <div>{tokenError}</div>;
  }

  if (error) {
    return <div className='py-16 px-5'>Error loading skills data. Please try again later.</div>;
  }

  return (
    <div className="py-16 bg-gray-700">
      <h1 className="text-3xl text-center md:text-5xl font-bold text-white p-3">Take Skill Assessment</h1>
      <div className="flex flex-wrap gap-7 px-5 py-5">
        {skills.map((skill, index) => (
          <div key={index} className="bg-slate-700 rounded-xl shadow-2xl border-2 border-slate-600 px-5 py-4">
            <h3 className='text-3xl text-white font-semibold py-3'>{skill.name}</h3>
            <p className='text-left text-white py-1'>Total Questions: {skill.total_question}</p>
            <p className='text-left text-white py-1'>Right Answers: {skill.right_answer}</p>
            <p className='text-left text-white py-1'>Wrong Answers: {skill.wrong_answer}</p>
            <p className='text-left text-white py-1'>Percentage: {skill.Percentage}</p>
            <div className='flex justify-center py-6'>
              <button
                onClick={() => handleTakeTest(skill.id, skill.name)}
                className="px-2 py-2 rounded-xl shadow-xl bg-gray-400 text-black font-semibold"
              >
                Take Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;


