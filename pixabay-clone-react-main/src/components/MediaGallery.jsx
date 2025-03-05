import React from "react";

const mediaFiles = [
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const MediaGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {mediaFiles.map((file, index) =>
        file.type === "image" ? (
          <img key={index} src={file.src} alt="Media" className="w-full h-auto rounded-lg" />
        ) : (
          <video key={index} controls className="w-full h-auto rounded-lg">
            <source src={file.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}
    </div>
  );
};

export default MediaGallery;
