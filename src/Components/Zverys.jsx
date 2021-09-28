import {zverys as list } from '../Data/zverys.js'
import { useState} from 'react'
import VienasZverysLink from './VienasZverysLink.jsx'
import { Route, Switch } from 'react-router'
import VienasZverys from './VienasZverys.jsx'




function Zverys() {

    const [zverys, setZverys] = useState(list)

    return (
        <div className="zverys" >
            <h1>Welcome pas zverys! </h1>
            <Switch>
                <Route path={'/:id'} >
                <VienasZverys></VienasZverys>
                </Route>
                <Route path={'/'}>
                    <ul>
                    {zverys.map(vienasZverys=> <VienasZverysLink key={vienasZverys.id}   data={vienasZverys} ></VienasZverysLink>)}
                    </ul>
                </Route>

            </Switch>
        </div>
    )
}


export default Zverys