import React from 'react'
import { Link } from 'react-router-dom'

function AIResume() {
  return (
    <>
      
     <div className=' bg-gray-800 text-white px-5 py-20 w-screen'>
       <div className=' flex flex-col justify-center items-center align-middle py-52'>
        <div className=' flex items-center md:gap-20'>
          <h1 className=' font-bold text-4xl py-8  '>Resume Builder</h1>
          <Link to='https://ai-resume-sepia.vercel.app/' target='_blank'>
        <div className=' flex justify-center mt-2'>
        <button className=' px-3 py-3 font-bold rounded-xl bg-slate-300 text-black'>Build your Resume Now</button>
        </div>
        </Link>
        </div>
        
        <table className=' border-2 border-black '>
            <tr className=' border-2 border-black' >
            <th className=' border-2 border-black px-6'>Resume</th>
        <th className=' border-2 border-black px-6'>Score</th>
        <th className=' border-2 border-black px-6'>Matched Job</th>
        <th className=' border-2 border-black px-6'>Match</th>
        <th className=' border-2 border-black px-6'>Created</th>
        <th className=' border-2 border-black px-6'>Last Edited</th>
        <th className=' border-2 border-black px-6'>Actions</th>
            </tr>
        
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>

            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            <tr className=' border-2 border-black'>
            <td className=' border-2 border-black px-6'>Resume1</td>
            <td className=' border-2 border-black px-6'>70%</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>-</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'>18/06/2024</td>
            <td className=' border-2 border-black px-6'><i className="fa-solid fa-upload px-1"></i><i className="fa-solid fa-pen-to-square px-1"></i><i className="fa-solid fa-trash px-1"></i></td>
            
            </tr>
            
            
        </table>
        {/* <Link to='https://ai-resume-sepia.vercel.app/' target='_blank'>
        <div className=' flex justify-center mt-2'>
        <button className=' px-3 py-3 font-bold rounded-xl bg-slate-300'>Build your Resume Now</button>
        </div>
        </Link> */}
        
        
       </div>

     </div>

    </>
  )
}

export default AIResume
