import MyJobCard from "../cards/MyJobCard";

const MyJobsEmployer = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-medium">My Jobs</h1>
        </div>
        <div className="mb-5">
          <div className="border-gray-3 flex max-w-[800px] items-center rounded-lg border px-2">
            <input
              type="text"
              className="flex-1 p-3 text-gray-600 outline-0"
              placeholder="Search"
            />
            <button className="px-2 py-1 text-gray-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        {/* search bar end  */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-gray-700">2345 Jobs</h3>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <MyJobCard />
          <MyJobCard />
          <MyJobCard />
          <MyJobCard />
        </div>
        <div className="flex justify-end gap-1 py-2">
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <span>1</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <span>2</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-500 text-white">
            <span>3</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <span>...</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <span>4</span>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <span>5</span>
          </button>

          <button className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        {/* pagination buttons end  */}
      </div>
    </div>
  );
};

export default MyJobsEmployer;
