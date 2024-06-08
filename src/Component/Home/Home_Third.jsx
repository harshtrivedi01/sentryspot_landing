import React from 'react'
import './Home.css'
import Home_Fourth from './Home_Fourth'
import Home_Video from './Home_Video'

function Home_Third() {
  return (
    <>
    <div className=' bg-gray-100 py-10 mb-3'>
      <div className=' flex justify-center bg-gray-100'>
        <div className=' flex flex-col gap-5 md:w-[60%] md:flex-row  shadow-lg shadow-gray-400 text-white rounded-xl  px-5 py-9' id='home_third'>
          <div className=''>
            
            <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/resume-landing/rm-mobile-step-2-wb.webp" alt="" className=' h-[200px] w-[400px] rounded-xl shadow-lg shadow-gray-600 items-center align-middle' />
          </div>
          {/* <div className=' flex flex-col gap-3  justify-center'>
            <h1 className=' font-bold text-3xl'> How AI Platform Works For You</h1>
            <p className=' text-lg'>See how easy it is with our professional Resume Maker. Get job-specific text and choose from a wide range of designs to build a mistake-free resume that helps you land the job.</p>
          </div> */}
          <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>How AI Platform Works For You</h2>
                    <div className='flex items-center align-middle gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Build your Resume</h3>
                            <p>on a mobile, tablet, or desktop device</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Customise your Resume</h3>
                            <p>with pre-written summaries and responsibilities</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Preview your Resume</h3>
                            <p>every step of the way</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Download your Resume</h3>
                            <p>and apply to jobs anywhere</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>

   {/* <Home_Video/> */}

{/* Start Building component */}

      <div className='flex flex-col gap-5 border-2 my-8 rounded-xl bg-white justify-center px-7 py-10 shadow-md shadow-gray-600 md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Explore our wide range of trending templates that Recruiters loves to see
    </h1>
    <p className=' text-lg text-left'>Chosen & Crafted by Our Experts | Powered by our Robust AI </p>
    {/* <p className=' text-lg text-left'>Powered by our Robust AI</p> */}
    <p className=' text-lg text-left'>Backed by our Technology | Get it ready in less than 15 minutes </p>
    {/* <p className=' text-lg text-left'>Get it ready in less than 15 minutes</p> */}
    {/* <p className=' text-lg text-center'>Choose one of the <span className=' font-bold text-blue-500' >resume templates</span> below. Fill it in with expert-written text inspired by your work experience.</p>
    <br/>
    <p className=' text-lg text-center'>
      These professionally designed templates have been tested in the real world and proven to bypass HR screening software. Rest easy knowing your resume is more likely to land in human hands.
    </p> */}
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2024/04/assistant-editor-resume-example.svg", alt: "Assistant Editor Resume Example", title: "Create Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-farmer.svg", alt: "Farmer Resume Template", title: "Simple Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-doctor.svg", alt: "Doctor Resume Template", title: "Modern Resume Template" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-96 w-full rounded-xl hover:h-[400px]' />
        <h1 className='font-bold text-xl text-center mt-2' id='homecard'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='home_third'>Build Your Resume Now</button>
      </div>
    ))}
  </div>
</div>


<Home_Fourth/>

{/* Make your Resume component */}

<div className='flex flex-col gap-5 px-9 py-7 shadow-xl shadow-gray-600 bg-white rounded-xl md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Make your resume using real-world examples</h1>
    <p className=' text-xl'>Browse <span className=' font-semibold text-blue-600'>350+ popular resume</span> examples covering all types of jobs, industries and levels of experience. Every example has been reviewed and approved by a Certified Professional Resume Writer (CPRW).
    </p>
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-teacher.svg", alt: "Assistant Editor Resume Example", title: "Teacher Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-registered-nurse.svg", alt: "Farmer Resume Template", title: "Registered Nurse Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-college-student.svg", alt: "Doctor Resume Template", title: "College Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-administrative-assistant.svg", alt: "Doctor Resume Template", title: "Administrative Assistant Resume" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-[400px] w-full rounded-xl' />
        <h1 className='font-bold  text-xl text-center mt-2' id='homecard'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='home_third'>Create Your Resume </button>
      </div>
    ))}
  </div>
</div>


{/* Looking for CV or Cover Letter */}

<div className='flex flex-col gap-5 px-5 py-10 md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Looking for CVs or cover letters?</h1>
    <p className=' text-lg'>Explore our extensive collection of over 600 CV and cover letter examples to find your perfect fit for any industry or job level.
    </p>
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/cover-letter-example-technical-project-manager.svg", alt: "Assistant Editor Resume Example", title: "Cover Letter Example" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/CV-example-college-part-1.svg", alt: "Farmer Resume Template", title: "CV Examples" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-[400px] w-full border-2 rounded-lg shadow-xl shadow-gray-500' />
        <h1 className='font-bold  text-xl text-center mt-2' id='homecard'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='home_third'>Create Your CV </button>
      </div>
    ))}
  </div>
</div>
</div>
    </>
  )
}

export default Home_Third
