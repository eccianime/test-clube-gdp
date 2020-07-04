import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import LightBox from './LightBox';
import FavoriteRow from './FavoriteRow';

import * as actionCreators from '../actions/creators';

function TableFavorites({ 
	items, 
	isLightBoxVisible, showLightBox, 
	deleteFromFavorites,
	dateOrder, orderByDate,
	nameOrder, orderByName,
	typeOrder, orderByType,
}){
	const showItems = ()=>(
		items.length > 0 ?
			items.map( ( item )=>(
				<FavoriteRow key={`td-fav-images-${item.date}`} item={ item } />
			)):
			<tr><td colSpan={4}>Nos momentos não têm imágens nem videos adicionados. Pode adicioná-los desde <Link className='text-white' to='/galeria'>AQUI</Link></td></tr>
		)
	return(
		<Col sm={12}>
			{ isLightBoxVisible && <LightBox origin='favorites' /> }
			<Table responsive striped bordered hover variant='dark' className='table-favorites text-center'>
				<thead>
					<tr>
						<th onClick={ ()=>orderByDate( dateOrder ) }><span><p className='mt-1 mb-1'>Data</p>&nbsp;<i className='la la-fw la-sort la-2x'></i></span></th>
						<th onClick={ ()=>orderByName( nameOrder ) }><span><p className='mt-1 mb-1'>Titulo</p>&nbsp;<i className='la la-fw la-sort la-2x'></i></span></th>
						<th onClick={ ()=>orderByType( typeOrder ) }><span><p className='mt-1 mb-1'>Tipo</p>&nbsp;<i className='la la-fw la-sort la-2x'></i></span></th>
						<th><span><p className='mt-1 mb-1'>Ação</p>&nbsp;</span></th>
					</tr>
				</thead>
				<tbody>
					{ showItems() }
				</tbody>
			</Table>
		</Col>
)}

const stateToProps = ( state )=>{
	const { items, dateOrder, nameOrder, typeOrder } = state.favorites;
	const { isLightBoxVisible } = state.gallery;
	return {
		items, isLightBoxVisible, dateOrder, nameOrder, typeOrder
	}
}

const dispatchToProps = ( dispatch )=>{
	return{
		orderByDate: ( order )=>{
			dispatch( actionCreators.orderByDate( order ) )
		},
		orderByName: ( order )=>{
			dispatch( actionCreators.orderByName( order ) )
		},
		orderByType: ( order )=>{
			dispatch( actionCreators.orderByType( order ) )
		},
	}
}

export default connect( stateToProps, dispatchToProps )(TableFavorites);