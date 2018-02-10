<template>
	<div class="content-quiz">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="content-wrap">
                    	<div class="content-title">FHA mortgages at Record Low APR!</div>
                        <question v-for="question in questions" v-show="question.show" :question-prop="question" :key="question.id" />
                        <question-results v-show="resultsVisibility" :questions-prop="questions"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import Question from '@/components/Question'
	import QuestionResults from '@/components/QuestionResults'

	export default {
		name: 'content-quiz',
	    computed: {
	        // Get the array of questions from the store.
	        questions() {
	            return this.$store.getters.getQuestions
	        },
	        // Get the visibility of the QuestionResults component from the store.
	        resultsVisibility() {
	            return this.$store.getters.getResultsVisibility
	        }
	    },
	    components: {
	    	Question,
	    	QuestionResults
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
	h3
	    display: inline-block
	    font-weight: 600
	    margin: 0px 20px 0px 0px
	.content-title
		font-weight: 600
		font-size: 40px
		color: #2acf6c
		text-align: center
		line-height: 1.1
		@include non-desktop
			font-size: 30px
</style>