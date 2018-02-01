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
				questionData: this.questionProp
			}
		}
	}
</script>
<style></style>