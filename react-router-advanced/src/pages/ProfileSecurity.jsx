import React, { useState } from 'react';

export function ProfileSecurity() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [twoFactor, setTwoFactor] = useState(false);
  const [sessions, setSessions] = useState([
    { id: 1, device: 'Chrome on Windows', location: 'San Francisco, CA', lastActive: '2 minutes ago', current: true },
    { id: 2, device: 'Safari on iPhone', location: 'San Francisco, CA', lastActive: '1 hour ago', current: false },
    { id: 3, device: 'Firefox on MacOS', location: 'New York, NY', lastActive: '3 days ago', current: false }
  ]);

  const handlePasswordChange = (field, value) => {
    setPasswords(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    // Handle password change
    console.log('Changing password...');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const terminateSession = (sessionId) => {
    setSessions(prev => prev.filter(session => session.id !== sessionId));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>

      <div className="space-y-8">
        {/* Change Password */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Change Password
          </h3>

          <form onSubmit={handlePasswordSubmit} className="max-w-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={passwords.current}
                onChange={(e) => handlePasswordChange('current', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={passwords.new}
                onChange={(e) => handlePasswordChange('new', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Update Password
            </button>
          </form>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">
              <strong>Password Requirements:</strong> At least 8 characters with uppercase, lowercase, numbers, and special characters.
            </p>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Two-Factor Authentication
          </h3>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                {twoFactor ? 'Two-Factor Authentication Enabled' : 'Enable Two-Factor Authentication'}
              </h4>
              <p className="text-sm text-gray-500">
                {twoFactor 
                  ? 'Your account is protected with 2FA' 
                  : 'Add an extra layer of security to your account'
                }
              </p>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                twoFactor
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {twoFactor ? 'Disable' : 'Enable'}
            </button>
          </div>

          {twoFactor && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                <strong>✓ Active:</strong> Two-factor authentication is enabled using your authenticator app.
              </p>
            </div>
          )}
        </div>

        {/* Active Sessions */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Active Sessions
          </h3>

          <div className="space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${session.current ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {session.device}
                      {session.current && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {session.location} • Last active {session.lastActive}
                    </p>
                  </div>
                </div>
                {!session.current && (
                  <button
                    onClick={() => terminateSession(session.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Terminate
                  </button>
                )}
              </div>
            ))}
          </div>

          <button className="mt-4 text-sm text-red-600 hover:text-red-800 font-medium">
            Terminate All Other Sessions
          </button>
        </div>

        {/* Login History */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recent Login Activity
          </h3>

          <div className="space-y-2">
            {[
              { date: 'Today, 2:30 PM', location: 'San Francisco, CA', status: 'success' },
              { date: 'Yesterday, 9:15 AM', location: 'San Francisco, CA', status: 'success' },
              { date: '3 days ago, 11:22 AM', location: 'New York, NY', status: 'success' },
              { date: '1 week ago, 4:45 PM', location: 'Unknown Location', status: 'failed' }
            ].map((login, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded-md">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${login.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="text-sm text-gray-900">{login.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{login.location}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    login.status === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {login.status === 'success' ? 'Success' : 'Failed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Danger Zone
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-red-900">Deactivate Account</h4>
                <p className="text-sm text-red-700">Temporarily disable your account. You can reactivate it later.</p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm">
                Deactivate
              </button>
            </div>

            <hr className="border-red-200" />

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-red-900">Delete Account</h4>
                <p className="text-sm text-red-700">Permanently delete your account and all data. This cannot be undone.</p>
              </div>
              <button className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}