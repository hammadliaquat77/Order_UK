import React from 'react'

const orderItems = [
  { id: 1, name: 'PASTA', price: 4.00, quantity: 1, icon: '🍝' },
  { id: 2, name: 'PASTA', price: 4.00, quantity: 1, icon: '🍝' },
  { id: 3, name: 'PASTA', price: 4.00, quantity: 1, icon: '🍝' },
  { id: 4, name: 'BUCBUM', price: 5.00, quantity: 1, icon: '🍔' },
];



function CheckOut() {

  const total = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="bg-orange-50 min-h-screen p-4 sm:p-8 font-sans">
      <div className="container mx-auto max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">YOUCKOUT</h1>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-800">Prace</a>
            <a href="#" className="hover:text-gray-800">Calich</a>
            <a href="#" className="hover:text-gray-800">Gnaes</a>
            <svg className="w-6 h-6 text-gray-800 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Your Order Section */}
          <div className="flex-1 border border-dashed border-gray-300 rounded-2xl p-6 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              YOUR ORDER
            </h2>
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-lg text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-gray-600">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-dashed border-gray-300 mt-6 pt-4">
              <div className="flex justify-between items-center text-xl font-bold text-gray-800">
                <div className="flex items-center space-x-2">
                  <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m2-14v14m-4-7h-4m-4 0h-4m-4 0v10m8-10v10M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M4 7h16"></path>
                  </svg>
                  <span>TOTAL</span>
                </div>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Payment Sections */}
          <div className="flex-1 space-y-8">
            {/* Delivery Information */}
            <div className="border border-dashed border-gray-300 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                DELIVERY INFORMATION
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                  <input type="text" id="name" placeholder="Name Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
                  <input type="text" id="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 text-sm font-medium mb-1">Delivery Time</label>
                  <input type="text" id="time" placeholder="Delivery Time" className="w-full p-3 border border-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="border border-dashed border-gray-300 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                PAYMENT DETAILS
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-number" className="block text-gray-700 text-sm font-medium mb-1">Credit Card Number</label>
                  <input type="text" id="card-number" placeholder="Credit Card number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
                <div>
                  <label htmlFor="expiry-date" className="block text-gray-700 text-sm font-medium mb-1">Expiry Date</label>
                  <input type="text" id="expiry-date" placeholder="Expiry Date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-12 flex justify-center">
          <button className="relative py-4 px-12 bg-red-500 text-white font-bold text-xl rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200">
            PLACE ORDER!
            {/* The following SVG is a simple speech bubble shape */}
            <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 017.5 3c2.4 0 4.8 1.45 6.5 3.5.7-.8 1.5-1.5 2.5-2.5 1-.9 2.2-1.4 3.5-1.4a5.5 5.5 0 015.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut