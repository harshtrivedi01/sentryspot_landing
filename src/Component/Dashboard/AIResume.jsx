import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function AIResume() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setLoading1(true);
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading1(false);
      }
    }
  };

  const resumeScore = async () => {
    try {
      setLoading(true); // Set loading to true when the API call starts
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const requestBody = {
        keyword: "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
        file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
      };
  
      const response = await axios.post(
        'https://api.abroadium.com/api/jobseeker/file-based-ai',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include 'Bearer ' prefix if using Bearer token
          }
        }
      );
  
      // Extract only the content_acuracy_percentage from the response
      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
      // Add user-friendly error handling or notifications here
    } finally {
      setLoading(false); // Set loading to false when the API call completes
    }
  };
  
  return (
    <>
      
     <div className='bg-gray-800 w-full px-5'>
       <div className=' mt-20'>


       <div className=' flex items-center md:gap-20'>
          <h1 className=' font-bold text-4xl py-8 text-white '>Resume Builder</h1>
          <Link to='/resumebuilder' >
        <div className=' flex justify-center mt-2'>
        <button className=' px-3 py-3 font-bold rounded-xl bg-slate-300 text-black'>Build your Resume Now</button>
        </div>
        </Link>
        </div>
        
        <table className=' border-2 border-white w-full text-white text-center text-lg '>
            <tr className=' border-2 border-white' >
            <th className=' border-2 border-white px-6'>Resume</th>
        <th className=' border-2 border-white px-6'>Score</th>
        <th className=' border-2 border-white px-6'>Matched Job</th>
        <th className=' border-2 border-white px-6'>Match</th>
        <th className=' border-2 border-white px-6'>Created</th>
        <th className=' border-2 border-white px-6'>Improve with AI</th>
        <th className=' border-2 border-white px-6'>Actions</th>
            </tr>
        
            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>

            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            <tr className=' border-2 border-white'>
            <td className=' border-2 border-white px-6'>Resume1</td>
            <td className=' border-2 border-white px-6'>{loading ? (
                  <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    {/* Render the content_acuracy_percentage */}
                    <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-white hover:text-violet-950 px-1 py-2 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>-</td>
            <td className=' border-2 border-white px-6'>18/06/2024</td>
            <td className=' border-2 border-white px-6'><div className="relative">
                  <div
                    className="text-white hover:text-yellow-500 px-2 py-2  m-2 items-center rounded-md text-lg font-bold bg-yellow-500 cursor-pointer"
                    onClick={handleClick}
                  >
                   AI
                  </div>
                  {isOpen && (
  <div className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4">
    {isLoading ? (
      <div>Please wait for while...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="py-1">
              {item.name} {/* Adjust according to your data structure */}
            </li>
          ))
        ) : (
          <div>Please wait for while.....</div>
        )}
      </ul>
    )}
  </div>
)}

                </div></td>
            <td className=' border-2 border-white px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            
        </table>
        {/* <Link to='https://ai-resume-sepia.vercel.app/' target='_blank'>
        <div className=' flex justify-center mt-2'>
        <button className=' px-3 py-3 font-bold rounded-xl bg-slate-300'>Build your Resume Now</button>
        </div>
        </Link> */}
        
        
       </div>

     </div>

    </>
  )
}

export default AIResume
