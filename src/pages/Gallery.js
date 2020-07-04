import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Loader from '../components/Loader';
import Navigator from '../components/Navigator';
import APOD from '../components/APOD';
import SimpleMessage from '../components/SimpleMessage';

const Galeria =( { isLoaderVisible } )=>{
	return(
	<Fragment>
		{ isLoaderVisible && <Loader /> }
		<Navigator />
		<Container fluid bg='light'><Row>
			<SimpleMessage />
			<Col sm={12}><h1 className='text-center text-white m-5'>Galeria APOD</h1></Col>
			<Col sm={12} className='mt-2 mb-2'>
					<Card className='p-3 ml-5 mr-5 bg-white-soft'>
						<Container fluid><Row>
							<Col sm={12}>
								<h4 className='text-justify text-intro'>Aquí poderá ter acesso à&nbsp; 
								<b>APOD (Astronomy Picture of the Day)</b> ou <b>Imagem Astronômica do Dia</b>, 
								que é uma API que mostra por cada día uma imagem diferente do universo com uma 
								curta explicação escrita por um astrônomo profissional. Para reducir os tempos
								de carga, já que as imagens são pesadas, decidiu-se reducir o tamanho da petição
								ao servidor para um máximo de 6 imagens. Então, pode escolher o mês, o ano e o intervalo
								de días que deseja ver.
								</h4>
							</Col>
						</Row></Container>
						<APOD />
					</Card>
			</Col>
  		</Row></Container>
	</Fragment>
)}

const stateToProps = ( state )=>{
	return state.main;
}

export default connect( stateToProps, null )(Galeria);