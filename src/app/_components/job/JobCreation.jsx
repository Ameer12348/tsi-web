"use client";

import CustomSelect from "@/app/_components/forms/CustomSelect";
import { useState } from "react";
import CustomEditor from "../forms/CustomEditor";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const educationLevels = [
  { value: "no_formal_education", label: "No Formal Education" },
  { value: "primary_education", label: "Primary Education" },
  { value: "lower_secondary_education", label: "Lower Secondary Education" },
  { value: "upper_secondary_education", label: "Upper Secondary Education" },
  { value: "high_school_diploma", label: "High School Diploma" },
  { value: "ged", label: "General Educational Development (GED)" },
  { value: "vocational_training", label: "Vocational Training" },
  { value: "associate_degree", label: "Associate Degree (AA, AS)" },
  { value: "bachelors_degree", label: "Bachelor's Degree (BA, BS)" },
  { value: "honours_degree", label: "Honours Degree" },
  { value: "professional_degree", label: "Professional Degree (MD, JD, DDS)" },
  { value: "graduate_certificate", label: "Graduate Certificate" },
  { value: "graduate_diploma", label: "Graduate Diploma" },
  { value: "postgraduate_diploma", label: "Postgraduate Diploma" },
  { value: "masters_degree", label: "Master's Degree (MA, MS, MBA)" },
  { value: "mphil", label: "Master of Philosophy (MPhil)" },
  { value: "postgraduate_certificate", label: "Postgraduate Certificate" },
  { value: "doctorate_degree", label: "Doctorate Degree (PhD, DPhil)" },
  {
    value: "professional_doctorate",
    label: "Professional Doctorate (DBA, EdD)",
  },
  { value: "postdoctoral_fellowship", label: "Postdoctoral Fellowship" },
  { value: "certificate_of_completion", label: "Certificate of Completion" },
  {
    value: "diploma_of_higher_education",
    label: "Diploma of Higher Education (DipHE)",
  },
  { value: "higher_national_diploma", label: "Higher National Diploma (HND)" },
  { value: "foundation_degree", label: "Foundation Degree" },
  {
    value: "chartered_status",
    label: "Chartered Status (e.g., Chartered Accountant)",
  },
  {
    value: "fellowship",
    label: "Fellowship (e.g., Fellow of the Royal Society)",
  },
  { value: "postdoctoral_research", label: "Postdoctoral Research" },
  { value: "other", label: "Other" },
];
const experienceLevels = [
  { value: "no_experience", label: "No Experience" },
  { value: "fresher", label: "Fresher" },
  { value: "internship", label: "Internship" },
  { value: "entry_level", label: "Entry Level (0-1 years)" },
  { value: "junior", label: "Junior (1-3 years)" },
  { value: "mid_level", label: "Mid Level (3-5 years)" },
  { value: "senior", label: "Senior (5-8 years)" },
  { value: "lead", label: "Lead (8-10 years)" },
  { value: "manager", label: "Manager (10-15 years)" },
  { value: "director", label: "Director (15-20 years)" },
  { value: "executive", label: "Executive (20+ years)" },
  { value: "other", label: "Other" },
];
const jobTypes = [
  { value: "full_time", label: "Full-Time" },
  { value: "part_time", label: "Part-Time" },
  { value: "contract", label: "Contract" },
  { value: "temporary", label: "Temporary" },
  { value: "internship", label: "Internship" },
  { value: "freelance", label: "Freelance" },
  { value: "remote", label: "Remote" },
  { value: "on_site", label: "On-Site" },
  { value: "consulting", label: "Consulting" },
  { value: "apprenticeship", label: "Apprenticeship" },
  { value: "volunteer", label: "Volunteer" },
  { value: "seasonal", label: "Seasonal" },
  { value: "permanent", label: "Permanent" },
  { value: "temporary_to_permanent", label: "Temporary to Permanent" },
  { value: "other", label: "Other" },
];
const weekdaysArray = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
];

