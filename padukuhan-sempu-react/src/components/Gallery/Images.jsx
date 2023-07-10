import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";

const Images = () => {
  const [dataImages, setDataImages] = useState([]);
  const [errors, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/images");
        const data = await response.json();
        setDataImages(data.images);
      } catch (err) {
        setError(err);
      }
    };
    getImages();
  }, []);

  const deleteImages = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/images-delete/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("successfully Deleted");
      });
  };

  return (
    <>
      <main>
        {/* Your content */}
        <div className="container">
          <div className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
            {dataImages.map((data, index) => (
              <ImageModal
                key={index}
                title={data.title}
                description={data.description}
                imageUrl={`http://127.0.0.1:8000/storage/${data.image}`}
                imageId={data.id}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Images;
