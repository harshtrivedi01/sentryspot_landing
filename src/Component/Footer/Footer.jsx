// import React from 'react';
// import './Footer.css'

// const Footer = () => {
//   return (
//     <>
//     <footer className=" border-t-2 text-white py-8 " id='footerbg'>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-4  ">
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h5 className="font-bold text-xl mb-4">Resume </h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Template</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Example</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume formats</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a Resume</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h5 className="font-bold text-xl mb-4">Cover Letter </h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Builder</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Template</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Example</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter formats</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a Cover Letter</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h5 className="font-bold text-xl mb-4">CV </h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Builder</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Template</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Example</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV formats</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a CV</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h5 className="font-bold text-xl mb-4">Resume Now</h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Services</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cookies and tracking poilcy </a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 mb-6 md:mb-0">
//             <h5 className="font-bold text-xl mb-4">Support</h5>
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Accesibilty</a></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Affilates</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3">
//             <h5 className="font-bold text-xl mb-4">Follow Us</h5>
//             {/* <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.83.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573 4.898 4.898 0 0 1-2.228-.616c-.053 2.28 1.581 4.415 3.95 4.888a4.92 4.92 0 0 1-2.224.084c.627 1.956 2.444 3.379 4.6 3.42A9.875 9.875 0 0 1 0 21.54a13.943 13.943 0 0 0 7.548 2.212c9.056 0 14.01-7.508 14.01-14.01 0-.213-.005-.426-.014-.637A9.978 9.978 0 0 0 24 4.557z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19.616 3H4.384C3.22 3 2.291 3.93 2.291 5.093v13.813c0 1.164.93 2.093 2.093 2.093h8.454v-6.02H9.616v-2.093h3.22v-1.8c0-2.997 1.742-4.62 4.444-4.62 1.313 0 2.687.236 2.687.236v2.99h-1.514c-1.489 0-1.96.924-1.96 1.871v2.323h3.327l-.531 2.093h-2.796v6.02h4.385c1.164 0 2.093-.93 2.093-2.093V5.093C21.709 3.93 20.78 3 19.616 3z" />
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 4.988 3.657 9.13 8.438 9.878v-6.985H7.898V12h2.54v-2.084c0-2.506 1.492-3.89 3.776-3.89 1.095 0 2.238.194 2.238.194v2.48H15.08c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.934h-2.33v6.985c4.78-.748 8.438-4.89 8.438-9.878 0-5.522-4.477-10-10-10z" />
//                 </svg>
//               </a>
//             </div> */}
//             <ul>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Phone Number:</a>
//               <li className=' text-gray-300'>9999999999</li></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Email</a>
//               <li className=' text-gray-300'>customerservice@resume-now.com</li></li>
//               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CS Support Schedule</a>
//               <li className=' text-gray-300'>Mon-Fri: 08:00am - 08:00pm CST</li>
//               <li className=' text-gray-300'>Sat: 08:00am - 05:00pm CST</li>
//               <li className=' text-gray-300'>Sun: 10:00am - 06:00pm CST</li></li>
              
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-4">
//           <p className="text-center text-gray-400">&copy; 2024 Now Limited. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//     </>
//   );
// };

// export default Footer;


import React from 'react';
import './Footer.css';
import logo from './logo.png'

const Footer = () => {
    return (
      <>
      <div className='  py-4 flex justify-center border-b-2' id='footerbg'>
        <div className=' flex flex-col md:w-[40%] justify-center  px-2 py-10 text-white gap-5 ' >
          <div className=' text-center font-bold text-2xl'>Get Started with Abroadium.com</div>
          <div className=' text-center text-lg'>Want to learn what Abroadium can do for you? See for yourself with a free premium content on Verified Overseas Opportunity</div>
          <div className=' text-center'>
            <button className=' px-2 py-2 text-xl rounded-lg font-bold border-2 hover:shadow-xl hover:shadow-gray-800'id='footerbg' >Check it Out</button>
          </div>
        </div>
      </div>
        <footer className="bg-purple-800 text-white py-8" id='footerbg'>
            <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
              <div className=' flex flex-wrap justify-between px-2 md:px-[65px]'>
                <div className=" md:w-auto mb-6 md:mb-0">
                    <img src={logo} className=' h-14 w-full'/>
                    <p className=' text-lg text-bold px-5'>Building Careers of Tomorrow</p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold text-white">Get Our Weekly</h2>
                    <form className="flex flex-col md:flex-row gap-3">
                        <input type="email" placeholder="Type your email..." required className="p-2  rounded" />
                        <button type="submit" className="md:px-4 md:py-1 p-1 rounded-full bg-white text-black hover:bg-orange-500">Subscribe</button>
                    </form>
                </div>
                </div>
                <br/>
                <div className=' flex flex-wrap justify-around'>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Abroadium</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-400">Careers</a></li>
                        <li><a href="#" className="hover:text-orange-400">Placement Support</a></li>
                        <li><a href="#" className="hover:text-orange-400">Abroadium Blog</a></li>
                        <li><a href="#" className="hover:text-orange-400">Abroadium Tutorials</a></li>
                        <li><a href="#" className="hover:text-orange-400">Resources</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Support</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400">Salary Tool</a></li>
                        <li><a href="#" className="hover:text-orange-400">Grievance Redressal</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Scope & Products</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Ai Resume Builder</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai Skill Tests</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai CV Parsing</a></li>
                        <li><a href="#" className="hover:text-orange-400">White Labelling</a></li>
                        <li><a href="#" className="hover:text-orange-400">Generative AI</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Ai Resources</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Ai - Resume Accuracy</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai - Resume Enhancer</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai - Job Match & Apply</a></li>
                        <li><a href="#" className="hover:text-orange-400">Verified Jobs</a></li>
                        <li><a href="#" className="hover:text-orange-400">Verified Profiles</a></li>
                        <li><a href="#" className="hover:text-orange-400">& Much More</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
                <p className="text-white text-right">&copy; Copyright By Abroadium.com All Rights Reserved</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
