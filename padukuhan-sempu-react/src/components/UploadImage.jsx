import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const UploadImage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/images",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response) {
      alert(response.message);
      setMessage(response.message);
      setTimeout(() => {
        navigate(`${location.pathname}../../images`);
      }, 200);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage();
  };

  return (
    <div className="w-2/3 flex flex-col bg-gray-300 rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="w-full justify-start font-semibold">
            Judul gambar
          </label>
          <input
            type="text"
            className="input w-full"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="w-full justify-start font-semibold"
          >
            Deskripsi Gambar
          </label>
          <textarea
            name="description"
            id="description"
            cols="10"
            rows="5"
            className="textarea text-wrap w-full resize-none relative"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="w-full justify-start font-semibold">
            Gambar
          </label>
          <input
            type="file"
            className="w-full bg-white rounded-md"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            type="submit"
            className="submit btn bg-green-500 text-white font-semibold hover:bg-green-600"
          >
            Tambahkan
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
