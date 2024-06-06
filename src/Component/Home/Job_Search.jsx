import React from 'react';
import Job_Search_Detail from './Job_Search_Detail';

function Course(props) {
  const course =[
    
    {
        img:"https://www.resume-now.com/sapp/uploads/2024/05/language-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"How to List Language Skill Levels on your Resume",name:"By Don Sjoerdsma, CPRW"
    },
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/nursing-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"Nursing Skills to put on a Resume [20+ Examples]",name:"By Don Sjoerdsma, CPRW"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/Research-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/05/BrophyPhoto-150x150.jpg",title:"How to Include Research Skills on a Resume", name:"By Hailey Brophy"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/Conceptual-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/05/BrophyPhoto-150x150.jpg",title:"What are Conceptual Skills?", name:"By Hailey Brophy"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/Analytical-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/05/BrophyPhoto-150x150.jpg",title:"How to List Analytical Skills on a Resume", name:"By Hailey Brophy"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/unique-skills-resume.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"37 Unique Skills to put on your Resume",name:"By Don Sjoerdsma, CPRW"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/Networking-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/05/BrophyPhoto-150x150.jpg",title:"How to Include Networking Skills on a Resume", name:"By Hailey Brophy"},
    { img:"https://www.resume-now.com/sapp/uploads/2024/05/collaboration-skills.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"Collaboration Skills [Definition + 30+Examples]",name:"By Don Sjoerdsma, CPRW"},
    
    
  ];
  return (
    <>
      <Job_Search_Detail course={course} id='course' />
    </>
  )
}

export default Course
