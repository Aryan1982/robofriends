import React from "react"
import { useParams } from "react-router-dom";
import Card from "./Card";
import { robots } from "../containers/robots"

const BlogDetails =({name,url,email}) =>{
	const { id } = useParams();
	const {}= Card('https://aryan1982.github.io/robofriends/Blogs/'+ id);
	var Id=id-1;
	return(
				<div>
				    <div className='bg-light-blue dib br3 pa6 ma4 bw3 shadow5' >
					    <img alt='robot' src= {`https://robohash.org/${id}?size=200x200`} />
				    <h2>{robots[Id].name}</h2>
				    <h4>{robots[Id].hobby}</h4>
				    <h3>Specifications</h3>
				    <h4><pre>{robots[Id].specification}</pre></h4>
					<a href={robots[Id].url}>
				    <div className='bg-blue dib1 br2 pa3 ma2 bw3 shadow5' >
				    
				     <h3>Check out the human version of this robot</h3>

				    </div>
				    </a>
				    </div>
		    </div>
		
		);
}

export default BlogDetails;
