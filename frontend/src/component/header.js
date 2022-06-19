import React from "react";
// header jsx component
const Header = ({ color, handleSubmit, setColor }) => {
  return (
    <>
      <h1>Color Challenge</h1>
      <form type="submit">
        <input
          type="text"
          maxLength={7}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
export default Header;
