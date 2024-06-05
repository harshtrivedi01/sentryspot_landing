import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className=" border-t-2 text-white py-8" id='footerbg'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4  ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold text-xl mb-4">Resume </h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Builder</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Template</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume Example</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Resume formats</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a Resume</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold text-xl mb-4">Cover Letter </h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Builder</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Template</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter Example</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cover Letter formats</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a Cover Letter</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold text-xl mb-4">CV </h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Builder</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Template</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV Example</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CV formats</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">How to make a CV</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold text-xl mb-4">Resume Now</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cookies and tracking poilcy </a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Sitemap</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold text-xl mb-4">Support</h5>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Accesibilty</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Affilates</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="font-bold text-xl mb-4">Follow Us</h5>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.83.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573 4.898 4.898 0 0 1-2.228-.616c-.053 2.28 1.581 4.415 3.95 4.888a4.92 4.92 0 0 1-2.224.084c.627 1.956 2.444 3.379 4.6 3.42A9.875 9.875 0 0 1 0 21.54a13.943 13.943 0 0 0 7.548 2.212c9.056 0 14.01-7.508 14.01-14.01 0-.213-.005-.426-.014-.637A9.978 9.978 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.616 3H4.384C3.22 3 2.291 3.93 2.291 5.093v13.813c0 1.164.93 2.093 2.093 2.093h8.454v-6.02H9.616v-2.093h3.22v-1.8c0-2.997 1.742-4.62 4.444-4.62 1.313 0 2.687.236 2.687.236v2.99h-1.514c-1.489 0-1.96.924-1.96 1.871v2.323h3.327l-.531 2.093h-2.796v6.02h4.385c1.164 0 2.093-.93 2.093-2.093V5.093C21.709 3.93 20.78 3 19.616 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 4.988 3.657 9.13 8.438 9.878v-6.985H7.898V12h2.54v-2.084c0-2.506 1.492-3.89 3.776-3.89 1.095 0 2.238.194 2.238.194v2.48H15.08c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.934h-2.33v6.985c4.78-.748 8.438-4.89 8.438-9.878 0-5.522-4.477-10-10-10z" />
                </svg>
              </a>
            </div> */}
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Phone Number:</a>
              <li className=' text-gray-300'>9999999999</li></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Email</a>
              <li className=' text-gray-300'>customerservice@resume-now.com</li></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">CS Support Schedule</a>
              <li className=' text-gray-300'>Mon-Fri: 08:00am - 08:00pm CST</li>
              <li className=' text-gray-300'>Sat: 08:00am - 05:00pm CST</li>
              <li className=' text-gray-300'>Sun: 10:00am - 06:00pm CST</li></li>
              
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">&copy; 2024 Now Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
