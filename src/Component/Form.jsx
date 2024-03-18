import React, { useContext } from "react";
import { countryContext } from "../Context/context.js";

const Form = () => {
  const { input, setInput } = useContext(countryContext);
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="find a country"
        value={input}
        onChange={handleSubmit}
      />
    </form>
  );
};

export default Form;
