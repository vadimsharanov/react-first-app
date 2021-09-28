import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoRender from './TodoRender';
    // https://in3.dev/knygos/
    // Gražiais su CSS padaryti prekių sąrašą. Pridėti mygtuką pirkti.

function App(props) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getUser()
        
    },[])
    async function getUser() {
        try {
          const response = await axios.get('https://in3.dev/knygos/');
            response.data = response.data.sort((a,b)=> a.id - b.id)
            setData(response.data)
            console.log(response.data);
            
            
        } catch (error) {
          console.error(error);
        }
      }

      const buyBook = function(e) {
            const rezerv = data.slice();
            let findData = rezerv.find(item => e === item.id)
            rezerv.splice((rezerv.indexOf(findData)),1)
            setData(rezerv)
      }
      const changeStatus = function(e) {
        const rezerv = data.slice();
        let findData = rezerv.find(item => e === item.id)
        findData.completed = !findData.completed
        setData(rezerv)
  }

 
    return (
        <>
        <div className="container" >
    {data.map((oneData,i) =><TodoRender
    key={i}
    index={data.indexOf(oneData)}
    data={oneData.title}
    id={oneData.id}
    changeStatus={()=> changeStatus(oneData.id)}
    completed={oneData.completed}
    user={oneData.userId}
    img={oneData.img}
    author={oneData.author}
    buybook={() => buyBook(oneData.id)}
    price={oneData.price}
    ></TodoRender> )}
        </div>
        </>
)
}

export default App