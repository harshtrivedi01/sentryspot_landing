import React from "react";
import './Job.css'
import '../Home/Home.css'

const CourseDetail = ({ course }) => {
  return (
    <>
    <div id="course">
    <h1 className=" text-5xl font-bold px-5  py-5 text-center">Latest advice from our job search experts</h1>
    <p className=" md:mx-auto px-2 text-base text-slate-700 md:w-[800px]">You’re never alone in your job search. Whether you’re writing a cover letter, preparing for the interview or negotiating your salary, our resource center has articles that will help you take the next step in your career.</p>
      <div className="px-5 md:px-52 py-5 bg-white text-black md:grid md:grid-cols-4 gap-2 ">
        
        {course.map((card, index) => (
          <div key={index}>
            
            
<div className="flex flex-col justify-evenly h-[300px] px-2 py-2 rounded-xl border-white shadow-md shadow-gray-400 card-container" >
  <img src={card.img} className="w-[300px] h-auto card-image rounded-md" alt="Course" />
  <h1 className="text-2xl font-bold " id='jobcard'>{card.title}</h1>
  <div className="flex gap-1 items-center">
    <img src={card.icon} alt="Icon" className=" rounded-full h-9 w-9" />
    <p id='jobcard'>{card.name}</p>
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
