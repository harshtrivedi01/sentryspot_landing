import React, { useState, useEffect } from 'react';
import logo from './logo.png'
function Signup() {

  return (
    <div >
      <div className='min-h-screen flex justify-end  py-2'>
        
        <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg' >
        <div className=' flex bg-black '>
        <div><img src={logo} className=' h-10 w-full'/></div>
        <div className='text-2xl text-white font-bold'>Let's Get Started</div>
        </div>
          <h3 className='text-xl text-black font-semibold py-5 text-center'>People across Globe are joining us to upgrade their career with our Robust AI</h3>
          

          <form >
            <div className='mb-4'>
              <label className='block text-black'>First Name</label>
              <input
                type='text'
                name='first_name'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your First Name'
                required
                minLength={2}
                maxLength={40}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-black'>Last Name</label>
              <input
                type='text'
                name='last_name'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your Last Name'
                required
                minLength={2}
                maxLength={40}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-black'>Email ID</label>
              <input
                type='email'
                name='email'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your email ID'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-black'>Phone</label>
              <input
                type='number'
                name='phone'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your phone number'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-black'>Password</label>
              <input
                type='password'
                name='password'
                className='w-full px-3 py-2 border rounded-md'
                placeholder='Enter your password'
                required
                minLength={6}
                maxLength={12}
              />
                </div>
            <div className='mb-4'>
              <label className='block text-black'>Country</label>
              <select
                name='country_id'
                
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select Country</option>
                
              </select>
              
            </div>
            {/* <div className='mb-4'>
              <label className='block text-black'>State</label>
              <select
                name='state_id'
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select State</option>
                
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-black'>City</label>
              <select
                name='city_id'
                value={registerValues.city_id}
                onChange={handleRegisterChange}
                className='w-full px-3 py-2 border rounded-md'
              >
                <option value=''>Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city_id && <p className="text-red-500 text-xs">{errors.city_id}</p>}
            </div>
            <div className='mb-4'>
                <label className='block text-black'>Qualification</label>
                <select
                  name='qualification_id'
                  value={registerValues.qualification_id}
                  onChange={handleRegisterChange}
                  className='w-full px-3 py-2 border rounded-md'
                >
                  <option value=''>Select Qualification</option>
                  {qualifications.map((qualification) => (
                    <option key={qualification.id} value={qualification.id}>
                      {qualification.name}
                    </option>
                  ))}
                </select>
                {errors.qualification_id && <p className="text-red-500 text-xs">{errors.qualification_id}</p>}
              </div> */}

            <button type='submit' className='w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
