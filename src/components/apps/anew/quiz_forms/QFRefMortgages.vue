<template>
	<div class="q-f-ref-mortgages">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="quiz-title">Do you have a 1st and a 2nd mortgage?</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFRefMortgageInfo')">
							1st only
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFRefMortgageTwoInfo')">
							1st &amp; 2nd
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
	export default {
		name: 'q-f-ref-mortgages',
		data() {
			return {
				questionTitle: 'Tell us about your current loan',
			}
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