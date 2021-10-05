import { useState } from "react";
import { useRef } from "react"

function App() {
    const counter = useRef(0);
    const [turboCounter,setTurboCounter] = useState(0)
    const clicker = () => {
        counter.current++
        console.log("counter: ", counter.current);
    } 

    const turboClicker = () => {
        setTurboCounter(turboCounter+1)
    } 

    return (
        <>
        <div> {counter.current} </div>
        <button onClick={clicker} className="baton">DO DO DO DO</button>
        <div> {turboCounter} </div>
        <button onClick={turboClicker} className="baton">TOTO TOTO TOTO TOTO</button>
        <div className="crazy" ></div>
        </>
    )
}

export default App