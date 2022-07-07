import React from 'react';

const Searchbox =({searchChange}) =>{

	return(
		<div className='pa2'>
		<input 
		className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5'
		type='search' 
		placeholder='search robots' 
		onChange={searchChange}
		/>
		</div>
		);
}

export default Searchbox;