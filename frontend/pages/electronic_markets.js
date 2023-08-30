import React from "react";

 

const ElectronicMarketsPage = () => {

  return (

    <div

      className="min-h-screen bg-gray-100 py-10"

      style={{

        backgroundImage: `url("/electronic_markets.jpg")`, // Path to the image in the public directory

        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",

      }}

    >

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">

          About Electronic Markets

        </h1>

        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">

          <p className="text-indigo-700 text-lg">

            Electronic markets, also known as online marketplaces, are platforms

            that facilitate buying and selling of goods and services through the

            internet. These platforms connect sellers and buyers from around the

            world, providing a convenient and efficient way to conduct business

            transactions.

          </p>

          <p className="mt-4 text-gray-700 text-lg">

            Electronic markets offer a wide variety of products and services,

            ranging from electronics and gadgets to clothing, accessories, and

            more. They allow businesses and individuals to showcase their

            products to a global audience, expanding their reach and customer

            base.

          </p>

          <p className="mt-4 text-indigo-700 text-lg">

            One of the key features of electronic markets is the ability to

            compare products, prices, and specifications from different

            sellers. This empowers consumers to make informed decisions and

            find the best deals available.

          </p>

          <p className="mt-4 text-gray-700 text-lg">

            Electronic markets have transformed the way commerce is conducted,

            offering benefits such as convenience, accessibility, and increased

            competition. They have also given rise to new business models and

            innovative ways of connecting buyers and sellers across the digital

            landscape.

          </p>

        </div>

      </div>

    </div>

  );

};

 

export default ElectronicMarketsPage;