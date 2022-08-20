import React from 'react';
import BlogDetails from "./params"


import { BrowserRouter as Router, Switch, 
    Route} from "react-router-dom";


const Information=()=>
{

return(
<div>
    
        <Router>
                <Switch>
                    <Route path={`/Blogs/:id`}>
                        <BlogDetails/>
                    </Route>  
            </Switch>

        </Router>
       
  </div>
  );
}
export default Information;
