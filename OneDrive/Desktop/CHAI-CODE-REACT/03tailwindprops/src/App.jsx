import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {

  const obj1={
    name:"Anand",
    age:21,
  }
 
  let arr=[1,2,3];

  return (
    <>
      <h1 className="bg-green-400 mb-5">Tailwind Test</h1>
      <Card username="chai aur code" btnText="click me"/>
      <Card  username="Naina" btnText="visit me"/>
    </>
  );
}

export default App;
