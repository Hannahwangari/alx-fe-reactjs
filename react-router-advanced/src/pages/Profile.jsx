import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function ProfileOverview() {
  const { user } = useAuth();
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Overview</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome Back!</h3>
          <p className="text-gray-700">
            Hello <strong>{user?.username}</strong>! Thanks for visiting your profile dashboard.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Last login: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Account Status */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Account Status</h3>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700 font-medium">Active Account</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            All systems operational
          </p>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Quick Stats</h3>
          <div className="space-y-1">
            <p className="text-sm text-gray-700">User ID: <code>#{user?.id}</code></p>
            <p className="text-sm text-gray-700">Profile Views: 42</p>
            <p className="text-sm text-gray-700">Member Since: {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-2">Recent Activity</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Logged in today</li>
            <li>• Updated profile settings</li>
            <li>• Viewed 3 blog posts</li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
          View Public Profile
        </button>
      </div>
    </div>
  );
}
