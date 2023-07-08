import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const Images = () => {
  const [images, setImages] = useState([]);
  const [errors, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/images");
        const data = await response.json();

        setImages(data.images); // Assuming the response contains image data in an array format
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images");
      }
    };
    fetchImages();
  }, []);

  const deleteImages = (id) => {
    axios
      .delete("http://127.0.0.1/8000/api/images-delete/" + id)
      .then(function (response) {
        console.log(response.data);
        alert("successfully Deleted");
      });
  };

  // const handleModal = (id) => {
  //   setModal(true);
  //   setSelectedId(id);
  // };

  // modal
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState();
  const [titleShow, setTitleShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (img, title) => {
    setShow(true);
    setImageShow(img);
    setTitleShow(title);
  };
  return (
    <>
      <main>
        {/* Your content */}
        <div className="container">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {images.map((data, index) => (
              <div className="col" key={index}>
                <p>{data.image}</p>
                <img
                  src={data.image}
                  className="img img-item img-fluid"
                  alt={data.title}
                  onClick={handleShow.bind(this, data.image, data.title)}
                />

                {/* modal */}
                <Modal show={show} onHide={handleClose} size="lg" centered>
                  <Modal.Header closeButton>
                    <Modal.Title>{titleShow}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      src={imageShow}
                      className="img img-item img-fluid"
                      alt={data.title}
                    />
                  </Modal.Body>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Images;
