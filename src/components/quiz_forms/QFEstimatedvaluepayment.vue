<template>
	<!-- form 7 -->
	<div class="q-f-estimatedvaluepayment">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<!-- <div class="quiz-title">{{questionData.title}}</div> -->
				<div class="row vertical-middle" id="homeFound">
					<div class="col-md-8">
						<div class="quiz-subtitle">Estimated Home Value:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Balance"
								:options="homevalue_options"
								:q-value="estHomeValue"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {estHomeValue = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="workagent">
					<div class="col-md-8">
						<div class="quiz-subtitle">Estimated Down Payment:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Rate"
								:options="downpayment_options"
								:q-value="estDownpayment"
								:q-validate="'required'"
								q-select-icon="percent"
								:on-change="(e) => {estDownpayment = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row vertical-middle" id="timeframe">
					<div class="col-md-8">
						<div class="quiz-subtitle">Desired Rate Type:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="RateType"
								:options="loantype_options"
								:q-value="estLoanType"
								:q-validate="'required'"
								q-select-icon="asterisk"
								:on-change="(e) => {estLoanType = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFCreditstatus', setEstDownpaymentInfo)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 7 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	export default {
		name: 'q-f-estimatedvaluepayment',
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
	        	quesIndex: 6,
	        	estHomeValue: '',
	        	estDownpayment: '',
	        	estLoanType: '',
	        }
	    },
	    methods: {
	    	setEstDownpaymentInfo: function() {
	    		if (this.estHomeValue == '' || this.estDownpayment == '' || this.estLoanType == '') {
	    			return false
	    		}
	    		var payload = {
	    			estHomeValue: this.estHomeValue,
	    			estDownpayment: this.estDownpayment,
	    			estLoanType: this.estLoanType
	    		}
	    		this.$store.dispatch("setEstDownpaymentInfo", payload)
	    		return true
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