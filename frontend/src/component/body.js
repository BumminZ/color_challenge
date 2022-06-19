import React from "react";

const Body = ({ data }) => {
  const lenth = Object.keys(data).length;
  return (
    <>
      {lenth > 0 ? (
        <>
          <h1>RGB</h1>
          <h3>R: {data.rgb.r}</h3>
          <h3>G: {data.rgb.g}</h3>
          <h3>B: {data.rgb.b}</h3>
      
          <h1>HSL</h1>
          <h3>H: {data.hsl.h}</h3>
          <h3>S: {data.hsl.s}</h3>
          <h3>L: {data.hsl.l}</h3>
        </>
      ) : null}
    </>
  );
};

export default Body;
