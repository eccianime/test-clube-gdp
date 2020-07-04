import React from 'react';
import { connect } from 'react-redux';

import Toast from 'react-bootstrap/Toast';

import * as actionTypes from '../actions/types';

const SimpleMessage =( {isToastVisible, toastType, toastText, hideToast } )=>{
	return(
		 <Toast className={`toast-${toastType}`} show={ isToastVisible } delay={3000} autohide onClose={ hideToast }
		 	style={{color: '#fff', position: 'fixed', right: 20, top: 20, zIndex: 10000}} >
			<Toast.Body>
				<h4><b>{ toastType.toUpperCase() }</b></h4>
				<h5>{ toastText }</h5>
			</Toast.Body>
		</Toast>
	)
}

const stateToProps = ( state )=>{
	return state.main;
}

const dispatchToProps = ( dispatch )=>{
	return{
		hideToast: ()=>{
			dispatch({ type: actionTypes.HIDE_TOAST })
		},
	}
}

export default connect( stateToProps, dispatchToProps )(SimpleMessage);