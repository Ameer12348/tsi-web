const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="mb-3 text-2xl font-medium text-gray-900">
            Manageer Name
          </h1>
        </div>
        <div>
          <div className="mb-4 max-w-[500px]">
            <h3 className="mb-2 text-sm text-gray-800">Manager Name</h3>
            <input
              type="text"
              className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
              placeholder="Link"
            />
          </div>
          <div className="mb-4 max-w-[500px]">
            <h3 className="mb-2 text-sm text-gray-800">Code</h3>
            <input
              type="text"
              className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
              placeholder="Code"
            />
          </div>
          <h5 className="mb-4 text-sm text-gray-800">
            Is this user allowed to Call in for an extra charge of $5.00 per
            post
          </h5>
          <div className="mb-4 flex items-center gap-2">
            <label className="flex items-center gap-1">
              <span>Yes</span>
              <input type="radio" name="answer" />
            </label>
            <label className="flex items-center gap-1">
              <span>No</span>
              <input type="radio" name="answer" />
            </label>
          </div>
          <button className="rounded bg-blue-600 px-3 py-2 text-sm text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
