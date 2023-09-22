import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DragDropImageloader from "./dragdrop";
import Countdown from "./countdown";
import ImageDetail from "./ImageDetail";

const ImageGallery = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const fetchAccessToken = async () => {
        try {
          const token = await getAccessTokenSilently();
          setAccessToken(token);
        } catch (error) {
          console.error("Error fetching access token:", error);
        }
      };
      fetchAccessToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="container justify-content-center align-items-center h-100">
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <DragDropImageloader accessToken={accessToken} />
          <ImageDetail />
        </div>
      ) : (
        <div>
        <h2>Please log in to access the image gallery.</h2>
        <Countdown/>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

