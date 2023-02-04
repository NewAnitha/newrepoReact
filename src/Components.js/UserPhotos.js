import React, { useEffect, useState } from "react";
import { SubPhoto } from "./SubPhoto";
import { Loader } from "./Loader";
export const UserPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading,setLoading] =useState(true)
  const getPhotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(await response.json());
      setLoading(false)

    } catch (error) {
      console.log("the Error is " + error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
return (
    loading?<Loader/>:<SubPhoto photos={photos}/>)
    

 
};
