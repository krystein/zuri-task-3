import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "./img/alejandro-cartagena-qeibBI7w4fQ-unsplash.jpg";
import Img1 from "./img/daniel-lee-Ekh3_jSXZaM-unsplash.jpg";
import Img2 from "./img/feey-t-ht-qk2WKg-unsplash.jpg";
import Img3 from "./img/joshua-rawson-harris-66u1F4abOBQ-unsplash.jpg";
import Img4 from "./img/joshua-rawson-harris-S4ZkQykkeRs-unsplash.jpg";
import Img5 from "./img/kyle-mills-fg_MDbT5_d4-unsplash.jpg";

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

const staticImages = [Img, Img1, Img2, Img3, Img4, Img5];

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
              <p style={{color: "#000", fontWeight: 400}}>#dynamicImage{index}</p>
            </div>
            )
          ))}
          {staticImages.map((staticImg, index) => (
            <div key={index} className="col-sm-3 col-md-3 col-lg-3 p-2 card">
              <img src={staticImg} alt={`Static ${index}`} className="img-fluid" />
              <p style={{ color: "#000", fontWeight: 400 }}>#StaticImage{index}</p>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default ImageViewer;
