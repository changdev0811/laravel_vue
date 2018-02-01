// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

var state = {
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
	show_results: false
}

var getters = {
	getQuestions: state => state.questions,
	getResultsVisibility: state => state.show_results
}

var mutations = {
	SET_ANSWER_TO_QUESTION: (state, payload) => {
		var index = state.questions.findIndex(question => question.id === payload.id)
		var item = state.questions[index]
		item.answer = payload.answer
		item.show = false
		if (index == (state.questions.length - 1)) {
			// Show the resuts of the quiz after last question
			state.show_results = true
		} else {
			// Show the next question
			var next_item = state.questions[index + 1]
			next_item.show = true
		}
	}
}

var actions = {
	setAnswerToQuestion: (context, payload) => {
		context.commit("SET_ANSWER_TO_QUESTION", payload)
	}
}

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
  store: store,
  components: { App },
  template: '<App/>'
})
