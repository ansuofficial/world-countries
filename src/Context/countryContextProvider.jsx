import React, { useState } from "react";
import { countryContext } from "./context.js";

const CountryContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  return (
    <countryContext.Provider value={{ input, setInput }}>
      {children}
    </countryContext.Provider>
  );
};

export default CountryContextProvider;
