<template>
	<div class="q-f-nh-home-type">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFNhHomeUse')">
							single family
						</q-button>
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFNhHomeUse')">
							multi family
						</q-button>
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFNhHomeUse')">
							town house
						</q-button>
						<q-button
							q-btn-color='#38B4CD'
							@click.native="setAnswerToQuestion('QFNhHomeUse')">
							condo
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
		name: 'q-f-nh-home-type',
		data() {
			return {
				questionTitle: 'Tell us about your new home',
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