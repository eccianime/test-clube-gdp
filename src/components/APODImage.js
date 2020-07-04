import React from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import * as actionTypes from '../actions/types';

const APODImage =( {image, index, showLightBox } )=>{
	const { date, title, media_type } = image;
	let { hdurl } = image;
	const finalDate = {
		base: new Date( `${date}T00:00:00-03:00` ),
		treat: function() {
			return this.base.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'} );
		},
	}
	if( media_type === 'video' ){
		hdurl = image.url.replace( "https://www.youtube.com/embed/" , "").replace( "?rel=0" , "");
		hdurl = `http://img.youtube.com/vi/${hdurl}/hqdefault.jpg`;
	}
	return(
		<Col key={`apod-image-${date}`} sm={6} md={4} className='mt-4 mb-4' onClick={ ()=>showLightBox( image ) } >
			<div className={`fujiphoto transform-${ index % 2 ? 'right' : 'left'}`}>
				<Image src={hdurl} className='img-responsive' />
				<div className='overlay-responsive'>
					<p className='text-white inner-fuji'><i className='la la-search la-4x'></i></p>
				</div>
				<div className='text-center mt-3'>
					<h6><b>{title}</b><br/>Data: { finalDate.treat() }</h6>
				</div>	
			</div>
		</Col>
	)
}

const dispatchToProps = ( dispatch )=>{
	return{
		showLightBox: ( image )=>{
			dispatch({ type: actionTypes.SHOW_LIGHT_BOX, lightBoxInfo: image })
		},
	}
}


export default connect( null, dispatchToProps )(APODImage);