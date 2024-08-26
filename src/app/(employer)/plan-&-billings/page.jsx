const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-4">
          <h1 className="mb-3 text-2xl font-medium text-gray-900">
            Plan & Billings
          </h1>
        </div>
        <div className="mb-6 grid grid-cols-3 items-start gap-x-3 gap-y-6 max-[810px]:grid-cols-1">
          <div className="rounded-md border border-gray-300 p-4">
            <h3 className="mb-2 text-2xl font-medium text-gray-900">
              15 Postings
            </h3>
            <p className="mb-5 text-gray-500">
              Max 15 Job Postings per month. Savings of $75.00. Post your job
              offer and ONLY pay once a match has been made. Only pay an
              additional $0.07 per hours for up to 3 months. All Pricing is USD
            </p>
            <button className="rounded bg-blue-600 px-3 py-2 text-white">
              Upgrade Plan
            </button>
          </div>
          {/* current plane and info */}
          <div className="col-span-2 rounded-md border border-gray-300 p-4">
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Current Plan Benefits
            </h3>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span>15 Active Jobs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span> 0 Featured Jobs </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span> 0 Highlight Jobs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span> 200 Employee Profile View</span>
              </div>
            </div>
            <hr className="my-5" />
            <h5 className="mb-3 text-sm text-gray-600">Remaining</h5>
            <div className="grid grid-cols-2 gap-1">
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span>15 Active Jobs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-regular fa-circle-xmark text-lg text-red-500"></i>
                <span> 0 Featured Jobs </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-regular fa-circle-xmark text-lg text-red-500"></i>
                <span> 0 Highlight Jobs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <i className="fa-solid fa-check text-lg text-blue-500"></i>
                <span> 200 Employee Profile View</span>
              </div>
            </div>
          </div>
          {/* cureent plan and Benefits end  */}
        </div>
        <div className="rounded-md border border-gray-300 p-4">
          <h3 className="mb-4 text-lg font-medium text-gray-900">
            Latest Invoices
          </h3>
          <div className="table-responsive">
            <table className="mx-auto w-full max-w-[1200px]" cellPadding={15}>
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left text-sm text-gray-500">#id </th>
                  <th className="text-left text-sm text-gray-500">Date</th>
                  <th className="text-left text-sm text-gray-500">Plan</th>
                  <th className="text-left text-sm text-gray-500">Amount</th>
                  <th className="text-left text-sm text-gray-500">
                    Payment Provider
                  </th>
                  <th className="text-left text-sm text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((ele, index) => (
                  <tr className="roundedduration-300 group" key={index}>
                    <td className="text-sm font-medium text-gray-500">
                      #66a55755dae8c
                    </td>
                    <td className="text-sm text-gray-500">
                      {new Date().toLocaleDateString("en-Us", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="text-sm">
                      <span className="rounded bg-blue-500 px-3 py-1 font-medium text-white">
                        15 Postings
                      </span>
                    </td>
                    <td className="text-sm text-gray-500">300 USD</td>
                    <td className="text-sm text-gray-500">
                      Offline{" "}
                      <span className="font-medium text-gray-800">
                        (Charge Account)
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-4">
                        <button className="rounded bg-green-700 px-2.5 py-1 text-sm font-medium text-white">
                          Paid{" "}
                        </button>
                        <button className="px-2 text-gray-500">
                          <i className="fa-solid fa-download me-1"></i>
                          Download Invoice
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
