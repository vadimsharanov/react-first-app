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
      console.log(data);

 
    return (
        <>
        <div className="container" >
    {data.map((oneData,i) =><TodoRender
    key={i}
    data={oneData.title}
    id={oneData.id}
    ></TodoRender> )}
        </div>
        </>
)
}

export default App