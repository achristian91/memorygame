import React from 'react';
import './Cards.css';

function handleClick(props) {
	props.reArrangeCards();
	props.characterClicked(props.id);
}


function CardClick(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default CardClick