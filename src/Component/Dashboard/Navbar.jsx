import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
    } finally {
      setLoading(false); // Set loading to false when the API call completes
    }
  };

  return (
    <>
      <nav className="fixed z-50 min-w-full" id='bgnavbar'>
        <div className="px-4">
          <div className="flex justify-between items-center align-middle h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="">
                <img src={logo} alt='logo' className='w-full h-14' />
              </Link>
            </div>
            <div className="flex items-center align-middle">
              <div className="hidden sm:flex">
                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-3 rounded-md text-lg font-semibold items-center"><i className="fa-solid fa-house"></i></Link>
                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-3 rounded-md text-lg font-semibold items-center">Plan - Free</Link>
                <Link to="/" className="text-gray-400 hover:text-yellow-500 px-3 py-3 rounded-md text-lg font-semibold items-center">Jobs</Link>
                
                {loading ? (
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
                    className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}

                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-3 items-center rounded-md text-lg font-semibold">Suggest</Link>

                

                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-3 items-center rounded-md text-lg font-semibold"><i className="fa-solid fa-message items-center text-purple-500"></i></Link>
                <Link to="/" target='_blank' className="text-white items-center hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-envelope p-2 items-center text-purple-500"></i>200 Coins</Link>
                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-bell text-purple-500"></i></Link>
                <Link to="/" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-user text-purple-500"></i></Link>
              </div>
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 hover:text-gray-700 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</Link>
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</Link>
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</Link>
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</Link>
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Login</Link>
                <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
