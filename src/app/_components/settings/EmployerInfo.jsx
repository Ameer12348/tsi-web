import CustomEditor from "../forms/CustomEditor";
import ImagePicker from "../helper/ImagePicker";

const EmployerInfo = ({
  banner,
  setBanner,
  logo,
  setLogo,
  aboutUs,
  setAboutUs,
}) => {
  console.log(aboutUs);

  return (
    <div>
      <h4 className="font-medium  text-gray-800 mb-3">Logo and Banner Image</h4>
      <div className="flex flex-wrap flex-col gap-4 items-start mb-6">
        <div className="w-52 self-center">
          <h6 className="mb-2 text-sm text-gray-800">Select Logo </h6>
          <ImagePicker
            imgDimensions={{ height: 500, width: 500 }}
            selectedImage={logo}
            setSelectedImage={setLogo}
            title={"Choose Logo"}
            recommendedSize={" Recommended size 500px x 500px"}
            className="w-full aspect-square bg-gray-200"
          />
        </div>
        {/* set logo  */}
        <div className="flex-1  w-full  ">
          <h6 className="mb-2 text-sm text-gray-800">Select Banner </h6>
          <ImagePicker
            selectedImage={banner}
            setSelectedImage={setBanner}
            title={"Choose Banner"}
            recommendedSize={" Recommended size 2048px x 500px"}
            className="w-full  aspect-[2048/500] bg-gray-200"
          />
        </div>
        {/* set banner / */}
      </div>
      {/* logo and banner set end  */}
      <div className="mb-6">
        <h3 className="mb-2  text-gray-800">Employer Name</h3>
        <input
          type="text"
          className="w-full outline-0 border p-2 rounded max-w-96 text-gray-800 border-gray-400 "
          placeholder="Search"
        />
      </div>
      {/* set employer name end  */}
      <div>
        <h3 className="mb-2  text-gray-800">About Us</h3>
        <CustomEditor initialData={aboutUs} onChange={setAboutUs} />
      </div>
    </div>
  );
};

export default EmployerInfo;