const salaryTypes = [
  { value: "hourly", label: "Hourly" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

const salaryModeArray = ["salaryRange", "customSalary"];
const JobCreation = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState({
    value: "",
    label: "--select job category--",
  });
  const [jobRole, setJobRole] = useState({
    value: "",
    label: "--select job role--",
  });
  const [salaryType, setSalaryType] = useState({
    value: "",
    label: "--select salary type--",
  });
  const [salaryMode, setSalaryMode] = useState(salaryModeArray[0]);
  const [minimumSalary, setMinimumSalary] = useState("");
  const [maximumSalary, setMaximumSalary] = useState("");
  const [customSalary, setCustomSalary] = useState("");
  const [education, setEducation] = useState({
    value: "",
    label: "--select education--",
  });
  const [experience, setExperience] = useState({
    value: "",
    label: "--select experience--",
  });
  const [jobType, setJobType] = useState({
    value: "",
    label: "--select job type--",
  });
  const [totalVacancies, setTotalVacancies] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [weekdays, setWeekdays] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
        <div className="mb-2">
          <h1 className="text-xl font-medium">Post a Job</h1>
        </div>
        {/* page heading end  */}
        <div className="mb-5 grid grid-cols-2 items-center gap-3 max-md:grid-cols-1">
          <div>
            <h3 className="mb-2 text-sm text-gray-800">Job Title</h3>
            <input
              type="text"
              className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          {/* Job Title end */}
          <div>
            <h3 className="mb-2 text-sm text-gray-800">Job Category</h3>
            <CustomSelect
              options={options}
              className="w-full rounded border border-gray-400 text-gray-800 outline-0"
              styles={{
                borderColor: "gray",
                borderRadius: "0.5rem",
                display: "flex",
                padding: "0.2rem",
              }}
              value={jobCategory}
              onChange={(e) =>
                setJobCategory({ value: e.value, label: e.label })
              }
            />
          </div>
          {/* Job Category   end */}
          <div>
            <h3 className="mb-2 text-sm text-gray-800">Job Role</h3>
            <CustomSelect
              options={options}
              className="w-full rounded border border-gray-400 text-gray-800 outline-0"
              styles={{
                borderColor: "gray",
                borderRadius: "0.5rem",
                display: "flex",
                padding: "0.2rem",
              }}
              value={jobRole}
              onChange={(e) => setJobRole({ value: e.value, label: e.label })}
            />
          </div>
          {/* job role end  */}
        </div>
        {/* job title and category and role end  */}
        <div className="mb-5">
          <div className="mb-3">
            <h3 className="text-xl font-medium">Salary</h3>
          </div>
          <div className="mb-3 flex gap-3">
            <label className="flex cursor-pointer gap-2">
              <input
                type="radio"
                name="salaryType"
                checked={salaryMode === salaryModeArray[0]}
                onChange={() => setSalaryMode(salaryModeArray[0])}
              />
              <span>Salary Range</span>
            </label>
            {/* salary range radio end */}
            <label className="flex cursor-pointer gap-2">
              <input
                type="radio"
                name="salaryType"
                checked={salaryMode === salaryModeArray[1]}
                onChange={() => setSalaryMode(salaryModeArray[1])}
              />
              <span>Custom Salary</span>
            </label>
            {/* custom salary radio end  */}
          </div>
          {/* salary mode changer end  */}
          <div className="grid grid-cols-3 items-center gap-3 max-md:grid-cols-1">
            {salaryMode === salaryModeArray[0] ? (
              <>
                {" "}
                <div>
                  <h3 className="mb-2 text-sm text-gray-800">Minimum Salary</h3>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                    placeholder="Minimum Salary"
                    value={minimumSalary}
                    onChange={(e) => setMinimumSalary(e.target.value)}
                  />
                </div>
                {/* Minimum Salary end */}
                <div>
                  <h3 className="mb-2 text-sm text-gray-800">Maximum Salary</h3>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                    placeholder="Maximum Salary"
                    value={maximumSalary}
                    onChange={(e) => setMaximumSalary(e.target.value)}
                  />
                </div>
                {/* Maximum Salary   end */}
              </>
            ) : (
              <>
                <div className="col-span-2">
                  <h3 className="mb-2 text-sm text-gray-800">Custom Salary</h3>
                  <input
                    type="text"
                    className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                    placeholder="Custom Salary"
                    value={customSalary}
                    onChange={(e) => setCustomSalary(e.target.value)}
                  />
                </div>
                {/* custom Salary end */}
              </>
            )}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Salary Type </h3>
              <CustomSelect
                options={salaryTypes}
                className="w-full rounded border border-gray-400 text-gray-800 outline-0"
                styles={{
                  borderColor: "gray",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.2rem",
                }}
                value={salaryType}
                onChange={(e) =>
                  setSalaryType({ value: e.value, label: e.label })
                }
              />
            </div>
            {/* job role end  */}
          </div>
        </div>
        {/* salary information end  */}
        <div className="mb-5">
          <div className="mb-3">
            <h3 className="text-lg font-medium">Advance Information</h3>
          </div>
          <div className="grid grid-cols-3 items-center gap-3 max-md:grid-cols-1">
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Education</h3>
              <CustomSelect
                options={educationLevels}
                className="w-full rounded border border-gray-400 text-gray-800 outline-0"
                styles={{
                  borderColor: "gray",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.2rem",
                }}
                value={education}
                onChange={(e) =>
                  setEducation({ value: e.value, label: e.label })
                }
              />
            </div>
            {/* education  end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Experience </h3>
              <CustomSelect
                options={experienceLevels}
                className="w-full rounded border border-gray-400 text-gray-800 outline-0"
                styles={{
                  borderColor: "gray",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.2rem",
                }}
                value={experience}
                onChange={(e) =>
                  setExperience({ value: e.value, label: e.label })
                }
              />
            </div>
            {/*Experience end  */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Job Type </h3>
              <CustomSelect
                options={jobTypes}
                className="w-full rounded border border-gray-400 text-gray-800 outline-0"
                styles={{
                  borderColor: "gray",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.2rem",
                }}
                value={jobType}
                onChange={(e) => setJobType({ value: e.value, label: e.label })}
              />
            </div>
            {/*job Type end  */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Total Vacancies </h3>
              <input
                type="number"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Total Vacancies "
                value={totalVacancies}
                onChange={(e) => setTotalVacancies(e.target.value)}
              />
            </div>
            {/* Total Vacancies  end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Start Date </h3>
              <input
                type="date"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Start Date "
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            {/* Start Date  end  */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">
                Scheduled Ending Date{" "}
              </h3>
              <input
                type="date"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Scheduled Ending Date "
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            {/* Scheduled Ending Date   end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Start Time</h3>
              <input
                type="time"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Start Time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            {/*Start Time  end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Finish Time</h3>
              <input
                type="time"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Finish Time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            {/*Finish Time  end */}
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Week Days</h3>
              <CustomSelect
                options={weekdaysArray}
                className="w-full rounded border border-gray-400 text-gray-800 outline-0"
                styles={{
                  borderColor: "gray",
                  borderRadius: "0.5rem",
                  display: "flex",
                  padding: "0.2rem",
                }}
                // value={weekdays}
                isMulti={true}
                value={weekdays}
                onChange={(e) => {
                  setWeekdays(e);
                }}
              />
            </div>
            <div>
              <h3 className="mb-2 text-sm text-gray-800">Company Name</h3>
              <input
                type="text"
                className="w-full rounded border border-gray-400 p-2 text-gray-800 outline-0"
                placeholder="Company Name"
              />
            </div>
            {/*Company name  end */}
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-3">
            <h3 className="text-lg font-medium">Job Description</h3>
          </div>
          <div>
            <CustomEditor
              initialData={jobDescription}
              onChange={setJobDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCreation;
