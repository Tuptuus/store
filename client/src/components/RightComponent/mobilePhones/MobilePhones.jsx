import React, { useState, useEffect } from "react";
import axios from "axios";

function MobilePhones() {
  const [listOfPhones, setListOfPhones] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3001/getMobile");
      setListOfPhones(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      {listOfPhones.map((phone) => (
        <div>
          <h2>{phone.mark}</h2>
          <h2>{phone.model}</h2>
          <h2>{phone.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default MobilePhones;
