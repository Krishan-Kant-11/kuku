import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api", { mode: 'cors' })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(JSON.stringify(data)); // Display the data as a string for simplicity
      })
  }, []);

  return (
    <div>
      <h1>Message from backend is given below: </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
