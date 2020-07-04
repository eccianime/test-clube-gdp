export const initialData = {
	main: {
		isLoaderVisible: false,
		isToastVisible: false,
		toastType: "",
		toastText: "",
	},
	gallery: {
		activeTab: 1,
		apodtype_value: 0,
		apodmonth: new Date().getMonth(),
		apodyear: new Date().getFullYear(),
		apodresults: [],
		isLightBoxVisible: false,
		lightBoxInfo: {},
	},
	favorites: {
		items: [],
		dateOrder: "DSC",
		nameOrder: "DSC",
		typeOrder: "DSC",
	},
}