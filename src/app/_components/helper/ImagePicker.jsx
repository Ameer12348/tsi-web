import React from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
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
          <img src={selectedImage} alt="Selected" />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-0 right-0 inline-flex justify-center items-center h-8 w-8 text-white rounded-circle bg-[#00000044]"
          >
            <i className="fa-solid fa-xmark"></i>{" "}
          </button>
        </Box>
      ) : (
        <label className="flex-1 flex flex-col justify-center w-full items-center">
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
