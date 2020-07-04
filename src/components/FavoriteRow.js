import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

const FavoriteRow = ({ item, showLightBox, deleteFromFavorites })=>(
	<tr>
		<td>{item.date}</td>
		<td>{item.title}</td>
		<td><i className={`la la-2x la${ item.media_type === 'video' ? '-video' : '' }-camera`}></i></td>
		<td>
			<Button onClick={ ()=>showLightBox( item ) } size='sm' className='ml-2 mr-2' variant='warning'><i className='la la-2x la-eye'></i></Button>
			<Button onClick={ ()=>deleteFromFavorites( item.date ) } size='sm' className='ml-2 mr-2' variant='danger'><i className='la la-2x la-times'></i></Button>
			{
				item.media_type === 'image' && 
				<a download href={item.url} className='ml-2 mr-2 btn btn-success btn-sm'><i className='la la-2x la-download'></i></a>	
			}
			
		</td>
	</tr>
)

const dispatchToProps = ( dispatch )=>{
	return{
		showLightBox: ( image )=>{
			dispatch({ type: actionTypes.SHOW_LIGHT_BOX, lightBoxInfo: image })
		},
		deleteFromFavorites: ( date )=>{
			dispatch( actionCreators.deleteFromFavorites( date ))
		},
	}
}

export default connect( null, dispatchToProps )(FavoriteRow);