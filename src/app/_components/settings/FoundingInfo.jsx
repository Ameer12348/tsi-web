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
      <div className="grid  grid-cols-3 gap-3 mb-3">
        <div>
          <h3 className="mb-2 text-sm  text-gray-800">Organization Type</h3>
          <select
            className="w-full outline-0 border p-2 rounded "
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
          <h3 className="mb-2  text-sm text-gray-800">Industry Type</h3>
          <select
            className="w-full outline-0 border p-2 rounded "
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
          <h3 className="mb-2  text-sm text-gray-800">Team Size</h3>
          <select
            className="w-full outline-0 border p-2 rounded "
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
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <h3 className="mb-2 text-sm text-gray-800">Year of establishment</h3>
          <input
            type="date"
            className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
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
            className="w-full outline-0 border p-2 rounded text-gray-800 border-gray-400"
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
