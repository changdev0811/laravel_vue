<!-- QuestionResults component -->
<template>
	<div class="question-results">
		<question-result v-for="question in questions" :question="question" :key="question.id" />
    </div>
</template>
<script>
	/* Import QuestionResult component
	/		QuestionResult component shows both of the question and the answer.
	*/
	import QuestionResult from '@/components/QuestionResult'
	export default {
		name: 'QuestionResults',
	 	props: ['questions'],
		components: {
			QuestionResult
		}
	}
</script>
<style lang="sass" scoped>
	.question-results
		background: url('~@/assets/img/husky.jpg') no-repeat
		background-size: cover
		width: 100%
		padding: 5% 20px 43% 20px
		margin-top: 30px
		border-radius: 15px
</style>