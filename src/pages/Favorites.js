import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Loader from '../components/Loader';
import Navigator from '../components/Navigator';
import TableFavorites from '../components/TableFavorites';
import SimpleMessage from '../components/SimpleMessage';

const Favorites =( { isLoaderVisible } )=>{
	return(
	<Fragment>
		{ isLoaderVisible && <Loader /> }
		<Navigator />
		<Container fluid bg='light'><Row>
			<SimpleMessage />
			<Col sm={12}><h2 className='text-center text-white m-5 supershadow'>Favoritos</h2></Col>
			<Col sm={12} className='mt-2 mb-2'>
					<Card className='p-3 bg-white-soft'>
						<Container fluid><Row>
							<Col sm={12}>
								<p className='text-justify'>Aquí terá acesso a uma coleção das imagens e 
								videos que clicou como favoritos da Galería. Para cada uma delas poderá descarregar,
								colocar um titulo, ordenar ou apagar a imagem e ver alguma informação adicional.
								</p>
							</Col>
							<TableFavorites />
						</Row></Container>
					</Card>
			</Col>
  		</Row></Container>
	</Fragment>
)}

const stateToProps = ( state )=>{
	return state.main;
}

export default connect( stateToProps, null )(Favorites);