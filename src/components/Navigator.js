import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigator = ()=>(
	<Navbar bg="transparent" variant='dark' expand="lg">
		<Navbar.Toggle/>
		<Navbar.Brand href="/" className='nasa-text text-center'><i className='la la-2x la-globe'/><br/>NASA TEST APP</Navbar.Brand>
		<Navbar.Collapse className='text-center'>
			<Nav className="ml-auto" style={{display: 'inline-block'}}>
				<Link to='/'><Button variant='link' className='text-white pl-2 pr-2 '><i className='la la-2x la-home'/><br/>Inicio</Button></Link>
				<Link to='/galeria'><Button variant='link' className='text-white pl-2 pr-2 '><i className='la la-2x la-photo'/><br/>Galeria</Button></Link>
				<Link to='/favoritos'><Button variant='link' className='text-white pl-2 pr-2 '><i className='la la-2x la-star'/><br/>Favoritos</Button></Link>
				<a  rel='noopener noreferrer' target='_blank' href='https://eccianime.github.io' ><Button variant='link' className='text-white pl-2 pr-2 '><i className='la la-2x la-github'/><br/>Portfolio</Button></a>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Navigator;