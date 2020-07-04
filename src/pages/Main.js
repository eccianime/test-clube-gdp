import React, { Fragment } from 'react';
import Navigator from '../components/Navigator';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import ReactReduxNASA from '../assets/images/react-redux-nasa.png';

const Main =()=>(
	<Fragment>
		<Navigator />
		<Container fluid><Row>
			<Col sm={12}><h1 className='text-center text-white m-5'>Bem-vindo à minha prova...</h1></Col>
			<Col sm={12} className='mt-2 mb-2'>
					<Card className='p-3 text-white ml-5 mr-5 bg-dark-soft'>
						<Container fluid><Row>
							<Col sm={12} md={8}>
								<h5 className='text-justify text-intro'>Primeiro me apresento, meu nome é Jean Paul 
								Rojas e nesta prova, eu vou demonstrar o que eu aprendi no React e Redux, criando 
								uma pequena galeria de imagens usando a API da NASA - APOD. Devido a que é necessário 
								criar um CRUD sem banco de dados, vou utilizar Redux para simular essa tarefa.<br/>
								Então, vamos lá! Pode clicar no botão acima na direita para ver a galeria disponível,
								a secção de favoritos onde vai poder ver as imágens que agregou e ao fim, um link ao
								meu site onde poderá ver outros sites que eu tenho feito.</h5>
							</Col>
							<Col sm={12} md={4}>
								<Image src={ReactReduxNASA} className='img-responsive' />
							</Col>
						</Row></Container>
					</Card>
			</Col>
			
  		</Row></Container>
	</Fragment>
)

export default Main;