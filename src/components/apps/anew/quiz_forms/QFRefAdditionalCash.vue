<template>
	<div class="q-f-ref-additional-cash">
		<question>
			<div class="question" slot-scope="{setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFRefHomeLocation')">
							yes
						</q-button>
					</div>
					<div class="col-md-4">
						<q-button
							q-btn-color="#38B4CD"
							@click.native="setAnswerToQuestion('QFRefHomeLocation')">
							no
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
		name: 'q-f-ref-additional-cash',
		data() {
			return {
				questionTitle: 'Are you looking to pull additional cash by refinancing?',
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