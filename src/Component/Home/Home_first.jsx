import React from 'react'
import './Home.css'
import Home_Second from './Home_Second'
import ImageSlider from './Image_slider'
import Home_Image from './Home_Image'

function Home_first() {
  return (
    <>
      <div className=' bg-gray-100'>
        <div className=' py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
            <div className='  px-3 py-3 md:w-[500px]'>
                <div className=' flex flex-col gap-4 '>
                    <div className=' font-extrabold text-5xl font-sans'>Abroadium’s AI Powered, Is Now Live</div>
                    <div className=' text-lg font-medium text-slate-700'>Resume Score, Enhanced Resume & much more. Now Apply Job with confidence with our all in one solution under one roof.</div>
                    <div className=' flex flex-wrap gap-4'>
                        <button className='  px-6 py-2 text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500' id='home_fourth'> Sign Up!-It's 100% Free!</button>
                        <button className=' text-white text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 ' id='home_third'> Build your Resume</button>
                    </div>
                    <div className=' flex flex-wrap'>EXCELLENT <img src='https://www.resume-now.com/sapp/themes/resumenow/img/stars-4.5.svg' className=' h-6 w-16'/> rating 9212 reviews on <img src='https://www.resume-now.com/sapp/themes/resumenow/img/trustpilot-black.png' className=' h-6 w-16'/></div>
                    <img src='https://www.resume-now.com/sapp/themes/resumenow/img/exp/rs-brands-d.png' className=' h-7 md:h-10 rounded-xl'/>
                </div>
            </div>
            <div className='  px-6 py-3' id='bghome'>
              <Home_Image/>
                {/* <img src='https://www.resume-now.com/sapp/uploads/2023/11/resume-example-senior-financial-analyst.svg' className=' h-96 w-full rounded-lg '/> */}
            </div>
        </div>
      </div>

      <div className=' py-8 bg-gray-100'>
        <div className=' font-bold text-4xl flex py-6 px-6  justify-center'>
        Services 
        </div>
        <div className=' flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center'>
        <div className=' flex flex-col'>
                <div>
                    <img src="https://static.jobscan.co/blog/uploads/533x340_01_new.png" alt="" className=' h-24 ' id='imageservice' />
                </div>
                <div className=' font-bold text-lg text-center py-4'>
                    ATS Checker
                </div>
            </div>
            <div className=' flex flex-col'>
                <div>
                    <img src="https://www.resumego.net/wp-content/uploads/resumechecker4.png" alt="" className=' h-24 ' id='imageservice' />
                </div>
                <div className=' font-bold text-lg text-center py-4'>ATS Score</div>
            </div>
            
            <div className=' flex flex-col'>
                <div><img src="https://www.myperfectresume.com/wp-content/uploads/2024/02/ats-resume-checker.png" alt="" className=' h-24 ' id='imageservice' /></div>
                <div className=' font-bold text-lg text-center py-4'>Resume Strength</div>
            </div>
            <div className=' flex flex-col'>
                <div><img src="https://profilesthatpop.com/wp-content/uploads/Resume-Worded-Pro-all-sections.webp" alt="" className=' h-24 ' id='imageservice'  /></div>
                <div className=' font-bold text-lg text-center py-4'>Resume Writing Service</div>
            </div>
        </div>
        
      </div>


 
 <div className='flex items-center py-6 justify-center bg-gray-100'>
 <ImageSlider/>
 </div>
     
      <Home_Second/>
    </>
  )
}

export default Home_first
