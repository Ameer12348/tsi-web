const SocialMediaProfile = ({ links, setLinks }) => {
  const socialLinksArray = [
    { value: "facebook", name: "Facebook" },
    { value: "twitter", name: "Twitter" },
    { value: "instagram", name: "Instagram" },
    { value: "youtube", name: "Youtube" },
    { value: "linkedin", name: "LinkedIn" },
  ];

  const handleChange = (index, event) => {
    const values = [...links];
    values[index][event.target.name] = event.target.value;
    setLinks(values);
  };

  const handleAdd = () => {
    setLinks([...links, { platform: "", url: "" }]);
  };

  const handleRemove = (index) => {
    const values = [...links];
    values.splice(index, 1);
    setLinks(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Links: ", links);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="flex items-center space-x-4">
            <select
              name="platform"
              value={link.platform}
              onChange={(event) => handleChange(index, event)}
              className="block w-48 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {socialLinksArray.map((ele, index) => (
                <option key={index} value={ele.value}>
                  {ele.name}
                </option>
              ))}
            </select>
            <input
              type="url"
              name="url"
              placeholder="https://example.com"
              value={link.url}
              onChange={(event) => handleChange(index, event)}
              className="block w-full flex-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className=" text-red-700  p-2 text-center"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
        <div>
          <button
            type="button"
            onClick={handleAdd}
            className="text-gray-800 bg-gray-300 hover:bg-gray-700 hover:text-white duration-300  focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 "
          >
            <i className="fa-solid fa-plus me-1"></i>
            Add New Social Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialMediaProfile;
