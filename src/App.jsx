import React from "react";
import CountryContextProvider from "./Context/countryContextProvider";
import Card from "./Component/Card";
import Form from "./Component/Form";

function App() {
  return (
    <CountryContextProvider>
      <h1>World Contries</h1>
      <Form />
      <Card />
    </CountryContextProvider>
  );
}

export default App;
