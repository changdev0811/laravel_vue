<template>
	<div class="q-f-ref-additional-cash">
		<question>
			<div class="question" slot-scope="{setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFRefHomeLocation', set_answersInfo({additionalCash:'yes'}))">
							yes
						</q-button>
					</div>
					<div class="col-md-4">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFRefHomeLocation', set_answersInfo({additionalCash:'no'}))">
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
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-ref-additional-cash',
		data() {
			return {
				questionTitle: 'Are you looking to pull additional cash by refinancing?',
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