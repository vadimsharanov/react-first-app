import { useContext } from "react"
import { themeContext, themeSelect } from "./App.jsx"


function Letter({letter}) {
    const th = useContext(themeContext)
    const ts = useContext(themeSelect)
    return (
    <>
        <span style={th} className="letter">{letter} </span>
    </>)
}

export default Letter