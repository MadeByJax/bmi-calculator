import { useState } from "react";
import "./app.css";
import Header from "./components/Header";
import YourResult from "./components/YourResult";
import Information from "./components/Information";
import Limitations from "./components/Limitations";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <YourResult />
      <Information />
      <Limitations />
    </>
  );
}

export default App;
