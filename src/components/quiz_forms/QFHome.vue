<template>
	<!-- form 1 -->
	<div class="q-f-home">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-6">
						<!-- <q-card title="Refinance" img-src="img/refinance.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card> -->
						<q-card title="Refinance" img-src="img/refinance.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFAdditionalcash', setLoanInterest({loanInterest:'PP_REFI',loanType:'refinance'}))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="New Home" img-src="img/newhouse.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'QFZipcode', setLoanInterest({loanInterest:'PP_NEWHOME',loanType:'purchase'}))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 1 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-home',
		data() {
			return {
				quesIndex: 0
			}
		},
		methods: {
			setLoanInterest: function(payload) {
				this.$store.dispatch("setLoanInterest", payload)
				return true
			},
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