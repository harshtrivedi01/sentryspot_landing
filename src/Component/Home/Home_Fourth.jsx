import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'
import Home_Card from './Home_Card'
const ResumeBuilderFeatures = () => {
  return (
    <>
    <div className='bg-gray-200 border-2'>
      <h1 className='text-center text-4xl font-bold py-6'>Why use our online Resume Builder?</h1>
      <div className='flex flex-col gap-3 mx-auto md:w-[80%] px-8 py-2'>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <h1 className='font-bold text-2xl'>New, professional designs</h1>
              <p className=' text-lg text-gray-800'>Choose from a wide range of styles for every job level and type. From fun and creative to simple and modern, there’s a perfect design for everyone.</p>
            </div>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/professional-resume-designs.png" alt="" className='h-auto w-full' />
            </div>
          </div>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/ats-friendly-resume.png" alt="" className='h-auto w-full' />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>ATS-friendly</h1>
              <p className=' text-lg text-gray-800'>Employers use applicant tracking systems (ATS) to filter out candidates. With our templates, be confident knowing your ATS-friendly resume will reach the hiring manager successfully.</p>
            </div>
          </div>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <h1 className='font-bold text-2xl'>AI-powered content</h1>
              <p className=' text-lg text-gray-800'>Get AI-generated content suggestions for your resume based on your previous roles. Each line has been refined by our career experts for maximum impact.</p>
            </div>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/AI-powered-resume-content.png" alt="" className='h-auto w-full' />
            </div>
          </div>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/step-by-step-builder-support.png" alt="" className='h-auto w-full' />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>Step-by-step support</h1>
              <p className=' text-lg text-gray-800'>Our Resume Creator provides detailed tips and advice throughout the process, with customer support ready to assist you anytime.</p>
            </div>
          </div>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <h1 className='font-bold text-2xl'>Matching cover letter</h1>
              <p className=' text-lg text-gray-800'>Easily create a memorable cover letter with customizable suggested text in our Cover Letter Builder. Then, choose a design that aligns with your resume for a cohesive professional look.</p>
            </div>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/matching-cover-letter-with-resume.png" alt="" className='h-auto w-full' />
            </div>
          </div>
          <div className='flex md:gap-2 items-center flex-col md:flex-row shadow-lg  bg-white rounded-lg px-5'>
            <div>
              <img src="https://www.resume-now.com/sapp/uploads/2024/01/unlimited-resumes-option.png" alt="" className='h-auto w-full' />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>Unlimited resumes</h1>
              <p className=' text-lg text-gray-800'>Make and edit unlimited resumes, experiment with multiple templates and download your resumes in various file formats.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>

    <div>
        <div className=' py-6' >
          <h1 className=' text-center text-4xl font-bold py-6'>
          Real customer reviews of our Resume Maker
          </h1>
          <Home_Card/>
        </div>
      </div> 
      </>
  );
};

export default ResumeBuilderFeatures;


