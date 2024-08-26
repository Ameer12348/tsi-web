"use client";
import { useState } from "react";
import ImagePicker from "../helper/ImagePicker";

const VerifyAccount = () => {
  const [documentImage, setDocumentImage] = useState(null);
  return (
    <div>
      <ImagePicker
        title={"Image of your NID/Driving Lisence/Passport"}
        recommendedSize={" Recommended size 1200px x 900px"}
        className="mb-10 aspect-[4/3] max-w-[500px] bg-gray-200"
        selectedImage={documentImage}
        setSelectedImage={setDocumentImage}
      />
      <h4 className="flex items-center gap-2 text-gray-600">
        <i className="fa-regular fa-circle-check text-2xl"></i>
        <span className="text-lg font-medium">Verified</span>
      </h4>
    </div>
  );
};

export default VerifyAccount;
