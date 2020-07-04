import * as actionTypes from '../actions/types';
import { initialData } from '../store/initialData';

const favoritesReducer = (state = initialData.favorites, action) => {
	switch (action.type) {
		case actionTypes.ADD_FAVORITE:
			return {	...state,
				items: action.items
			}
		case actionTypes.DELETE_FAVORITE:
			return {	...state,
				items: action.items
			}
		case actionTypes.ORDER_FAVORITE_BY_DATE:
			return {	...state,
				items: action.items,
				dateOrder: action.dateOrder,
				nameOrder: 'DSC',
				typeOrder: 'DSC',
			}
		case actionTypes.ORDER_FAVORITE_BY_NAME:
			return {	...state,
				items: action.items,
				dateOrder: 'DSC',
				nameOrder: action.nameOrder,
				typeOrder: 'DSC',
			}
		case actionTypes.ORDER_FAVORITE_BY_TYPE:
			return {	...state,
				items: action.items,
				dateOrder: 'DSC',
				nameOrder: 'DSC',
				typeOrder: action.typeOrder,
			}
		default: return {...state }
	}
};

export default favoritesReducer;