import { useContext } from "react"
import { themeContext } from "./App.jsx"

function Letter({letter}) {
    const th = useContext(themeContext)
    return (
    <>
        <span style={th} className="letter">{letter} </span>
    </>)
}

export default Letter