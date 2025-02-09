'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

const handlesubmit =  (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((usercredentials)=>{
      const user = usercredentials.user
      // console.log(user);
      toast.success('login successfull')
      router.push('/home')
      setLoading(false)
    }).catch((error)=>{
      console.log(error);
      
    })
    
}

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Sign In</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 dark:bg-red-900 dark:text-red-400">
            {error}
          </div>
        )}
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              placeholder="Enter your password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue hover:bg-blue text-white p-3 rounded-md font-medium transition duration-300"
          >
            {loading ? 'Loading' : 'Sign In'}

          </button>
        </form>
        <p className="mt-4 text-sm text-center dark:text-gray-300">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;