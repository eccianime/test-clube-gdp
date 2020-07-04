import React from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigator = ()=>(
	<Navbar bg="transparent" variant='dark' expand="lg">
		<Navbar.Toggle className='text-white' />
		<Navbar.Brand href="/" className='nasa-text text-center'><i className='la la-fw la-globe la-2x'/><br/>NASA TEST APP</Navbar.Brand>
		<Navbar.Collapse className='text-center'>
			<Nav className="ml-auto" style={{display: 'inline-block'}}>
				<Link to='/'><Button variant='link' className='text-white' size='lg'><i className='la la-fw la-home la-2x'/><br/>Inicio</Button></Link>
				<Link to='/galeria'><Button variant='link' className='text-white' size='lg'><i className='la la-fw la-photo la-2x'/><br/>Galeria</Button></Link>
				<Link to='/favoritos'><Button variant='link' className='text-white' size='lg'><i className='la la-fw la-star la-2x'/><br/>Favoritos</Button></Link>
				<a  rel='noopener noreferrer' target='_blank' href='https://eccianime.github.io' ><Button variant='link' className='text-white' size='lg'><i className='la la-fw la-github la-2x'/><br/>Quem Sou</Button></a>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Navigator;