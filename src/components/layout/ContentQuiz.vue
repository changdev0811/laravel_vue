<template>
	<div class="content-quiz">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="content-wrap">
                    	<div class="content-title">FHA mortgages at Record Low APR!</div>
                    	<router-view/>
						<!-- form 5 -->
						<!-- <question :question-prop="questions[4]" :key="questions[4].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-4">
										<q-card title="Immediately" img-src="img/immed.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="30 days" img-src="img/30days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="60 days" img-src="img/60days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4 col-md-offset-2">
										<q-card title="90 days" img-src="img/90days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No Specific Time" img-src="img/unknowndays.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question> --><!-- end of form 5 -->
						
						<!-- form 14 -->
                        <!-- <question :question-prop="questions[13]" :key="questions[13].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">Can you verify your income?</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No" img-src="img/no.png"></q-card>
									</div>
								</div>
								<div class="quiz-title">Have you or your spouse been an active member of the US armed forces?</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No" img-src="img/no.png"></q-card>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question> --><!-- end of form 14 -->
						
                        <question-results v-show="resultsVisibility" :questions-prop="questions"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import QuestionResults from '@/components/QuestionResults'
	export default {
		name: 'content-quiz',
	    computed: {
	        // Get the array of questions from the store.
	        questions: {
	            get: function() {
	            	return this.$store.getters.getQuestions	
	            }
	        },

	        // Get the visibility of the QuestionResults component from the store.
	        resultsVisibility() {
	            return this.$store.getters.getResultsVisibility
	        }
	    },
	    data() {
	    	return {
	    		
	    	}
	    },
	    components: {
	    	QuestionResults,
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