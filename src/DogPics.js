import React, { useState, useEffect } from "react";


// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);
  console.log(images)
  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setImages(data.message);
      });
  },[]);

  console.log(images);
  const display = images.map((image) => <img src={image} key={image} />)

  return (
    <div>
      {display}
    </div>
  );
}

export default DogPics;
