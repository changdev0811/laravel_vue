<template>
	<!-- form 12 -->
	<div class="q-f-additionalcash">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-card title="Yes" img-src="img/yes.png" @click.native="setAnswerToQuestion('QFRefiinfo', set_answersInfo({additionalCash:'yes'}))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="No" img-src="img/no.png" @click.native="setAnswerToQuestion('QFRefiinfo', set_answersInfo({additionalCash:'no'}))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 12 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QCard from '@/components/resources/QCard'
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-additionalcash',
		data() {
			return {
				questionTitle: 'Are you looking to pull additional cash by refinancing?',
			}
		},
		methods: {
			...mapActions('lp2new', [
				'setAnswersInfo',
			]),
			set_answersInfo: function(payload) {
				this.setAnswersInfo(payload)
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