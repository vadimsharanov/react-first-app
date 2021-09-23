import React, { useState, useEffect } from 'react';
import axios from 'axios';


function User(props) {

    const [name,setName] = useState("")
    getUser()
    useEffect(() => {
    },[])

    async function getUser() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+props.id);
           setName(response.data.name)
            
            
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div className="user" >
            {name}
        </div>
    )
}

export default User;