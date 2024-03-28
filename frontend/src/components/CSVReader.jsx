import React, { useState } from "react";
import axios from "axios";

const CSVReader = () => {
  const [csvData, setCSVData] = useState([]);
  var [message, setMessage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.split("\n").map((row) => row.split(","));
      setCSVData(rows);
    };

    reader.readAsText(file);
  };

  const uploadCSV = () => {
    axios
      .post("http://127.0.0.1:5000/api/upload_csv", { data: csvData })
      .then((response) => {
        console.log(response.data);
        // Handle response from the backend if needed
        setMessage('done with upload')
      })
      .catch((error) => {
        console.error("Error uploading CSV:", error);
        // Handle error if needed
        console.log(error);
        setMessage('error');
      });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={uploadCSV}>Upload CSV</button>
      <div> {message} </div>
    </div>
  );
};

export default CSVReader;
