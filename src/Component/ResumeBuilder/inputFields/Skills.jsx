import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests

const Skills = ({ skills = [], handleInputChange, addSkill, deleteSkill, skillsname, skillsname2 }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch suggestions from API based on user input
  const fetchSuggestions = async (query) => {
    const token = localStorage.getItem('token');
    try {
      const requestBody = {
        Key: 'ai_keyword_request_key', 
        keyword: "Cecklist of skills in manner of content and informations ",// Replace with the actual key required by the API
        Content: query, // Use the user input as the content for the suggestion search
        // Add other required fields based on API documentation if necessary
      };

      const response = await axios.post(
        'https://api.abroadium.com/api/jobseeker/ai-skills-data',
        requestBody,
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      if (response.data.status === 'success') {
        const skillsList = response.data.data.resume_analysis.skills;
        setSuggestions(skillsList);
      } else {
        console.error('Error fetching suggestions:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Function to handle input change in search box
  const handleSearchInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Fetch suggestions when user types at least 2 characters
    if (value.length >= 2) {
      fetchSuggestions(value);
      setShowDropdown(true); // Show dropdown when suggestions are fetched
    } else {
      setSuggestions([]); // Clear suggestions if input is less than 2 characters
      setShowDropdown(false); // Hide dropdown
    }
  };

  // Function to handle selecting a suggestion
  const handleSuggestionSelect = (suggestion) => {
    // Add the selected suggestion to the skillname input field
    handleInputChange({ target: { name: 'skillname', value: suggestion } }, 0, 'skills');

    setShowDropdown(false); // Hide dropdown after selection
  };

  // Function to handle clicking the search button
  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== '') {
      fetchSuggestions(searchQuery);
      setShowDropdown(true); // Show dropdown when suggestions are fetched
    }
  };

  // Function to handle input change for skills
  const handleSkillInputChange = (e, index, field) => {
    const { name, value } = e.target;
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [name]: value };

    // Check if both skillname and skilldetails are filled
    if (name === 'skillname' && value && newSkills[index].skilldetails) {
      // Add new field logic here
      // Example: newSkills[index].newField = `${newSkills[index].skillname} - ${newSkills[index].skilldetails}`;
    }

    handleInputChange({ target: { name, value } }, index, field);
  };

  return (
    <div className="mt-10 px-10 text-xs sm:text-xs md:text-xs lg:text-xs ">
      {/* AI Assist Button */}
      <button className="font-bold text-lg flex items-center mb-4" onClick={() => setShowDropdown(!showDropdown)}>
        <h3>AI Assist</h3>
        {/* SVG Icon for dropdown indicator */}
        <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Search Input and Button */}
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
            className="w-full p-3 mb-4 mt-4 border border-black rounded-lg"
          />
          <button
            className="ml-2 bg-violet-950 text-white font-bold  px-4 py-3 rounded-lg"
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
        </div>

        {/* Suggestions as Badges */}
        {showDropdown && suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap">
            {suggestions.map((suggestion, index) => (
              <span
                key={index}
                className="bg-gray-500 text-white px-1 py-1 mr-2 mb-2 rounded-lg cursor-pointer"
                onClick={() => handleSuggestionSelect(suggestion)}
              >
                {suggestion}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Skills List */}
      {skills.map((skill, index) => (
        <div key={index} className="mt-4">
          <div className="flex gap-6">
            <div className="w-3/4">
              <label htmlFor={`skillname-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                Skill Name
              </label>
              <input
                type="text"
                id={`skillname-${index}`}
                name="skillname"
                value={skill.skillname || skillsname}
                onChange={(e) => handleSkillInputChange(e, index, 'skills')}
                placeholder="Skill Name"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>

            <div className="w-3/4">
              <label htmlFor={`skilldetails-${index}`} className="block text-sm font-medium text-gray-700 mb-2">
                Skill Details
              </label>
              <input
                type="text"
                id={`skilldetails-${index}`}
                name="skilldetails"
                value={skill.skilldetails || skillsname2}
                onChange={(e) => handleSkillInputChange(e, index, 'skills')}
                placeholder="Skill Details"
                className="w-full p-3 mb-4 border border-black rounded-lg"
              />
            </div>
          </div>

          <button type="button" onClick={() => deleteSkill(index)} className="mt-2 text-red-500">
            Delete Skill
          </button>
        </div>
      ))}

      {/* Add Skill Button */}
      <button className="font-bold text-lg flex items-center mt-4" onClick={addSkill}>
        <h3>Add Item</h3>
        <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
          <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
        </svg>
      </button>
    </div>
  );
};

export default Skills;
