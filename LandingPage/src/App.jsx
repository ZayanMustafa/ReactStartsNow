import { useState } from 'react'
import './App.css'

function App() {

  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Stylish E-commerce Store</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Custom Styles */\n        .product-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);\n        }\n    "
    }}
  />
  {/* Header */}
  <header className="bg-gradient-to-r from-blue-900 to-purple-600 text-white py-10">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-2">
        Welcome to Your Stylish E-commerce Store
      </h1>
      <p className="text-lg mb-6">
        Discover exclusive products curated just for you.
      </p>
      <a
        href="#shop"
        className="bg-white text-blue-900 py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
      >
        Shop Now
      </a>
    </div>
  </header>
  {/* Main Content */}
  <main id="shop" className="container mx-auto py-16">
    <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
      Our Featured Products
    </h2>
    <div className="flex justify-content-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg product-card transition duration-300">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 1"
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Product 1</h3>
        <p className="text-gray-600 mb-4">$49.99</p>
        <a
          href="#"
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </a>
      </div>
      {/* Product 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg product-card transition duration-300">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 2"
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Product 2</h3>
        <p className="text-gray-600 mb-4">$59.99</p>
        <a
          href="#"
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </a>
      </div>
      {/* Product 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg product-card transition duration-300">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 3"
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Product 3</h3>
        <p className="text-gray-600 mb-4">$39.99</p>
        <a
          href="#"
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </a>
      </div>
      {/* Product 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg product-card transition duration-300">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 4"
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">Product 4</h3>
        <p className="text-gray-600 mb-4">$69.99</p>
        <a
          href="#"
          className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </a>
      </div>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">Follow us on:</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Facebook
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Twitter
        </a>
        <a href="#" className="hover:text-gray-400 transition duration-300">
          Instagram
        </a>
      </div>
      <p>© 2024 Your Stylish E-commerce Store. All rights reserved.</p>
    </div>
  </footer>
</>

  )
}

export default App
