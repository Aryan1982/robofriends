import React from 'react';
import Info from "./Info.jsx"
import Info3 from "./Info3"
import Info2 from "./info2.jsx"
import Info4 from "./Info4"
import { robots } from '../containers/robots';
import BlogDetails from "./params"


import { BrowserRouter as Router, Switch, 
    Route} from "react-router-dom";


const Information=()=>
{

return(
<div>
    
        <Router>
                <Switch>
                    {/*<Route path={`/Info`}>
                    <Info/>
                </Route> 
                <Route path={`/Info3`}>
                    <Info3/>
                </Route>  
                <Route path={`/Info2`}>
                    <Info2/>
                </Route> 
                <Route path={`/Info4`}>
                    <Info4/>
                </Route> */}
                <Route path={`/Blogs/:id`}>
                    <BlogDetails/>
                </Route>  
            </Switch>

        </Router>
       
  </div>
  );
}
export default Information;
