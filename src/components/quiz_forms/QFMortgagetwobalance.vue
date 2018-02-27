<template>
	<!-- form 11 -->
	<div class="q-f-mortgagetwobalance">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<!-- <div class="quiz-title">{{questionData.title}}</div> -->
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">1st Mortgage balance:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Balance"
								:options="homevalue_options"
								:q-validate="'required'"
								q-select-icon="dollar"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">Interest Rate:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Rate"
								:options="downpayment_options"
								:q-validate="'required'"
								q-select-icon="percent"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">Existing Rate Type:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="RateType"
								:options="loantype_options"
								:q-validate="'required'"
								q-select-icon="asterisk"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">2st Mortgage balance:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Balance"
								:options="homevalue_options"
								:q-validate="'required'"
								q-select-icon="dollar"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">Interest Rate:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Rate"
								:options="downpayment_options"
								:q-validate="'required'"
								q-select-icon="percent"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'creditstatus')">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 11 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	export default {
		name: 'q-f-mortgagetwobalance',
		computed: {
	        // Get the homevalue_options from the store.
	        homevalue_options: {
	            get: function() {
	            	return this.$store.getters.getHomevalueOptions
	            }
	        },
	        // Get the downpayment_options from the store.
	        downpayment_options: {
	            get: function() {
	            	return this.$store.getters.getDownpaymentOptions
	            }
	        },
	        // Get the loantype_options from the store.
	        loantype_options: {
	            get: function() {
	            	return this.$store.getters.getLoantypeOptions
	            }
	        },
	    },
		data() {
	        return {
	        	quesIndex: 10,
	        }
	    },
	    components: {
	    	Question,
	    	QButton,
	    	QSelect,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>