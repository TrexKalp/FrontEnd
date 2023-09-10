// Import necessary dependencies
import { extendTheme } from "@chakra-ui/react";

// Define your custom color scheme
const customTheme = extendTheme({
  colors: {
    maroon: {
      50: "#f5e1e0",
      100: "#e4b5b4",
      200: "#d28886",
      300: "#c35c59",
      400: "#b1302c",
      500: "#9f0000", // Maroon main color
      600: "#8c0000",
      700: "#790000",
      800: "#660000",
      900: "#530000",
    },
  },
});

export default customTheme;
