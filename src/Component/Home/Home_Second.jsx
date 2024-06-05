import React from 'react'
import Home_Third from './Home_Third'

function Home_Second() {
  return (
    <>
      <div className=' py-5'>
        <div className=' font-bold text-4xl flex py-6  justify-center'>
        Make a resume in 4 simple steps
        </div>
        <div className=' flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center'>
            <div className=' flex flex-col'>
                <div>
                    <img src="https://www.resume-now.com/sapp/uploads/2024/01/choose-template-icon.png" alt="" className=' h-24' />
                </div>
                <div className=' font-bold'>Pick your first Template</div>
            </div>
            <div className=' flex flex-col'>
                <div>
                    <img src="https://www.resume-now.com/sapp/uploads/2024/01/design-formatting-icon.png" alt="" className=' h-24'  />
                </div>
                <div className=' font-bold'>
                    Choose text to tell your story
                </div>
            </div>
            <div className=' flex flex-col'>
                <div><img src="https://www.resume-now.com/sapp/uploads/2024/01/customize-icon.png" alt="" className=' h-24'  /></div>
                <div className=' font-bold'>Customize the design and formatting</div>
            </div>
            <div className=' flex flex-col'>
                <div><img src="https://www.resume-now.com/sapp/uploads/2024/01/download-template-icon.png" alt="" className=' h-24'  /></div>
                <div className=' font-bold'>Download any file format you need</div>
            </div>
        </div>
        <div className=' flex justify-center'>
            <button className=' px-5 py-3 rounded-full bg-blue-700 text-white font-bold'>
                Create my Resume
            </button>
        </div>
      </div>

      <Home_Third/>
    </>
  )
}

export default Home_Second
