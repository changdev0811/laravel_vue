<template>
	<div class="q-f-nh-home-type">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeUse', set_answersInfo({homeType:'SINGLE_FAM'}))">
							single family
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeUse', set_answersInfo({homeType:'MULTI_FAM'}))">
							multi family
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeUse', set_answersInfo({homeType:'TOWNHOUSE'}))">
							town house
						</q-button>
						<q-button
							q-btn-class='btn-blue'
							@click.native="setAnswerToQuestion('QFNhHomeUse', set_answersInfo({homeType:'CONDO'}))">
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
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-nh-home-type',
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