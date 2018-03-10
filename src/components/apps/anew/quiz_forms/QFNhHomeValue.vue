<template>
	<div class="q-f-nh-home-value">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
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
							q-btn-color="#38B4CD"
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFCreditRating')">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div>
</template>
<script>
	import Question from '@/components/resources/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	export default {
		name: 'q-f-nh-home-value',
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
	        	estHomeValue: '',
	        	estDownpayment: '',
	        	estLoanType: '',
	        }
	    },
		components: {
			Question,
			QButton,
	    	QSelect,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>