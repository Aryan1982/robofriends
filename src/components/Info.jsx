import React from 'react';
import { robots } from "../containers/robots"


const Info=()=>
{

  return(
    <div>
    <div className='bg-light-blue dib br3 pa6 ma4 bw3 shadow5' >
    <img alt='robot' src= {`https://robohash.org/1?size=200x200`} />
    <h2>{robots[0].name}</h2>
    
   
    <h4>Preety good working robot, Likes to stay updated</h4>
    <h3>Specifications</h3>
    <h4>Battery Life: 16hrs</h4>
    <h4>Battery Charging Time: 8hrs</h4>
    <h4>Speed: Depends</h4>
    <h4>Memory: Unlimited(just need to be revised everyday)</h4>
   <a href="https://www.instagram.com/aryan_thakor2411/">
    <div className='bg-blue dib1 br2 pa3 ma2 bw3 shadow5' >
    
     <h3>Check out the human version of this robot</h3>

    </div>
    </a>
    </div>
    </div>
    );
}
export default Info;

