<template>
	<div class="q-f-nh-home-use">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeFound', set_answersInfo({homeUse:'primary'}))">
							primary home
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeFound', set_answersInfo({homeUse:'secondary_vactn'}))">
							second home
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeFound', set_answersInfo({homeUse:'investment'}))">
							investment property
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeFound', set_answersInfo({homeUse:'secondary_vactn'}))">
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
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-nh-home-use',
		data() {
			return {
				questionTitle: 'Tell us about your new home',
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