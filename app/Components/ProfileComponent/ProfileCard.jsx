import React from 'react'

function ProfileCard() {
  return (
    <>
     <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="flex items-center space-x-6">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://via.placeholder.com/150" // Replace with actual user image URL
          alt="User Profile"
        />
        <div className="flex-1 space-y-4">
          <div>
            <label className="text-gray-500">Name</label>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">John Doe</p>
              <button className="text-sm text-blue-500 hover:underline">Edit</button>
            </div>
          </div>
          <div>
            <label className="text-gray-500">Email</label>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">john.doe@example.com</p>
              <button className="text-sm text-blue-500 hover:underline">Edit</button>
            </div>
          </div>
          <div>
            <label className="text-gray-500">Phone</label>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">(123) 456-7890</p>
              <button className="text-sm text-blue-500 hover:underline">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileCard