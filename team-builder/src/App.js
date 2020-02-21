import React from "react";
import Form from "./Components/Form";
import "./App.css";

let testData = ['john', 'jack', 'james', 'jaryd', 'jyler'];

function App() {


  return (
    <div className="App">
      <Form testData={testData}/>
    </div>
  );
}

export default App;
