"use client";

import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import EmployerInfo from "./EmployerInfo";
import FoundingInfo from "./FoundingInfo";
import SocialMediaProfile from "./SocialMediaProfile";
import AccountSettings from "./AccountSettings";

const SettingTabsForms = () => {
  const [tab, setTab] = useState(0);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [aboutUs, setAboutUs] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [employerVision, setEmployerVision] = useState("");
  const [links, setLinks] = useState([]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="w-full">
      <div className="scrollbar-thin w-full overflow-x-auto">
        <Tabs value={tab} onChange={handleChange} sx={{ marginBottom: 2 }}>
          <Tab
            label={
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <i className="fa-regular fa-user text-base"></i>
                <span>Employer Info</span>
              </div>
            }
          />
          <Tab
            label={
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <i className="fa-regular fa-circle-user text-base"></i>
                <span>Founding Info</span>
              </div>
            }
          />
          <Tab
            label={
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <i className="fa-solid fa-hashtag text-base"></i>

                <span>Social Media Profile</span>
              </div>
            }
          />
          <Tab
            label={
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <i className="fa-solid fa-gears text-base"></i>
                <span>Account Setting</span>
              </div>
            }
          />
        </Tabs>
      </div>
      <div className="mb-5">
        {tab === 0 && (
          <EmployerInfo
            logo={logo}
            setLogo={setLogo}
            banner={banner}
            setBanner={setBanner}
            aboutUs={aboutUs}
            setAboutUs={setAboutUs}
          />
        )}
        {tab === 1 && (
          <FoundingInfo
            organizationType={organizationType}
            setOrganizationType={setOrganizationType}
            industryType={industryType}
            setIndustryType={setIndustryType}
            teamSize={teamSize}
            setTeamSize={setTeamSize}
            yearOfEstablishment={yearOfEstablishment}
            setYearOfEstablishment={setYearOfEstablishment}
            websiteUrl={websiteUrl}
            setWebsiteUrl={setWebsiteUrl}
            employerVision={employerVision}
            setEmployerVision={setEmployerVision}
          />
        )}
        {tab === 2 && <SocialMediaProfile links={links} setLinks={setLinks} />}
        {tab === 3 && <AccountSettings />}
      </div>
      {tab !== 3 && (
        <button className="rounded bg-blue-600 px-3 py-2 text-sm text-white">
          Save Changes
        </button>
      )}
    </div>
  );
};

export default SettingTabsForms;
