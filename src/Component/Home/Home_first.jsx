import React from 'react'
import './Home.css'
import Home_Second from './Home_Second'

function Home_first() {
  return (
    <>
      <div className=' bg-gray-100'>
        <div className=' py-5 px-5 flex gap-3 md:gap-10 md:justify-evenly flex-col md:flex-row'>
            <div className='  px-3 py-3 md:w-[500px]'>
                <div className=' flex flex-col gap-4'>
                    <div className=' font-extrabold text-4xl font-sans'>Create Your Resume With Our Resume Builder</div>
                    <div className=' text-lg font-medium text-slate-700'>Build an effective 2024 resume in minutes with our free-to-use resume builder. Choose a recruiter-approved template and add prewritten skills by Certified Professional Resume Writers.</div>
                    <div className=' flex flex-wrap gap-4'>
                        <button className='  px-6 py-2 rounded-full font-bold hover:px-8 hover:shadow-2xl hover:shadow-slate-500' id='home_fourth'> Import Your Resume</button>
                        <button className=' text-white px-6 py-2 rounded-full  font-bold hover:px-8 hover:shadow-2xl hover:shadow-slate-500 ' id='home_third'> Build your Resume</button>
                    </div>
                    <div className=' flex flex-wrap'>EXCELLENT <img src='https://www.resume-now.com/sapp/themes/resumenow/img/stars-4.5.svg' className=' h-6 w-16'/> rating 9212 reviews on <img src='https://www.resume-now.com/sapp/themes/resumenow/img/trustpilot-black.png' className=' h-6 w-16'/></div>
                </div>
            </div>
            <div className='  px-6 py-3' id='bghome'>
                <img src='https://www.resume-now.com/sapp/uploads/2023/11/resume-example-senior-financial-analyst.svg' className=' h-96 w-full rounded-lg '/>
            </div>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row gap-2 md:gap-6 py-5 font-semibold items-center justify-center'>
        <div>As seen in <sup>1</sup></div>
        <img src='https://www.resume-now.com/sapp/themes/resumenow/img/exp/rs-brands-d.png' className=' h-7 md:h-10 rounded-xl'/>
      </div>

      <Home_Second/>
    </>
  )
}

export default Home_first
