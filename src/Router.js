import { Switch, Route } from "react-router";
import Main from "./pages/Main";
import Pokemon from "./pages/Pokemon";

const Router = () => {
    return ( 
        <Switch>
            <Route path='/pokemon/:id?' component={Pokemon}/>
            <Route path='/search/:searchQuery?'component={Main}/>
            <Route path='/' component={Main}/>
        </Switch>
    );
}
 
export default Router;