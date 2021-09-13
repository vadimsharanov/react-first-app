import Mygtukas from "./Mygtukas.jsx"


const data = [["Spausk",1], ["Spaudinek",10], ["Klykink",100]]

function App(props) {
    return (
        <>
         {data.map( (bebras, i) => <Mygtukas key={i} tekstas={bebras[0]} amount={bebras[1]} ></Mygtukas>)}
        </>
)
}

export default App