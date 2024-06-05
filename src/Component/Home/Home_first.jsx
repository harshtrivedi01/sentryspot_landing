import React from 'react'

function Home_first() {
  return (
    <>
      <div>
        <div className=' py-5 px-5 flex gap-3 md:gap-10 justify-evenly flex-col md:flex-row'>
            <div className='  px-3 py-3 md:w-[500px]'>
                <div className=' flex flex-col gap-4'>
                    <div className=' font-extrabold text-4xl'>Create Your Resume With Our Resume Builder</div>
                    <div className=' text-lg font-medium text-slate-700'>Build an effective 2024 resume in minutes with our free-to-use resume builder. Choose a recruiter-approved template and add prewritten skills by Certified Professional Resume Writers.</div>
                    <div className=' flex flex-wrap gap-4'>
                        <button className=' border-2 px-3 py-2 rounded-lg'> Import Your Resume</button>
                        <button className=' border-2 px-3 py-2 rounded-lg'> Build your Resume</button>
                    </div>
                    <div>EXCELLENT trustpilot star rating 9212 reviews ontrustpilot logo</div>
                </div>
            </div>
            <div className='  px-6 py-3'>
                <img src='https://www.resume-now.com/sapp/uploads/2023/11/resume-example-senior-financial-analyst.svg' className=' h-96 w-full'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home_first
