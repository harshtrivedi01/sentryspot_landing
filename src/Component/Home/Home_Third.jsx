import React from 'react'
import './Home.css'

function Home_Third() {
  return (
    <>
      <div className=' flex justify-center'>
        <div className=' flex flex-col gap-5 md:w-[50%] md:flex-row border-2 text-white rounded-xl  px-5 py-9' id='home_third'>
          <div className=''>
            <img src="https://www.resume-now.com/sapp/themes/resumenow/img/exp/resume-maker-video-thumbnails.png" alt="" className=' h-[200px] w-[800px] rounded-xl' />
          </div>
          <div className=' flex flex-col gap-3  justify-center'>
            <h1 className=' font-bold text-3xl'> Ready to Create Your Resume</h1>
            <p className=' text-lg'>See how easy it is with our professional Resume Maker. Get job-specific text and choose from a wide range of designs to build a mistake-free resume that helps you land the job.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Third
