import React from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
const ImagePicker = ({
  title,
  recommendedSize,
  selectedImage,
  setSelectedImage,
  className,
}) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={className}
      style={{
        border: "2px dashed #ccc",
        borderRadius: "10px",
        padding: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {selectedImage ? (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            img: { width: "100%", height: "100%", objectFit: "cover" },
          }}
        >
          <Image
            src={selectedImage}
            width={2000}
            height={2000}
            alt="Selected"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-circle bg-[#00000044] text-white"
          >
            <i className="fa-solid fa-xmark"></i>{" "}
          </button>
        </Box>
      ) : (
        <label className="flex w-full flex-1 flex-col items-center justify-center">
          <CloudUploadIcon sx={{ fontSize: 40, color: "#ccc" }} />
          <Typography variant="body2">
            {title || "Browse photo or drop here"}
          </Typography>
          <Typography variant="caption">
            {recommendedSize || "Recommended size: 1920x312 pixels"}
          </Typography>
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      )}
    </div>
  );
};

export default ImagePicker;
