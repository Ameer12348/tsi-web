const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="mb-3 text-2xl font-medium text-gray-900">
            Employee Tracker Data
          </h1>
        </div>
        <div className="mb-4 w-full overflow-x-hidden">
          <table className="mx-auto w-full max-w-[1200px]" cellPadding={15}>
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left text-sm text-gray-500">Job </th>
                <th className="text-left text-sm text-gray-500">Employee</th>
                <th className="text-left text-sm text-gray-500">
                  Check In Time
                </th>
                <th className="text-left text-sm text-gray-500">
                  Check Out Time
                </th>
                <th className="text-left text-sm text-gray-500">
                  Start Break Time
                </th>
                <th className="text-left text-sm text-gray-500">
                  End Break Time
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((ele, index) => (
                <tr
                  className="group rounded border-b duration-500 hover:border hover:border-blue-500"
                  key={index}
                >
                  <td className="text-lg font-medium text-gray-800">
                    React Developer
                  </td>
                  <td className="text-lg font-medium text-gray-800">
                    Employee Name
                  </td>
                  <td className="text-lg font-medium text-gray-800">
                    Check in Time
                  </td>
                  <td className="text-lg font-medium text-gray-800">
                    Check Out Time
                  </td>
                  <td className="text-lg font-medium text-gray-800">
                    Start Break Time
                  </td>
                  <td className="text-lg font-medium text-gray-800">
                    End Break Time
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
