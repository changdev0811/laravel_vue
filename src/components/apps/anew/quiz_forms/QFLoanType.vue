<template>
	<div class="q-f-loan-type">
		<question>
			<div class="question" slot-scope="{setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFRefAdditionalCash', set_answersInfo({loanInterest:'PP_REFI',loanType:'refinance'}))">
							refinance
						</q-button>
					</div>
					<div class="col-md-4">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeLocation', set_answersInfo({loanInterest:'PP_NEWHOME',loanType:'purchase'}))">
							new home 
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
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-loan-type',
		data() {
			return {
				questionTitle: 'Our Program helps people get Approved!',
			}
		},
		methods: {
			...mapActions('anew', [
				'setAnswersInfo',
			]),
			set_answersInfo: function(payload) {
				this.setAnswersInfo(payload)
				return true
			},
			captureUrlKeyValuePairs: function() {
				var payload = {incomingParams: this.$route.query}
				this.setAnswersInfo(payload)
			},
		},
		mounted() {
			this.captureUrlKeyValuePairs()			
		},
		components: {
			Question,
			QButton,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>