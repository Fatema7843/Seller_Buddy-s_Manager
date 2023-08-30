import axios from "axios";

import { useRouter } from "next/router";

import { useState } from "react";

import { useForm } from "react-hook-form";

 

const insert = () => {

  const router = useRouter();

  const [error, setError] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

 

  const onSubmit = async (data) => {

    try {

      const response = await axios.post("http://localhost:3001/volunteer/insertvolunteer", data);

      console.log(response.data);

      router.push('/home');

    } catch (error) {

      if (error.response?.data?.message) {

        setError(error.response.data.message.join(", "));

      } else {

        setError("Something went wrong!");

      }

    }

  };

 

 

  return (

    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">

      <center><h1 className="text-2xl font-bold mb-4"> Product Add</h1></center>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">

          <label htmlFor="id">Id</label>

          <input

            {...register("id", { required: true })}

            type="number"

            id="id"

            name="id"

            className="border border-gray-400 rounded w-full p-2"

          />

          {errors.name && <span className="text-red-500">Id is required</span>}

        </div>

 

 

        <div className="mb-4">

          <label htmlFor="product_name">Product Name</label>

          <input

            {...register("product_name", { required: true })}

            type="text"

            id="product_name"

            name="product_name"

            className="border border-gray-400 rounded w-full p-2"

          />

          {errors.product_name && <span className="text-red-500">Product name is required</span>}

        </div>

       

       

       

        <div className="mb-4">

          <label htmlFor="code">Code</label>

          <input

                  {...register("code", { required: true })}

                  type="string"

                  id="code"

                  name="code"

                  className="border border-gray-400 rounded w-full p-2"

                />

                {errors.code && <span className="text-red-500">Code is required</span>}

              </div>

 

     

             

        {error && <p className="text-red-500">{error}</p>}

        <center><button

          type="submit"

          className="bg-blue-500 text-white py-2 px-4 rounded"

        >

          Submit

        </button></center>

      </form>

    </div>

  );

};

 

export default insert;