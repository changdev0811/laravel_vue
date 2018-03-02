<template>
	<div class="q-f-result">
		<question-results :questions="questions"/>
	</div>
</template>
<script>
	import QuestionResults from '@/components/QuestionResults'
	export default {
		name: 'q-f-result',
		computed: {
	        // Get the array of questions from the store.
	        questions: {
	            get: function() {
	            	return this.$store.getters.getQuestions	
	            }
	        },
	    },
	    components: {
	    	QuestionResults,
	    },
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>