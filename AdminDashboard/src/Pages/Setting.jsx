import React from "react";

const Setting = () => {
  return (
    <div className="  text-white mt-5">
      <div className="max-w-7xl mx-auto p-6">
        
        <h2 className="text-3xl font-semibold text-center mb-6">Settings</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#33373E] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Notifications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Connected Apps
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-[#33373E] rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Profile Settings</h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 block w-full p-3 bg-[#444A53] text-white rounded-md focus:ring-2 focus:ring-[#13727A]"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full p-3 bg-[#444A53] text-white rounded-md focus:ring-2 focus:ring-[#13727A]"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#13727A] rounded-md text-white hover:bg-[#105c5c] transition"
                >
                  Save Changes
                </button>
              </form>
            </div>

            
            <div className="bg-[#33373E] rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full p-3 bg-[#444A53] text-white rounded-md focus:ring-2 focus:ring-[#13727A]"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="mt-1 block w-full p-3 bg-[#444A53] text-white rounded-md focus:ring-2 focus:ring-[#13727A]"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#13727A] rounded-md text-white hover:bg-[#105c5c] transition"
                >
                  Save Changes
                </button>
              </form>
            </div>

            
            <div className="bg-[#33373E] rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Notification Settings
              </h3>
              <form>
                <div className="flex items-center justify-between mb-4">
                  <label
                    htmlFor="emailNotifications"
                    className="text-sm font-medium text-gray-300"
                  >
                    Email Notifications
                  </label>
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    className="text-[#13727A] focus:ring-0"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <label
                    htmlFor="smsNotifications"
                    className="text-sm font-medium text-gray-300"
                  >
                    SMS Notifications
                  </label>
                  <input
                    type="checkbox"
                    id="smsNotifications"
                    className="text-[#13727A] focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#13727A] rounded-md text-white hover:bg-[#105c5c] transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
