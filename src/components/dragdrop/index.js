import React, { useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const DragDropImageLoader = () => {
  const [images, setImages] = useState([]);
  const [isDrag, setIsDrag] = useState(false);
  const fileInputRef = useRef(null);
  const server = 'https://integratio.000webhostapp.com/index.php';


  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        newImages.push({
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
          filedata: files[i]
        });
      }
    }
    setImages([...images, ...newImages]);
  };

  const deleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDrag(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsDrag(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
            filedata: files[i]
          },
        ]);
      }
    }
  };
const uploadTest= () =>{

  images.forEach(selectedFile => {
    const formData = new FormData();
    formData.append('imageFile', selectedFile.filedata);
    axios.post(server, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => {
      console.log(res);
      deleteImage();
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })
    .catch((error) => console.error('Error uploading image', error))
  });
}

  return (
    <div className="card p-2 rounded-small text-center">
      <div className="text-center">
        <p className="text-center">Drag and Drop Image loader</p>
      </div>
      <div
        className="drag-area d-flex justify-content-center align-items-center mt-2"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDrag ? (
          <span className="select m-2">Drop images here</span>
        ) : (
          <>
            Drag & Drop image here or{" "}
            <span
              className="select m-2"
              role="button"
              onClick={selectFiles}
            >
              Browse
            </span>
          </>
        )}
        <input
          name="imageFile"
          type="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>
      <div className="contain">
        {images.map((image, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="rounded-lg p-2 w-100 bg-primary"
        onClick={uploadTest}
      >
        Upload
      </button>
    </div>
  );
};

export default DragDropImageLoader;
