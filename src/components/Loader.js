import React from 'react';
import Image from 'react-bootstrap/Image';

import world from '../assets/images/rotating-earth.gif';

const Loader = ()=>(
	<div className='spinner-loader'>
		<Image src={world} style={{height: 300, width: 300}} />
	</div>
)

export default Loader;