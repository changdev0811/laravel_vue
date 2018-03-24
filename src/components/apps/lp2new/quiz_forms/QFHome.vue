<template>
	<!-- form 1 -->
	<div class="q-f-home">
		<question>
			<div class="question" slot-scope="{setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="Refinance" img-src="img/refinance.jpg" @click.native="setAnswerToQuestion('QFAdditionalcash', set_answersInfo({loanInterest:'PP_REFI',loanType:'refinance'}))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="New Home" img-src="img/newhouse.jpg" @click.native="setAnswerToQuestion('QFZipcode', set_answersInfo({loanInterest:'PP_NEWHOME',loanType:'purchase'}))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 1 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QCard from '@/components/resources/QCard'
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-home',
		data() {
			return {
				questionTitle: 'Please select what you are interested in:',
			}
		},
		methods: {
			...mapActions('lp2new', [
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
			QCard,
		},

	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>