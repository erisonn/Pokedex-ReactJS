import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import SearchResults from "./pages/SearchResults";

const Router = () => {
    return ( 
        <Switch>
            <Route path='/pokemon/:id?' component={Pokemon}/>
            <Route path='/search/:term?'component={SearchResults}/>
            <Route path='/' component={Home}/>
        </Switch>
    );
}
 
export default Router;