'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center">
            <Image src='/logo.png'height={1000} width={100} alt="logo" />
        </div>
        <form  className="space-y-4 mt-5">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none"
              placeholder="Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
           <input type="email" id='email' name='email' placeholder='example@gmail.com' value={formData.email} onChange={handleChange} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input type="password" id='password' placeholder='******'  value={formData.password} onChange={handleChange} className='w-full h-[3rem] border border-gray-300 p-2 rounded-md focus:outline-none' />
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Signup
          </button>
          <p className="text-center text-[16px] text-">Already have an account? <Link href='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
