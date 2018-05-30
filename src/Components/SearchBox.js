import React from 'react';

const SearchBox=({ searchChange })=>{
return(
		<div>
			<input 
			type="search" 
			placeholder="search Robo friends"
			onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;
