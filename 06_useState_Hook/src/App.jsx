import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("blue");
  const [value, setValue] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          height: "40vh",
          width: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20vh",
          color: "white",
          backgroundColor: color,
        }}>
        <h1 style={{fontSize : "200px"}}>{value}</h1>
      </div>

      <div style={{display:"flex",gap:"12px"}}>
        <button onClick={() => {setValue(value + 1)}}>Increase</button>
        <button onClick={() => {setValue(value - 1)}}>Dicrease</button>
        <button onClick={() => {setValue(0)}}>Reset</button>
        <button onClick={() => {
            color === "green" ? setColor("blue") : setColor("green");
          }}>
          Change Color
        </button>
      </div>
    </div>
  );
};

export default App;