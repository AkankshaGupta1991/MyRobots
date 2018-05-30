import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';


const Card =(props)=>{
	return(
			<div className='bg-light-green ba br2 ma3 pa3 dib'>
				<img src={`https://robohash.org/${props.id}?200x200`} alt="photo"/>
				<div>
					<p>{props.name}</p>
					<p>{props.email}</p>
				</div>
			</div>
		);
}

export default Card;