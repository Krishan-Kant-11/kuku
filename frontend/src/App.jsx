import React, { useEffect, useState } from "react";
import PieChart from "./components/PiChart";

function App() {
  // Testing bakend api
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(JSON.stringify(data)); // Display the data as a string for simplicity
      });
  }, []);

  // Data for pie chart
  const data = [
    { city: "first city", people: 1 },
    { city: "second city", people: 2 },
    { city: "third city", people: 5 },
  ];

  return (
    <div>
      {/* <h1>Message from backend is given below: </h1>
      <p>{message}</p> */}

      <h1>Creating Pi chart with D3.js</h1>
      <PieChart data={data} />
    </div>
  );
}

export default App;
