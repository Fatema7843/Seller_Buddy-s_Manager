

import { useState } from 'react';

import axios from 'axios';

import { useRouter } from 'next/router';

 

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

 

  const handleLogin = async () => {

    try {

      const response = await axios.post('', {

        email,

        password,

      });

      if (response.data.message === 'Login successful') {

        router.push('http://localhost:3000/home'); // Redirect to the homepage (index.js) after successful login

      }

    } catch (error) {

      console.error('Error logging in:', error);

    }

  };

 

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="w-1/3 p-6 border rounded shadow">

        <h2 className="text-2xl font-bold mb-4">Login</h2>
       <br/>

        <input

          type="email"

          placeholder="Email"

          className="w-full p-2 border rounded mb-2"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input

          type="password"

          placeholder="Password"

          className="w-full p-2 border rounded mb-2"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        /><br/><br/>

<li><a href="http://localhost:3000/managerpanel ">Login</a></li>

      </div>

    </div>

  );

}

 