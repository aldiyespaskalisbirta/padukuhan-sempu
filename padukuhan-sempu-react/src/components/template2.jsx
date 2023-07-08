import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddImages = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
        navigate("gallery/images");
      }, 2000);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadImage();
  };

  return (
    <>
      <h1 className="text-center font-bold text-4xl mb-4">
        SILAHKAN UPLOAD GAMBAR
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 items-center justify-center">
            <div className="w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  name="image"
                  type="file"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
            <Button
              className="bg-[#577865] w-full mt-10 hover:bg-green-600"
              type="submit"
            >
              <p>Submit</p>
            </Button>
          </div>

          <div className="col-span-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                name="title"
                placeholder="masukan judul"
                required
                shadow
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row-span-4">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <Textarea
                id="description"
                name="description"
                placeholder="masukan deskripsi"
                required
                rows={13}
                className="resize-none scrollbar-hide"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddImages;
