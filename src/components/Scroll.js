import React from 'react';

const  Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px soild black', height: '800px'}}>
			{props.children}
		</div>
	)
};

export default Scroll;