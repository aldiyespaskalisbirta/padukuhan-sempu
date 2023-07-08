import React, { useEffect, useState } from "react";
import Card from "./Card";

const Images = () => {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState("");
  useEffect(() => {
    const getImages = () => {
      fetch("http://127.0.0.1:8000/api/images")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          // console.log(response.images);
          setImages(response.images);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getImages();
  }, []);

  const deleteImages = (id) => {
    axios
      .delete("http://127.0.0.1/8000/api/images-delete/" + id)
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
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {images.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                imagePath={data.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Images;
