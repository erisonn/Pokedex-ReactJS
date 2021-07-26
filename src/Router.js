import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

const Router = () => {
    return ( 
        <Switch>
            <Route path='/pokemon/:order?' component={Pokemon} />
            <Route path='/' component={Home}/>
        </Switch>
    );
}
 
export default Router;