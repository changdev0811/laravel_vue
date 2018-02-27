<template>
	<!-- form 13 -->
	<div class="q-f-creditstatus">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-card title="Excellent" img-src="img/credit-excellent2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'contactinfo')"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Good" img-src="img/credit-good2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'contactinfo')"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Average" img-src="img/credit-average2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'contactinfo')"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Fair" img-src="img/credit-fair2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'contactinfo')"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Poor" img-src="img/credit-poor2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'contactinfo')"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 13 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-creditstatus',
		data() {
			return {
				quesIndex: 12
			}
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