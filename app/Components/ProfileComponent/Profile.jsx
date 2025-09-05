import React from 'react'
import ProfileCard from '../ProfileComponent/ProfileCard';
import PastOrders from '../ProfileComponent/PastOrders';

function Profile() {
  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">User Profile</h2>
        <nav>
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
                Profile
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Order History
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Addresses
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
                Payment Methods
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <div className="space-y-8">
          <ProfileCard />
          <PastOrders />
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile