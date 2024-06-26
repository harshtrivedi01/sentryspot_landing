import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Right() {
  return (
    <>
       <div className=" hidden md:flex md:flex-col md:w-[20%]  md:px-4 md:py-36" id='bgnavbar'>
        
        <div className='  '>
          <div className=' flex flex-col'>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><a href="#feed" className="text-white">Language</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><a href="#resources" className="text-white">Profile</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><a href="#freemium" className="text-white">Who Viewed You</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><a href="#about" className="text-white">View 1</a></Link>
            <Link to='/' className="mb-2  px-2 py-2 rounded-md bg-slate-600"><a href="#education" className="text-white">View 2</a></Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Right
