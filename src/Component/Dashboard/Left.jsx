import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Left() {
  return (
    <>
     <divside className=" hidden md:flex md:flex-col md:py-36 md:w-[23%] md:justify-start  md:p-5" id='bgnavbar'>
        
        <nav className=' '>
          <div className=' flex flex-col'>
          <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600 text-white"><i className="fa-solid fa-upload p-3 text-purple-500"></i>Upload Resume</Link>
          <Link to='/resume' className="mb-2  px-2 py-2 rounded-md bg-slate-600 text-white"><i className="fa-solid fa-file p-3 text-purple-500"></i>Ai Resume Builder</Link>
          <Link to='https://blog.abroadium.com/category/candidate-resources/' className="mb-2  px-2 py-2 rounded-md bg-slate-600 text-white"><i className="fa-solid fa-paper-plane p-3 text-purple-500"></i>Resources</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md  bg-slate-700 text-gray-400"><i className="fa-solid fa-user p-3 text-purple-500"></i>Feed</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-700 text-gray-400"><i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i>About</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-700 text-gray-400"><i className="fa-solid fa-file p-3 text-purple-500"></i>Education</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-700 text-gray-400"><i className="fa-solid fa-pen p-3 text-purple-500"></i>Projects</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600 text-white"><i className="fa-solid fa-gear p-3 text-purple-500"></i>Settings</Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600 text-white"><i className="fa-solid fa-right-to-bracket p-3 text-purple-500"></i>Log Out</Link>
          </div>
        </nav>
      </divside> 
    </>
  )
}

export default Left
