<!-- QuestionResult component -->
<template>
	<div class="question-result">
		<p><strong>{{questionData.title}}</strong> <span class="q1val">{{questionData.answer}}</span></p>
	</div>
</template>
<script>
	export default {
		name: 'QuestionResult',
		props: ['questionProp'],
		data() {
			return {
				// Return the question object
				questionData: this.questionProp
			}
		}
	}
</script>
<style lang="sass" scoped>
	.question-result
		color: #20ec3f
</style>