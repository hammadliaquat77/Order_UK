import React from 'react'
import Link from 'next/link';

const selectedItems = [
  { id: 1, name: 'Selected Tem', price: 30.00, quantity: 1, image: '/path-to-food-image1.jpg' },
  { id: 2, name: 'Ardiued Tem', price: 24.00, quantity: 2, image: '/path-to-food-image2.jpg' },
  { id: 3, name: 'Chopy Fill', price: 23.00, quantity: 1, image: '/path-to-food-image3.jpg' },
  { id: 4, name: 'Cuied Preats', price: 22.00, quantity: 1, image: '/path-to-food-image4.jpg' },
  { id: 5, name: 'Rhomen Tem', price: 12.00, quantity: 1, image: '/path-to-food-image5.jpg' },
  { id: 6, name: 'Prowien Terr', price: 15.00, quantity: 1, image: '/path-to-food-image6.jpg' },
];


function Cart() {

  const subtotal = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = 5.00; // Example tax
  const deliveryFee = 25.00; // Example delivery fee
  const grandTotal = subtotal + tax + deliveryFee;


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full p-8">
        {/* Header & Progress */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Cart &gt; Checkout &gt; Confirmation</span>
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-gray-500 text-sm">Subtotal</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">-</button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center">+</button>
                </div>
                <p className="font-bold text-gray-800">${item.price.toFixed(2)}</p>
                <button className="text-red-500 hover:text-red-700 ml-4 text-sm">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 bg-gray-50 p-6 rounded-2xl shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4 pt-4">
              <div className="flex justify-between font-bold text-xl text-gray-800">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Apply
                </button>
              </div>
              <Link href="/Pages/Checkout">
              <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200 w-full">
                Proceed to Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart