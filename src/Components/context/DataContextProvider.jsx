import React, { useState } from "react";
import DataContext from "./DataContext";
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  return (
    <DataContext.Provider
      value={{ data, setData}}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
