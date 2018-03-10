<template>
	<div class="q-f-loan-type">
		<question>
			<div class="question" slot-scope="{setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFRefAdditionalCash')">
							refinance
						</q-button>
					</div>
					<div class="col-md-4">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFNhHomeLocation')">
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
	export default {
		name: 'q-f-loan-type',
		data() {
			return {
				questionTitle: 'Our Program helps people get Approved!',
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