const istate = {
	count1: 0,
	count2: 0,
	count3: 0,
	mydata: '',
	forTalha: '',
	forNoor: '',
	forNoor2: '',
	forNoor3: '',
	forNoor4: '',
	forNoor5: '',
};

const reducer = (state = istate, action) => {
	switch (action.type) {
		case 'Faraz':
			return {
				...state,
				count1: action.payload,
				forTalha: action.name,
			};

		case 'Talha':
			return {
				...state,
				count2: action.payload,
				mydata: action.data,
			};

		case 'Noor':
			return {
				...state,
				count3: action.payload,
				forNoor: action.age,
			};

		default:
			return state;
	}
};

export default reducer;
