<template>
	<!-- form 7 -->
	<div class="q-f-estimatedvaluepayment">
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
								:q-value="ansGrp.estHomeValue"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {ansGrp.estHomeValue = e.target.value}"
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
								:q-value="ansGrp.estDownpayment"
								:q-validate="'required'"
								q-select-icon="percent"
								:on-change="(e) => {ansGrp.estDownpayment = e.target.value}"
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
								:q-value="ansGrp.estLoanType"
								:q-validate="'required'"
								q-select-icon="asterisk"
								:on-change="(e) => {ansGrp.estLoanType = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFCreditstatus', set_answersInfo)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 7 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-estimatedvaluepayment',
		computed: {
	        // Get the homevalue_options from the store.
	        // Get the downpayment_options from the store.
	        // Get the loantype_options from the store.
	        ...mapState('common', {
	        	homevalue_options: state => state.homevalue_options,
	        	downpayment_options: state => state.downpayment_options,
	        	loantype_options: state => state.loantype_options,
	        }),
	    },
		data() {
	        return {
	        	ansGrp: {
		        	estHomeValue: '',
		        	estDownpayment: '',
		        	estLoanType: '',
		        },
	        }
	    },
	    methods: {
	    	...mapActions('lp2new', [
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
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>