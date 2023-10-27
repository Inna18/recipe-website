import {useTheme} from "../../hooks/useTheme";
import "./ThemeSelector.css"
import brightness_icon from "../../assets/brightness_icon.svg"

const THEME_COLORS = ["#eac7c7", "#d5e3e8", "#e8a2a2", "#a0c3d2", "#eae0da"]

export default function ThemeSelector() {

  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className="theme-selector">
      <div className="theme-mode">
        <img src={brightness_icon}
             alt="brightness-mode-icon"
             onClick={() => toggleMode()}
             style={{ filter: mode === "light" ? "invert(0%)" : "invert(100%)"}}/>
      </div>
      <div className="theme-btns">
        { THEME_COLORS.map(color => (
          <div className="theme-btn"
               key={color}
               onClick={() => changeColor(color)}
               style={{background: color}} >
          </div>
        ))}
      </div>
    </div>
  )

}