// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

var state = {
	// the array of questions
	questions: [
		{
			id: 0,
			title: "Question 1",
			answer: "No",
			show: true
		},
		{
			id: 1,
			title: "Question 2",
			answer: "No",
			show: false
		},
		{
			id: 2,
			title: "Question 3",
			answer: "No",
			show: false
		},
		{
			id: 3,
			title: "Question 4",
			answer: "No",
			show: false
		}
	],
	// the visibility of QuestionResults.
	show_results: false
}

var getters = {
	// Get the array of questions from the state.
	getQuestions: state => state.questions,
	// Get the visibility of QuestionResults from the state.
	getResultsVisibility: state => state.show_results
}

var mutations = {
	// Set the answer for the question and modify the state.
	SET_ANSWER_TO_QUESTION: (state, payload) => {
		// Get the index of the current question.
		var index = state.questions.findIndex(question => question.id === payload.id)
		// Get the question object.
		var item = state.questions[index]
		// Set the answer.
		item.answer = payload.answer
		// Set the visibility status of the current question to false
		item.show = false
		// Check if the current question is the last question or not
		if (index == (state.questions.length - 1)) {
			// Show the resuts of the quiz after last question
			state.show_results = true
		} else {
			// Show the next question
			var next_item = state.questions[index + 1]
			// Set the visibility status of the next question to true
			next_item.show = true
		}
	}
}

var actions = {
	// Set the answer to the question
	setAnswerToQuestion: (context, payload) => {
		// Call the mutation of SET_ANSWER_TO_QUESTION.
		context.commit("SET_ANSWER_TO_QUESTION", payload)
	}
}
// define the store for vuex.
var store = new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // Set the store defined above
  store: store,
  components: { App },
  template: '<App/>'
})
