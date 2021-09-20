import React, { useState, useEffect } from 'react';
import CountDisplay from './CountDisplay.jsx';
// import Mygtukas2 from './Mygtukas2.jsx';





function MygtukasFunkcinis() {
    const [x, set3X] = useState(3);
    const [z, set7Z] = useState(7);
    // const x = 3;
    // const set3X = set3X
    const do3 = () => {
        const newX = x + 3;
        set3X(newX);
    }
    const do7 = () => {
        const newZ = z+7;
        set7Z(newZ)
    }
    return (
        <>
    <button className="baton" id="baton" onClick={do3} >
       {x}
    </button>       
    <button className="baton" id="baton" onClick={do7} >
       {z}
    </button>       
        </>
    )

}

export default MygtukasFunkcinis