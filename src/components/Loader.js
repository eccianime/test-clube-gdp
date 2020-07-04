import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = ()=>(
	<div className='spinner-loader'>
		<Spinner animation="grow" variant="info" />
	</div>
)

export default Loader;