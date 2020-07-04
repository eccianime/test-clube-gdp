import * as actionTypes from '../actions/types';
import { initialData } from '../store/initialData';

const mainReducer = (state = initialData.main, action) => {
	switch (action.type) {
		case actionTypes.SHOW_LOADING_SCREEN:
			return {	...state,
				isLoaderVisible: true
			}
		case actionTypes.HIDE_LOADING_SCREEN:
			return {	...state,
				isLoaderVisible: false
			}
		case actionTypes.HIDE_TOAST:
			return {	...state,
				isToastVisible: false,
				toastType: "",
				toastText: "",
			}
		case actionTypes.SHOW_TOAST:
			return {	...state,
				isToastVisible: true,
				toastType: action.toastType,
				toastText: action.toastText,
			}
		default: return {...state }
	}
};

export default mainReducer;