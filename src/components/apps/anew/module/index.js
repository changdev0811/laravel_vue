export default {
	namespaced: true,
	state: {
		// 1 - for QFLoanType
		loanInterest: '',
		loanType: '',
		// 2 - for QFRefAdditionalCash
		additionalCash: '',
		// 3 - for QFRefHomeLocation
		refiZipcode: '',
		// 4 - for QFRefHomeValue
		refiHomeValue: '',
		// 5 - for QFRefMortgageInfo
		firstMorBalance: '',
    	firstMorRate: '',
    	secondMorBalance: '',
    	secondMorRate: '',
    	refiLoanType: '',
    	// 6 - for QFCreditRating
    	creditType: '',
    	// 7 - for QFEmailSubmit
    	contactInfo: {
    		firstName: '',
    		lastName: '',
    		address: '',
    		city: '',
    		states: '',
    		zipcode: '',
    		priEmail: '',
    		priPhone: '',
    	},
    	// 8 - for QFNhHomeLocation
    	nhZipcode: '',
    	// 9 - for QFNhHomeType
    	homeType: '',
    	// 10 - for QFNhHomeUse
    	homeUse: '',
    	// 11 - for QFNhHomeFound
    	homeFound: 'no',
    	workWAgent: 'no',
    	nhTimeFrame: '',
    	// 12 - for QFNhHomeValue
    	estHomeValue: '',
    	estDownpayment: '',
    	estLoanType: '',
	},	// end of state-anew --------------------------------------
	getters: {
		getSubmitData: state => {
			return {
				// 1
				loanInterest: state.loanInterest,
				loanType: state.loanType,
				// 2
				additionalCash: state.additionalCash,
				// 3
				refiZipcode: state.refiZipcode,
				// 4
				refiHomeValue: state.refiHomeValue,
				// 5
				firstMorBalance: state.firstMorBalance,
	        	firstMorRate: state.firstMorRate,
	        	secondMorBalance: state.secondMorBalance,
	        	secondMorRate: state.secondMorRate,
	        	refiLoanType: state.refiLoanType,
	        	// 6
	        	creditType: state.creditType,
	        	// 7
	        	contactInfo: state.contactInfo,
	        	// 8
	        	nhZipcode: state.nhZipcode,
	        	// 9
	        	homeType: state.homeType,
	        	// 10
	        	homeUse: state.homeUse,
	        	// 11
	        	homeFound: state.homeFound,
		    	workWAgent: state.workWAgent,
		    	nhTimeFrame: state.nhTimeFrame,
		    	// 12
		    	estHomeValue: state.estHomeValue,
		    	estDownpayment: state.estDownpayment,
		    	estLoanType: state.estLoanType,
			}
		},

	},	// end of getters-anew --------------------------------------
	mutations: {
		// common function
		SET_ANSWERS_INFO: (state, payload) => {
			for (const [key, value] of Object.entries(payload)) {
				state[key] = value
			}
		},
	},	// end of mutations-anew --------------------------------------
	actions: {
		// common function
		setAnswersInfo: (context, payload) => {
			context.commit("SET_ANSWERS_INFO", payload)
		}
	},	// end of action-anew --------------------------------------
} // end of anew-module --------------------------------------