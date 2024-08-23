import CustomEditor from "../forms/CustomEditor";

const organizationTypeArray = [
  { value: "", name: "--select--" },
  { value: "government", name: "Government" },
  { value: "ngo", name: "NGO" },
];

const industryTypeArray = [
  { value: "", name: "--select--" },
  { value: "it", name: "IT Industry" },
];

const teamSizeArray = [
  { value: "", name: "--select--" },
  { value: "only_me", name: "Only me" },
  { value: "10_members", name: "10 members" },
  { value: "15_plus", name: "15+ members" },
];

const FoundingInfo = ({
  organizationType,
  setOrganizationType,
  industryType,
  setIndustryType,
  teamSize,
  setTeamSize,
  yearOfEstablishment,
  setYearOfEstablishment,
  websiteUrl,
  setWebsiteUrl,
  setEmployerVision,
  employerVision,
}) => {
  return (
    <>
      <div className="mb-3 grid grid-cols-3 gap-3 max-md:grid-cols-1">
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Organization Type</h3>
          <select
            className="w-full rounded border p-2 outline-0"
            value={organizationType}
            onChange={(e) => setOrganizationType(e.target.value)}
          >
            {organizationTypeArray.map((ele, index) => (
              <option key={index} value={ele.value}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        {/* organization type end  */}
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Industry Type</h3>
          <select
            className="w-full rounded border p-2 outline-0"
            value={industryType}
            onChange={(e) => setIndustryType(e.target.value)}
          >
            {industryTypeArray.map((ele, index) => (
              <option key={index} value={ele.value}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        {/* industry Type end  */}
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Team Size</h3>
          <select
            className="w-full rounded border p-2 outline-0"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          >
            {teamSizeArray.map((ele, index) => (
              <option key={index} value={ele.value}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        {/* team size end  */}
      </div>
      <div className="mb-3 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Year of establishment</h3>
          <input
            type="date"
            className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
            placeholder="Year of establishment"
            value={yearOfEstablishment}
            onChange={(e) => setYearOfEstablishment(e.target.value)}
          />
        </div>
        {/* year of establishment end */}
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Website Url</h3>
          <input
            type="text"
            className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
            placeholder="Website Url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
        </div>
        {/* website url end */}
      </div>
      <div>
        <h3 className="mb-2 text-sm text-gray-800">Emplyer Vision</h3>
        <CustomEditor
          initialData={employerVision}
          onChange={setEmployerVision}
        />
      </div>
    </>
  );
};

export default FoundingInfo;
