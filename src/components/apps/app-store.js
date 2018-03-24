import { store } from 'vuex-plus'
export default store({
	namespaced: true,
	state: {
		// 1 -
		loanInterest: '',
		loanType: '',
		// 2 -
		additionalCash: '',
		// 3 -
		refiZipcode: '',
		// 4 -
		refiHomeValue: '',
		// 5 -
		firstMorBalance: '',
    	firstMorRate: '',
    	secondMorBalance: '',
    	secondMorRate: '',
    	refiLoanType: '',
    	// 6 -
    	creditType: '',
    	// 7 -
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
    	// 8 -
    	nhZipcode: '',
    	// 9 -
    	homeType: '',
    	// 10 -
    	homeUse: '',
    	// 11 -
    	homeFound: 'no',
    	workWAgent: 'no',
    	nhTimeFrame: '',
    	// 12 -
    	estHomeValue: '',
    	estDownpayment: '',
    	estLoanType: '',
	},	// end of state --------------------------------------
	getters: {
		
	},	// end of getters --------------------------------------
	mutations: {
		// common function
		SET_ANSWERS_INFO: (state, payload) => {
			for (const [key, value] of Object.entries(payload)) {
				state[key] = value
			}
		},
	},	// end of mutations --------------------------------------
	actions: {
		// common function
		setAnswersInfo: (context, payload) => {
			context.commit("SET_ANSWERS_INFO", payload)
		}
	},	// end of action --------------------------------------
}) // end of module --------------------------------------