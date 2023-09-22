import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageViewer = ({reloadGallery}) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search,setSearch] = useState('');

  useEffect(() => {
    const serverUrl = 'https://integratio.000webhostapp.com';

    axios.get(`${serverUrl}/get_images.php`)
    .then((response) => {
      setImageUrls(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      return ("Error fetching image URLs:", error);
    });
}, [reloadGallery]);

const handleChange=e=>{
  setSearch(e.target.value);
}
const imageUrlsSearch = _.filter(imageUrls, (imageUrl) => {
  return imageUrl.url.toLowerCase().includes(search.toLowerCase());
});

  return (
    <div>
      <h2>Uploaded Images</h2>
      {loading ? (
        <p>loading.....</p>
      ) : (
        <div className="container">
          <form className="p-3">
          <div className="input-group">
              <input
                style={{
                  background: "transparent",
                  transistion: "none",
                  color: "#000",
                }}
                type="text"
                placeholder="search image"
                className="form-control-lg"
                value={search}
                onChange={handleChange}
              />
            </div>
          </form>
          <div className="row" >
          {loading ? (
            <p>Loading...</p>
          ) : (
            imageUrlsSearch.map((imageUrl, index) => (
            <div  key={index} className="col-sm-3 col-md-3 col-lg-3 p-2 card">
              <img key={index} src={imageUrl.url} alt={`${index}`} className="img-fluid"/>
              <p style={{color: "#000"}}>##{imageUrl}</p>
            </div>)
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
