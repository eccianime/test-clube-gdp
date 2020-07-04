import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import APODImage from './APODImage';
import LightBox from './LightBox';

import * as actionTypes from '../actions/types';
import * as actionCreators from '../actions/creators';

function APOD({
	apodmonth, apodyear, 
	apodtype_value, apodresults, 
	getAPODImages, 
	changeMonth, changeYear, changeType,
	isLightBoxVisible
	 } ){
	const showMonths = ()=>{
		const months = [
			{ value: 1, text: 'Janeiro' },
			{ value: 2, text: 'Fevereiro' },
			{ value: 3, text: 'Março' },
			{ value: 4, text: 'Abril' },
			{ value: 5, text: 'Maio' },
			{ value: 6, text: 'Junho' },
			{ value: 7, text: 'Julho' },
			{ value: 8, text: 'Agosto' },
			{ value: 9, text: 'Setembro' }, 
			{ value: 10, text: 'Outubro' },
			{ value: 11, text: 'Novembro' },
			{ value: 12, text: 'Dezembro' },
		]
		return months.map( ( month )=>(
			<option key={`month-${month.value}`} value={month.value}>{month.text}</option>
		))
	}
	const showYears = ()=>{
		let years = [];
		for( let year = 1996; year < 2021 ; year++ ){
			years.push( year )
		}
		return years.map( (year)=>(
			<option key={`year-${year}`} value={year}>{year}</option>	
		))
	}
	const showAPODImages = ()=>(
		apodresults.length > 0 && (
			apodresults.map( ( image, index )=>(
				<APODImage key={`apod-image-${image.date}`} image={image} index={index} />
			))
		)
	)
	return(
		<Fragment>
		{ isLightBoxVisible && <LightBox origin='gallery' /> }
		<Container><Row className="fujicontainer">
			<Col sm={12} className='mb-5'>
				<Form><Row>
					<Col sm={12} md={3} className='mt-2'>
						<Form.Label>Escolha um mês</Form.Label>
						<Form.Control size='lg' as="select" value={ apodmonth } onChange={ e => changeMonth( e.target.value ) }>
							{ showMonths() } 
						</Form.Control>
					</Col>
					<Col sm={12} md={3} className='mt-2'>
						<Form.Label>Escolha um ano</Form.Label>
						<Form.Control size='lg' as="select" value={ apodyear} onChange={ e => changeYear( e.target.value ) }>
							{ showYears() } 
						</Form.Control>
					</Col>
					<Col sm={12} md={3} className='mt-2'>
						<Form.Label>Quais dias?</Form.Label>
						<Form.Control size='lg' as="select" value={ apodtype_value } onChange={ e => changeType( e.target.value ) }>
							<option value={0}>Do 01 ao 06</option>
							<option value={1}>Do 07 ao 12</option>
							<option value={2}>Do 13 ao 18</option>
							<option value={3}>Do 19 ao 24</option>
							<option value={4}>Do 25 ao 31</option>
						</Form.Control>
					</Col>
					<Col sm={12} md={3} className="mt-3" style={{ display: 'flex', alignItems: 'center'}}>
						<Button variant='success' size="lg" block onClick={ ()=>getAPODImages( apodmonth, apodyear, apodtype_value ) }>Pesquisar</Button>
					</Col>
					{ showAPODImages() }
				</Row></Form>
			</Col>
		</Row></Container>
		</Fragment>
	)
}

const stateToProps = ( state )=>{
	return state.gallery;
}

const dispatchToProps = ( dispatch )=>{
	return{
		changeMonth: ( apodmonth )=>{
			dispatch({ type: actionTypes.CHANGE_MONTH, apodmonth })
		},
		changeYear: ( apodyear )=>{
			dispatch({ type: actionTypes.CHANGE_YEAR, apodyear })
		},
		changeType: ( apodtype_value )=>{
			dispatch({ type: actionTypes.CHANGE_TYPE, apodtype_value })
		},
		getAPODImages: ( apodmonth, apodyear, apodtype_value )=>{
			dispatch( actionCreators.getAPODImages( apodmonth, apodyear, apodtype_value ) )
		}
	}
}

export default connect( stateToProps, dispatchToProps )(APOD);