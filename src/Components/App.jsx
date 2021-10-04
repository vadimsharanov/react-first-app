import react, { createContext } from "react"
import { useState } from "react"
import Field from "./Field"

const letters = ["L","b","g","w","m","u","Z"]

export const themeContext = createContext({color: "black"})


function App() {
    const [style, setStyle] = useState( {
        color: "black"
    })

    const changeTheme = (param) => {
        console.log("vvv");
        let theme
        // const themes = {
        //     1:"red",
        //     2:"blue",
        //     3:"yellow"
        // }
        // return themes[theme]
        

        if ( param ===1 ) {
            theme = {
                color:"red"
            }
            setStyle(theme)
        }
        if ( param ===2 ) {
            theme = {
                color:"blue"
            }
            setStyle(theme)
            
        }
        if ( param ===3 ) {
            theme = {
                color:"yellow"
            }
            setStyle(theme)
        }
    }
    console.log(style);
    return (<>
    <themeContext.Provider value={style}>
        <Field letters={letters} ></Field>
        <button onClick={() => changeTheme(1)} className="baton" >Theme 1 </button>
        <button onClick={() => changeTheme(2)} className="baton" >Theme 2 </button>
        <button onClick={() => changeTheme(3)} className="baton" >Theme 3 </button>
    </themeContext.Provider>
     
    </>)
}

export default App