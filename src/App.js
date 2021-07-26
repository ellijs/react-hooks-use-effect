import React, { useState, useEffect } from "react";
import DogPics from "./DogPics"

function App() {
  const [ count, setcount ] = useState(0);
  const [ text, setText ] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={()=> setcount((count)=> count + 1)}>
       I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <DogPics />
    </div>
  )
}

export default App;
