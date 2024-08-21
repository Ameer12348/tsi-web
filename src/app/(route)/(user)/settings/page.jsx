import SettingTabsForms from "@/app/_components/settings/SettingTabsForms";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 ">
        <div className="mb-2">
          <h1 className="text-lg font-medium">Settings</h1>
        </div>
        {/* heading end  */}
        <SettingTabsForms />
      </div>
    </div>
  );
};

export default page;
