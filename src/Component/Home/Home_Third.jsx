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

{/* Start Building component */}

      <div className='flex flex-col gap-5 justify-center px-5 py-7 md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Start building by picking a professional template</h1>
    <p>Choose one of the <span className='text-blue-500 font-semibold'>resume templates</span> below. Fill it in with expert-written text inspired by your work experience.</p>
    <p>
      These professionally designed templates have been tested in the real world and proven to bypass HR screening software. Rest easy knowing your resume is more likely to land in human hands.
    </p>
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2024/04/assistant-editor-resume-example.svg", alt: "Assistant Editor Resume Example", title: "Create Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-farmer.svg", alt: "Farmer Resume Template", title: "Simple Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-doctor.svg", alt: "Doctor Resume Template", title: "Modern Resume Template" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-96 w-full' />
        <h1 className='font-bold text-blue-700 text-xl text-center mt-2'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Build Your Resume Now</button>
      </div>
    ))}
  </div>
</div>




{/* Make your Resume component */}

<div className='flex flex-col gap-5 px-5 py-7 md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Make your resume using real-world examples</h1>
    <p>Browse <span className=' font-semibold text-blue-600'>350+ popular resume</span> examples covering all types of jobs, industries and levels of experience. Every example has been reviewed and approved by a Certified Professional Resume Writer (CPRW).
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
        <img src={template.src} alt={template.alt} className=' h-[400px] w-full' />
        <h1 className='font-bold text-blue-700 text-xl text-center mt-2'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Create Your Resume </button>
      </div>
    ))}
  </div>
</div>


{/* Looking for CV or Cover Letter */}

<div className='flex flex-col gap-5 px-5 py-7 md:mx-auto md:w-[70%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Looking for CVs or cover letters?</h1>
    <p>Explore our extensive collection of over 600 CV and cover letter examples to find your perfect fit for any industry or job level.
    </p>
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/cover-letter-example-technical-project-manager.svg", alt: "Assistant Editor Resume Example", title: "Cover Letter Example" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/CV-example-college-part-1.svg", alt: "Farmer Resume Template", title: "CV Examples" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-[400px] w-full' />
        <h1 className='font-bold text-blue-700 text-xl text-center mt-2'>{template.title}</h1>
        <button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Create Your CV </button>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Home_Third
