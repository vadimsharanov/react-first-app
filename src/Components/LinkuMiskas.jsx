import { Link,Switch, Route } from "react-router-dom";
import TheWall from "./TheWall";



function LinkuMiskas() {
    return (
        <>
            <div>
                <nav>
                    <Link to={"home"}><h4>Home!</h4></Link>
                    <Link to={"the-street"}><h4>The Street</h4></Link>
                    <Link to={"the-wall"}><h4>The Wall </h4></Link>
                    <div>
                    <Link to={"the-wall1"}><h4>The Wall 1</h4></Link>
                    <Link to={"the-wall2"}><h4>The Wall 2</h4></Link>
                    <Link to={"the-wall3"}><h4>The Wall 3</h4></Link>
                    <Link to={"the-wall4"}><h4>The Wall 4</h4></Link>
                    <Link to={"the-wall5"}><h4>The Wall 5</h4></Link>
                    </div>
                </nav>
                <Switch>
                    <Route path={'/home'}>
                        <h1>Home</h1>
                    </Route>
                    <Route path={'/the-street'}>
                        <h1>the-street</h1>
                    </Route>
                    <Route path={'/the-wall'}>
                        <h1>the wall</h1>
                    </Route>

                    <Route path={'/:theWall'} children={<TheWall></TheWall>}>
                    
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default LinkuMiskas