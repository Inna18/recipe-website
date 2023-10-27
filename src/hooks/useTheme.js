import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log("Error. Use this context inside ThemeProvider scope...")
  }

  return context;
}
