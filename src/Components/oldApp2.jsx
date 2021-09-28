import Kvadratas from "./Kvadratas.jsx"

const data = ["Rudasis", "Juodasis", "Alkogolikas"]

function App(props) {
    return (
        <>
         {data.map( (bebras, i) => <Kvadratas key={i} bebras={`${bebras}`} ></Kvadratas>)}
        </>
)
}

export default App