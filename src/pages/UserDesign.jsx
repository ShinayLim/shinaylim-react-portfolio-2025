import React, { useState } from "react";
import Desktop from "../components/DesktopWindow";
// 👇 Import the map containing all your images
import { imageMap } from "../data/imageMap";

const UserDesign = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const folders = [
    { id: "travel", label: "UI / UX Designs" },
    { id: "art", label: "Graphic Designs" },
  ];

  const renderContent = (folderId) => {
    const imageList = imageMap[folderId];

    if (!imageList || imageList.length === 0) {
      return (
        <p className="text-gray-500 p-4">No images found in this folder.</p>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageList.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={img.src}
              className="w-full h-32 object-cover rounded-md shadow cursor-pointer hover:scale-105 transition"
              alt={img.title || `Design image from ${folderId}`}
              onClick={() => setZoomedImage(img.src)}
            />

            {/* ✅ Title */}
            {img.title && (
              <p className="text-sm text-center mt-1">{img.title}</p>
            )}

            {/* ✅ Live Demo Button if link exists */}
            {img.link && (
              <a
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-pink-100 text-pink-900 px-2 py-1 mt-1 rounded-md hover:bg-pink-500 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Desktop folders={folders} renderContent={renderContent} />

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg scale-100 animate-zoom"
            alt="Zoomed-in design"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default UserDesign;
