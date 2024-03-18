import React, { useEffect, useState, useContext } from "react";
import { countryContext } from "../Context/context.js";

function Card() {
  const { input } = useContext(countryContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCountry(country) {
      // Check if country is not empty or undefined
      if (country) {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const results = await response.json();
        setData(Array.isArray(results) ? results : []);
      } else {
        setData([]);
      }
    }
    getCountry(input);
  }, [input]);

  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="flag-wrapper">
                <img src={item.flags.png} alt="" />
              </div>
              <div>
                <p>{item.name.common}</p>
                {/* <p>{item.languages.eng}</p>
                <p>{item.currencies.GMD.name}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
