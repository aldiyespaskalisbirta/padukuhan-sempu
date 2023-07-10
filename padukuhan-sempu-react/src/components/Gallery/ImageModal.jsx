import React, { useEffect, useState } from "react";
import axios from "axios";
const ImageModal = ({ imageUrl, title, description, imageId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteImage = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/images-delete/${id}`)
      .then(function (response) {
        console.log(response.data);
        alert("successfully Deleted");
        window.location.reload();
      });
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="Image"
        className="cursor-pointer w-full"
        onClick={openModal}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="flex flex-col absolute max-w-2xl mx-auto bg-white p-4 rounded-lg drop-shadow-lg jusitfy-center items-center">
            <img src={imageUrl} alt="Image" className="h-96" />
            <div className="description pt-5 w-full left-0 relative">
              <h1 className="font-bold text-xl break-words">{title}</h1>
              <p className="text-gray-500 mb-5 max-w-full break-words">
                {description}
              </p>
            </div>
            <div className="action flex gap-5">
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ease-in-out"
                onClick={() => this.downloadFile({ imageUrl })}
              >
                Download
              </button>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ease-in-out"
                onClick={() => deleteImage(imageId)}
              >
                Delete
              </button>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ease-in-out"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
