import Letter from "./Letter"


function Field({letters}) {
    return (
    <>
        <div className="field" >
        {letters.map((item,i) => <Letter  key={i} letter={item} ></Letter>)}
         </div>
            
    </>)
}

export default Field