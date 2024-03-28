import React, { useEffect, useState } from "react";
import PieChart from "./components/PiChart";
import Histogram from "./components/Histogram";
import CSVReader from "./components/CSVReader";

function App() {
  // Testing bakend api
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/api", { mode: "cors" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(JSON.stringify(data)); // Display the data as a string for simplicity
  //     });
  // }, []);

  // Data for pie chart
  const dataPie = [
    { city: "first city", people: 1 },
    { city: "second city", people: 2 },
    { city: "third city", people: 5 },
  ];

  // Data for Histogram
  // const dataHistogram = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Your data array
  const dataHistogram = [
    57, 38, 52, 39, 27, 37, 39, 28, 57, 39, 62, 24, 44, 29, 47, 52, 30, 54, 30,
    36, 57, 37, 64, 41, 35, 45, 45, 56, 30, 47, 23, 32, 34, 53, 40, 37, 59, 39,
    39, 22, 63, 61, 55, 48, 53, 54, 21, 46, 55, 22, 39, 35, 21, 49, 31, 64, 59,
    51, 39, 23, 65, 50, 38, 22, 27, 39, 37, 48, 33, 44, 49, 39, 47, 52, 47, 34,
    58, 61, 31, 60, 24, 31, 40, 37, 53, 43, 56, 59, 32, 38, 62, 28, 31, 48, 55,
    34, 61, 39, 27, 25,
  ];
  return (
    <div>
      {/* <h1>Message from backend is given below: </h1>
      <p>{message}</p> */}
      <CSVReader />

      {/* <h1>Creating Pi chart with D3.js</h1>
      <PieChart data={dataPie} />
      <Histogram data={dataHistogram} width={500} height={400} /> */}
    </div>
  );
}

export default App;
