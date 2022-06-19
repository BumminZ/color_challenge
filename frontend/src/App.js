import axios from "axios";
import { useState } from "react";
import "./App.css";
import Body from "./component/body";
import Header from "./component/header";

const App = () => {
  const [color, setColor] = useState("");
  const [hsl, setHsl] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:4000/colors", {
        params: {
          code: color.startsWith("#") ? color : `#${color}`,
        },
        headers: {
          "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        },
      })
      .then(
        (response) => {
          setHsl(response.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    // setHsl(fetchHSL(color));
  };

  return (
    <div className="App">
      <Header color={color} setColor={setColor} handleSubmit={handleSubmit} />
      <Body data={hsl} />
    </div>
  );
};

export default App;
