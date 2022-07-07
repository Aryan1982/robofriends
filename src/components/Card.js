import React from 'react';
// import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, 
     } from "react-router-dom";





const Card =({ name, email, id, url })=>
{

	return(
		<Router>
			<Switch>
				
				 <a href={`/Blogs/${id}`}>
					<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5' >
					<img alt='robots' src= {`https://robohash.org/${id}?size=200x200`} />
 						<div>
	 					<h2>{name}</h2>
   						</div>
  					</div>
   				</a>
   			
   			

			</Switch>

		</Router>
		
	
		


		);

}

export default Card;
