import {useTheme} from "../../hooks/useTheme";
import "./ThemeSelector.css"

const THEME_COLORS = ["#eac7c7", "#d5e3e8", "#e8a2a2", "#a0c3d2", "#eae0da"]

export default function ThemeSelector() {

  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
      { THEME_COLORS.map(color => (
        <div className="theme-btn"
             key={color}
             onClick={() => changeColor(color)}
             style={{background: color}} >
        </div>
      ))}
    </div>
  )

}