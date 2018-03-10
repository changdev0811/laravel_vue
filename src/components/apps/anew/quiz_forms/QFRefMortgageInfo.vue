<template>
	<div class="q-f-ref-mortgage-info">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="row vertical-middle" id="">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">1st Mortgage balance:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Balance"
								:options="homevalue_options"
								:q-value="firstMorBalance"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {firstMorBalance = e.target.value}"
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
								:q-value="firstMorRate"
								:q-validate="'required'"
								q-select-icon="percent"
								:on-change="(e) => {firstMorRate = e.target.value}"
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
								:q-value="refiLoanType"
								:q-validate="'required'"
								q-select-icon="asterisk"
								:on-change="(e) => {refiLoanType = e.target.value}"
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
		name: 'q-f-ref-mortgage-info',
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
				firstMorBalance: '',
	        	firstMorRate: '',
	        	refiLoanType: '',
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