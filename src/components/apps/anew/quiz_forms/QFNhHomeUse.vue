<template>
	<div class="q-f-nh-home-use">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFNhHomeFound')">
							primary home
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFNhHomeFound')">
							second home
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFNhHomeFound')">
							investment property
						</q-button>
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFNhHomeFound')">
							vacation rental
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
		name: 'q-f-nh-home-use',
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