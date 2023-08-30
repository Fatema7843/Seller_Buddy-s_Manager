import { useState } from 'react';

import axios from 'axios';

import { useRouter } from 'next/router';

 

export default function Register() {

  const router = useRouter();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

 

  const handleRegister = async () => {

    try {

      const response = await axios.post('http://localhost:4000/buyer/register', {

        email,

        password,

      });

      if (response.data.id) {

        router.push('/login'); // Redirect to login page after successful registration

      }

    } catch (error) {

      console.error('Error registering:', error);

    }

  };

 

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="w-1/3 p-6 border rounded shadow">

        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input

          type="email"

          placeholder="Email"

          className="w-full p-2 border rounded mb-2"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

        <input

          type="password"

          placeholder="Password"

          className="w-full p-2 border rounded mb-2"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <button

          className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"

          onClick={handleRegister}

        >

          Register

        </button>

      </div>

    </div>

  );

}