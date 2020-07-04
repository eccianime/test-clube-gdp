import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

const LightBox =( { isLightBoxVisible, lightBoxInfo, hideLightBox, addToFavorites, isAddFavLoading, origin } )=>{
	const { title, explanation, hdurl, media_type, url, date } = lightBoxInfo;
	const finalDate = {
		base: new Date( `${date}T00:00:00-03:00` ),
		treat: function() {
			return this.base.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'} );
		},
	}
	return(
		<Modal size="lg" show={isLightBoxVisible} onHide={ hideLightBox }>
			<Modal.Body>
				{ 
					media_type === 'video' ?
					<iframe title={ title } width="100%" height="400" src={ url }></iframe> :
					<Image src={ hdurl } className='img-responsive' />
				}
				<p className='mb-1'>{ finalDate.treat() }</p>
				<h4 className="text-center mb-3">{ title }</h4>
				<p className="text-justify">{ explanation }</p>
				{
					origin === 'gallery' &&
					<Fragment>
						<Button variant='danger' className="mb-2 float-left" onClick={ hideLightBox }><i className='la la-times'></i> Fechar imagem</Button>
						<Button variant='info' disabled={ isAddFavLoading } className="mb-2 float-right" onClick={ ()=>addToFavorites( lightBoxInfo ) }><i className='la la-star'></i> Adicionar aos Favoritos</Button>	
					</Fragment>
				}
			</Modal.Body>
		</Modal>
	)
}

const stateToProps = ( state )=>{
	return state.gallery;
}

const dispatchToProps = ( dispatch )=>{
	return{
		hideLightBox: ( )=>{
			dispatch({ type: actionTypes.HIDE_LIGHT_BOX })
		},
		addToFavorites: ( lightBoxInfo )=>{
			dispatch( actionCreators.addToFavorites( lightBoxInfo ) );
		}
	}
}

export default connect( stateToProps, dispatchToProps )(LightBox);