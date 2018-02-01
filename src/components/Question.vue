<!-- Question component -->
<template>
	<div class="question">
        <h3>{{questionData.title}}</h3>
        <div class="btn btn-success" data-value="Yes" @click="setAnswerToQuestion(questionData.id, 'Yes')">Yes</div>
        <div class="btn btn-success" data-value="No" @click="setAnswerToQuestion(questionData.id, 'No')">No</div>
	</div>
</template>
<script>
	export default {
		name: 'Question',
		props: ['questionProp'],
		data() {
			return {
				// Return the question object
				questionData: this.questionProp
			}
		},
		methods: {
			// Set the answer to the current question object.
			setAnswerToQuestion: function(id, answer) {
				var payload = {id: id, answer: answer}
				// Call "setAnswerToQuestion" action of the Vuex store.
				this.$store.dispatch("setAnswerToQuestion", payload)
			}
		}
	}
</script>
<style>
	
</style>