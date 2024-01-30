const { createContext, useState } = require("react");

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [myItens, setMyItens] = useState([]);

  return (
    <Context.Provider
      value={{
        myItens,
        setMyItens,
      }}
    >
      {children}
    </Context.Provider>
  );
}
