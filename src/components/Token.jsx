import React from "react";

const TokenContext = React.createContext();

export const TokenProvider = ({ children }) => {
  const [tokens, setTokens] = React.useState(
    Number(localStorage.getItem("points")) || 0
  );

  React.useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "points") {
        setTokens(Number(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const updateTokens = (newValue) => {
    setTokens(newValue);
    localStorage.setItem("points", newValue);
  };

  return (
    <TokenContext.Provider value={{ tokens, updateTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = () => React.useContext(TokenContext);
