import * as actionTypes from '../actions/types';
import { initialData } from '../store/initialData';

const galleryReducer = (state = initialData.gallery, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_TAB:
			return {	...state,		
						activeTab: action.tab
			}
		case actionTypes.CHANGE_MONTH:
			return {	...state,		
						apodmonth: action.apodmonth
			}
		case actionTypes.CHANGE_YEAR:
			return {	...state,		
						apodyear: action.apodyear
			}
		case actionTypes.CHANGE_TYPE:
			return {	...state,		
						apodtype_value: action.apodtype_value
			}
		case actionTypes.SET_APOD_IMAGES:
			return {	...state,		
						apodresults: action.apodresults
			}
		case actionTypes.SHOW_LIGHT_BOX:
			return {	...state,
						isLightBoxVisible: true,		
						lightBoxInfo: action.lightBoxInfo
			}
		case actionTypes.HIDE_LIGHT_BOX:
			return {	...state,
						isLightBoxVisible: false,		
						lightBoxInfo: {}
			}
		default: return {...state }
	}
}

export default galleryReducer;