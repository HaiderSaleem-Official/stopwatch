import React from "react";
import backgroundImage from "./stopwatch.jpg";
import Card from "./Card/Card";
function App() {
  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  };
  return (
    <div className="App" style={myStyle}>
      
      <Card />
    </div>
  );
}

export default App;
