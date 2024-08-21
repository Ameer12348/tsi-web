const AccountSettings = () => {
  return (
    <div>
      <div className="mb-20">
        <h4 className="font-medium   text-gray-600 mb-5">
          Employer Phone & Email Address For Public View
        </h4>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Phone Number</h3>
              <input
                type="tel"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Phone Number"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* phone number end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Email Address</h3>
              <input
                type="email"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Email Address"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* email end */}
          </div>
          <button className="bg-blue-600 py-2 px-3 rounded text-sm text-white">
            Save Changes
          </button>
        </div>
      </div>
      {/* phone number and email address end  */}
      <div className="mb-20">
        <h4 className="font-medium   text-gray-600 mb-5">
          Employer Phone & Email Address For Public View
        </h4>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Username</h3>
              <input
                type="text"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Username"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* email end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Email Address</h3>
              <input
                type="email"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Email Address"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* email end */}
          </div>
          <button className="bg-blue-600 py-2 px-3 rounded text-sm text-white">
            Save Changes
          </button>
        </div>
      </div>
      {/* username and email change end  */}
      <div>
        <h4 className="font-medium   text-gray-600 mb-5">Change Password </h4>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Password</h3>
              <input
                type="password"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Password"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* password end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Confirm Password</h3>
              <input
                type="password"
                className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
                placeholder="Confirm Password"
                //   value={websiteUrl}
                //   onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {/* confirm Password end end */}
          </div>
          <button className="bg-blue-600 py-2 px-3 rounded text-sm text-white">
            Save Changes
          </button>
        </div>
        {/* password and confirm Password End  */}
      </div>
    </div>
  );
};

export default AccountSettings;
