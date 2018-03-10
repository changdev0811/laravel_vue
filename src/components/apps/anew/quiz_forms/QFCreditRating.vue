<template>
	<div class="q-f-credit-rating">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="quiz-title">What is your credit status?</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFEmailSubmit')">
							excellent (720+)
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFEmailSubmit')">
							good (660-719)
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFEmailSubmit')">
							average (620-659)
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFEmailSubmit')">
							fair (580-619)
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFEmailSubmit')">
							poor (&lt;579)
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
		name: 'q-f-credit-rating',
		data() {
			return {
				questionTitle: 'Now tell us a little about you so we can get you matched with\
				 				the best mortgage lender and rate based on your specific needs!',
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