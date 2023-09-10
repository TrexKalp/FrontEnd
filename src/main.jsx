import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme/chakra-theme";

import { ChakraProvider } from "@chakra-ui/react";
import { TokenProvider } from "./components/Token";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TokenProvider>
        <App />
      </TokenProvider>
    </ChakraProvider>
  </React.StrictMode>
);
