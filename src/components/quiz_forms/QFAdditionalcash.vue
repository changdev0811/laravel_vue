<template>
	<!-- form 12 -->
	<div class="q-f-additionalcash">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-card title="Yes" img-src="img/yes.png" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFRefiinfo', setAdditionalCash('yes'))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="No" img-src="img/no.png" @click.native="setAnswerToQuestion(questionData.id, 'No', 'QFRefiinfo', setAdditionalCash('no'))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 12 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-additionalcash',
		data() {
			return {
				quesIndex: 11,
			}
		},
		methods: {
			setAdditionalCash: function(payload) {
				this.$store.dispatch("setAdditionalCash", payload)
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