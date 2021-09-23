import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoRender from './TodoRender';



function App(props) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getUser()
        
    },[])
    async function getUser() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            setData(response.data)
            
        } catch (error) {
          console.error(error);
        }
      }
      const changeStatus = function(e) {
            const rezerv = data.slice();
            console.log(rezerv);
            let findData = rezerv.find(item => e === item.id)
            findData.completed = !findData.completed
            setData(rezerv)
            // figure.team = !figure.team
            // add(rezerv)
      }

 
    return (
        <>
        <div className="container" >
    {data.map((oneData,i) =><TodoRender
    key={i}
    data={oneData.title}
    id={oneData.id}
    changeStatus={()=> changeStatus(oneData.id)}
    completed={oneData.completed}
    user={oneData.userId}
    ></TodoRender> )}
        </div>
        </>
)
}

export default App