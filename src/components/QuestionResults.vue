<template>
	<div class="question-results">
		<question-result v-for="question in questions" :question-prop="question" :key="question.id" />
    </div>
</template>
<script>
	import QuestionResult from './QuestionResult'
	export default {
		name: 'QuestionResults',
	 	props: ['questionsProp'],
	    data() {
			return {
				questions: this.questionsProp
			}
		},
		components: {
			QuestionResult
		}
	}
</script>
<style></style>