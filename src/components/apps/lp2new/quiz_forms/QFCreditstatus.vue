<template>
	<!-- form 13 -->
	<div class="q-f-creditstatus">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="quiz-title">What is your credit status?</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<q-card title="Excellent" img-src="img/credit-excellent2.jpg" @click.native="setAnswerToQuestion('QFContactinfo', set_answersInfo({creditType:'EXCELLENT'}))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Good" img-src="img/credit-good2.jpg" @click.native="setAnswerToQuestion('QFContactinfo', set_answersInfo({creditType:'GOOD'}))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Average" img-src="img/credit-average2.jpg" @click.native="setAnswerToQuestion('QFContactinfo', set_answersInfo({creditType:'AVERAGE'}))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Fair" img-src="img/credit-fair2.jpg" @click.native="setAnswerToQuestion('QFContactinfo', set_answersInfo({creditType:'FAIR'}))"></q-card>
					</div>
					<div class="col-md-4">
						<q-card title="Poor" img-src="img/credit-poor2.jpg" @click.native="setAnswerToQuestion('QFContactinfo', set_answersInfo({creditType:'POOR'}))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 13 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QCard from '@/components/resources/QCard'
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-creditstatus',
		data() {
			return {
				questionTitle: 'Now tell us a little about you so we can get you matched with\
				 				the best mortgage lender and rate based on your specific needs!',
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