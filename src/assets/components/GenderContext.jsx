import React, { createContext, useState } from "react";

export const GenderContext = createContext();

export const GenderProvider = ({ children }) => {
  const [gender, setGender] = useState("");

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  );
};
