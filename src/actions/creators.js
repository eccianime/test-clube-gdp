import * as actionTypes from './types';
import { APOD, API_KEY } from '../services/API';

export const getAPODImages =( month, year, type_value )=>{
	month = month < 10 ? `0${month}` : month;
	const lastDate = ( month )=>{
		const monthWith30Days = [
			'04','06','09','11'
		]
		const monthWith31Days = [
			'01','03','05','07','08','10','12'
		]
		if( monthWith30Days.some( ( month30 )=>month30 === month ) ){
			return "30";
		}else if( monthWith31Days.some( ( month31 )=>month31 === month ) ){
			return "31";
		}else{
			return "28";
		}
	}
	const interval = [
		{ start_date: "01", end_date: "06"},
		{ start_date: "07", end_date: "12"},
		{ start_date: "13", end_date: "18"},
		{ start_date: "19", end_date: "24"},
		{ start_date: "25", end_date: lastDate(month)},
	]
	const start_date = `${year}-${month}-${interval[type_value]['start_date']}`;
	const end_date = `${year}-${month}-${interval[type_value]['end_date']}`;
	async function getImages( start_date, end_date ) {
		const config = {
			params: {
				start_date,
				end_date,
				api_key: API_KEY
			}
		}
    	return await APOD.get( 'apod', config );
 	}
 	
	return (dispatch)=>{
		dispatch({ type: actionTypes.SHOW_LOADING_SCREEN })
		getImages( start_date, end_date )
			.then( response=>{
				dispatch({ type: actionTypes.SET_APOD_IMAGES, apodresults: response.data })
				dispatch({ type: actionTypes.HIDE_LOADING_SCREEN })
			})
			.catch( error=>{
				const errorMessage = error.response.data.msg;
				dispatch({ type: actionTypes.SHOW_TOAST, toastText: errorMessage, toastType: 'error' })
				setTimeout( ()=>{
					dispatch({ type: actionTypes.HIDE_TOAST })
				}, 5000 )
				dispatch({ type: actionTypes.HIDE_LOADING_SCREEN })
			})
	}
}

export const addToFavorites = ( info )=>{
	return (dispatch, getState  )=>{
		dispatch( { type: actionTypes.HIDE_LIGHT_BOX } )
		const favorites = getState().favorites.items;
		const newFavorites = favorites.concat(info);
		const isRepeated = favorites.some( ( image )=> image.date === info.date );
		if( isRepeated ){
			const toastText = 'A imagem ja foi adicionada anteriormente, escolha outra!';
			dispatch( { type: actionTypes.SHOW_TOAST, toastType: 'error', toastText } )
		}else{
			const toastText = 'Imagem adicionada com sucesso!';
			dispatch( { type: actionTypes.ADD_FAVORITE, items: newFavorites } )
			dispatch( { type: actionTypes.SHOW_TOAST, toastType: 'successo', toastText } )
		}
	}
}

export const deleteFromFavorites = ( date )=>{
	return (dispatch, getState  )=>{
		const favorites = getState().favorites.items;
		const newFavorites = favorites.filter( ( item )=> item.date !== date );
		const toastText = 'Imagem apagada com sucesso!';
		dispatch( { type: actionTypes.DELETE_FAVORITE, items: newFavorites } )
		dispatch( { type: actionTypes.SHOW_TOAST, toastType: 'successo', toastText } )
	}
}

export const orderByDate = ( actualOrder )=>{
	const finalOrder = actualOrder === 'ASC' ? 'DSC' : 'ASC' ;
	return (dispatch, getState  )=>{
		const favorites = getState().favorites.items;
		const ordered = favorites.slice().sort( (a,b)=>{
			const date_0 = new Date(a.date).getTime();
			const date_1 = new Date(b.date).getTime();
			return date_0-date_1;
		});
		const newFavorites = finalOrder === 'ASC' ? ordered : ordered.reverse();
		dispatch( { type: actionTypes.ORDER_FAVORITE_BY_DATE, items: newFavorites, dateOrder: finalOrder } )
	}
}

export const orderByName = ( actualOrder )=>{
	const finalOrder = actualOrder === 'ASC' ? 'DSC' : 'ASC' ;
	return (dispatch, getState  )=>{
		const favorites = getState().favorites.items;
		const ordered = favorites.slice().sort( (a,b)=>{
			const title_0 = a.title;
			const title_1 = b.title;
			return title_0.localeCompare(title_1);
		});
		const newFavorites = finalOrder === 'ASC' ? ordered : ordered.reverse();
		dispatch( { type: actionTypes.ORDER_FAVORITE_BY_NAME, items: newFavorites, nameOrder: finalOrder } )
	}
}

export const orderByType = ( actualOrder )=>{
	const finalOrder = actualOrder === 'ASC' ? 'DSC' : 'ASC' ;
	return (dispatch, getState  )=>{
		const favorites = getState().favorites.items;
		const ordered = favorites.slice().sort( (a,b)=>{
			const camorvid_0 = a.media_type;
			const camorvid_1 = b.media_type;
			return camorvid_0.localeCompare(camorvid_1);
		});
		const newFavorites = finalOrder === 'ASC' ? ordered : ordered.reverse();
		dispatch( { type: actionTypes.ORDER_FAVORITE_BY_TYPE, items: newFavorites, typeOrder: finalOrder } )
	}
}