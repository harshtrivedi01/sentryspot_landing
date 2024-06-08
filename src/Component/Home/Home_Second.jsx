import React from 'react'
import Home_Third from './Home_Third'
import './Home.css'

function Home_Second() {
  return (
    <>
    
      <div className=' py-8 bg-gray-100'>
        <div className=' font-bold text-4xl flex py-6 px-6  justify-center'>
        Let Your Resume Stand Ahead Of Competition With Our Robust AI
        </div>
        <div className=' flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center'>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708034921/catalog/1530670199369076736/tl6kfj1umn0gpas9dcev.webp" alt="" className=' h-24 hover:h-28 hover:shadow-xl hover:shadow-gray-500' />
                </div>
                <div className=' font-bold text-lg text-center'>Upload Your Resume</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src="https://impactmedia.b-cdn.net/wp-content/uploads/2023/02/ai-generated-content-blog-header-image.jpg" alt="" className=' h-24 hover:h-28 hover:shadow-xl hover:shadow-gray-500'  />
                </div>
                <div className=' font-bold text-lg text-center'>
                Let Our AI Improve It
                </div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src="https://cdn.papercheck.com/wp-content/uploads/2015/08/25040925/office-2010-resume-template-step-4.png" alt="" className=' h-24 hover:h-28 hover:shadow-xl hover:shadow-gray-500'  /></div>
                <div className=' font-bold text-lg text-center'>Select A Template</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src="https://www.resume-now.com/sapp/uploads/2024/01/download-template-icon.png" alt="" className=' h-24 hover:h-28 hover:shadow-xl hover:shadow-gray-500'  /></div>
                <div className=' font-bold text-lg text-center'>Add Your Edit & Download</div>
            </div>
        </div>
        <div className=' flex justify-center'>
            <button className=' px-5 py-3 rounded-full text-lg text-white font-bold hover:px-8 hover:shadow-2xl hover:shadow-slate-500' id='home_third'>
                Create my Resume
            </button>
        </div>
      </div>

      <Home_Third/>
      
    </>
  )
}

export default Home_Second
