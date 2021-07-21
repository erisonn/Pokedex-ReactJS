import { Switch, Route } from "react-router";
import Home from "./pages/Home";

const Router = () => {
    return ( 
        <Switch>
            <Route path='/' component={Home}/>
        </Switch>
    );
}
 
export default Router;