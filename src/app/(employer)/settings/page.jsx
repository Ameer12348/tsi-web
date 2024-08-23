import SettingTabsForms from "@/app/_components/settings/SettingTabsForms";

const page = () => {
  return (
    <div className="p-4">
      <div className="rounded-lg bg-white p-4">
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
