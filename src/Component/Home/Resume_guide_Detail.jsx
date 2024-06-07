import React from "react";
import './Job.css'
import '../Home/Home.css'

const CourseDetail = ({ course }) => {
  return (
    <>
    <div id="course">
    <h1 className=" text-5xl font-bold px-5 md:px-16 py-5 text-center">Browse our up-to-date resume guides</h1>
    <p className=" mx-auto text-base text-slate-700 md:w-[800px]">Explore our recently updated guides to help you refine and modernize your resume. Discover valuable tips and strategies for today’s job market.</p>
      <div className="  md:w-[60%] px-5  py-5 bg-white text-black md:mx-auto gap-3 md:grid md:grid-cols-2 ">
        
        {course.map((card, index) => (
          <div key={index}>
            
            
<div className="flex flex-col justify-center  md:w-[320px] h-[340px] border-2 px-2 py-2 rounded-xl border-white shadow-md shadow-slate-400 card-container" >
  <img src={card.img} className="w-[300px] h-auto card-image rounded-md" alt="Course" />
  <h1 className="text-2xl font-bold " id='jobcard'>{card.title}</h1>
  <div className="flex gap-1 items-center">
    <img src={card.icon} alt="Icon" className=" rounded-full h-9 w-9" />
    <p id='jobcard' >{card.name}</p>
  </div>
  
  
</div>


          </div>
        ))}
        
        
      </div>
      <div className=" flex justify-center">
        <button className=" px-3 py-3  hover:bg-black font-semibold text-white border-2 rounded-xl text-center" id='home_third' >
            Get More Career Advice
        </button>
        </div>

        </div>
    </>
  );
};

export default CourseDetail;
