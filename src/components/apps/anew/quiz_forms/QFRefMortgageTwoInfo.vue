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
								:q-value="ansGrp.firstMorBalance"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {ansGrp.firstMorBalance = e.target.value}"
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
								:q-value="ansGrp.firstMorRate"
								:q-validate="'required'"
								q-select-icon="percent"
								:on-change="(e) => {ansGrp.firstMorRate = e.target.value}"
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
								:q-value="ansGrp.refiLoanType"
								:q-validate="'required'"
								q-select-icon="asterisk"
								:on-change="(e) => {ansGrp.refiLoanType = e.target.value}"
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
								:q-value="ansGrp.secondMorBalance"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {ansGrp.secondMorBalance = e.target.value}"
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
								:q-value="ansGrp.secondMorRate"
								:q-validate="'required'"
								q-select-icon="percent"
								:on-change="(e) => {ansGrp.secondMorRate = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-class='btn-blue'
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFCreditRating', set_answersInfo)">
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
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-ref-mortgage-info',
		computed: {
	        // Get the homevalue_options from the store.
	        // Get the downpayment_options from the store.
	        // Get the loantype_options from the store.
	        ...mapState('common', {
	        	homevalue_options: state => state.homevalue_options,
	        	downpayment_options: state => state.downpayment_options,
	        	loantype_options: state => state.loantype_options,
	        })
	    },
		data() {
			return {
				ansGrp: {
					firstMorBalance: '',
		        	firstMorRate: '',
		        	refiLoanType: '',
		        	secondMorRate: '',
		        	refiLoanType: '',
		        },
			}
		},
		methods: {
	    	...mapActions('anew', [
	    		'setAnswersInfo',
	    	]),
	    	set_answersInfo: function() {
	    		for (const [key, value] of Object.entries(this.ansGrp)) {
	    			if (value == '') return false
	    		}
	    		var payload = this.ansGrp
	    		this.setAnswersInfo(payload)
	    		return true
	    	},
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