import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import TodoRender from './TodoRender';
import BookOne from './BookOne.jsx';
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
    const trial = function() {
      console.log('hello');
    }
console.log(data)
 
    return (
        <Router>
          <Switch>
            <Route path={'/:bookId'}>
              <BookOne  data={data} buybook={() => trial()} ></BookOne>
            </Route>


            <Route path={'/'}>
                <div className="container">
                {data.map((oneData,i) =><TodoRender
                index={data.indexOf(oneData)}
                data={oneData}
                buybook={() => buyBook(oneData.id)}
                ></TodoRender> )}
                    </div>
              </Route>        
            </Switch>          
          </Router>
   
)
}

export default App