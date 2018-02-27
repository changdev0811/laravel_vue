<template>
	<!-- form 6 -->
	<div class="q-f-homeagentfound">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<!-- <div class="quiz-title">{{questionData.title}}</div> -->
				<div class="row vertical-middle" id="homeFound">
					<div class="col-md-8">
						<div class="quiz-subtitle">Have you found a home?</div>
					</div><!--
					--><div class="col-md-2">
						<q-card title="Yes" img-src="img/yes.png"></q-card>
					</div><!--
					--><div class="col-md-2">
						<q-card title="No" img-src="img/no.png"></q-card>
					</div>
				</div>
				<div class="row vertical-middle" id="workagent">
					<div class="col-md-8">
						<div class="quiz-subtitle">Are you currently working with an agent?</div>
					</div><!--
					--><div class="col-md-2">
						<q-card title="Yes" img-src="img/yes.png"></q-card>
					</div><!--
					--><div class="col-md-2">
						<q-card title="No" img-src="img/no.png"></q-card>
					</div>
				</div>
				<div class="row vertical-middle" id="timeframe">
					<div class="col-md-8">
						<div class="quiz-subtitle">When are you likely to purhase a home?</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="this"
								:options="timeframe_options"
								:q-validate="'required'"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'estimatedvaluepayment')">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 6 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-homeagentfound',
		computed: {
	        // Get the timeframe_options from the store.
	        timeframe_options: {
	            get: function() {
	            	return this.$store.getters.getTimeframeOptions
	            }
	        },
	    },
		data() {
	        return {
	        	quesIndex: 5,
	        }
	    },
	    components: {
	    	Question,
	    	QButton,
	    	QSelect,
	    	QCard,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>