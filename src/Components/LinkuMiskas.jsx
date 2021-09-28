import { Link,Switch, Route } from "react-router-dom"

function LinkuMiskas() {
    return (
        <>
            <div>
                <nav>
                    <Link to={"home"}><h4>AEAEAEAE</h4></Link>
                    <Link to={"not-so-home"}><h4>ae11111111</h4></Link>
                    <Link to={"maybe-home"}><h4>ae333333</h4></Link>
                </nav>
                <Switch>
                    <Route path={'/home'}>
                        <h1>Home</h1>
                    </Route>
                    <Route path={'/not-so-home'}>
                        <h1>not so home</h1>
                    </Route>
                    <Route path={'/maybe-home'}>
                        <h1>maybe home</h1>
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default LinkuMiskas