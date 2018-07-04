import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Blog from '../pages/Blog';
const Main = () =>{
    return(
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/Blog" component={Blog}/>
    </Switch>  
    )
    
}

export default Main;
