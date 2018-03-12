<template>
	<!-- form 4 -->
	<div class="q-f-primaryuse">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="Primary Home" img-src="img/primaryhome.jpg" @click.native="setAnswerToQuestion('QFEstimatedvalue', set_answersInfo({homeUse:'primary'}))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Second Home" img-src="img/secondhome.jpg" @click.native="setAnswerToQuestion('QFEstimatedvalue', set_answersInfo({homeUse:'secondary_vactn'}))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Investment Property" img-src="img/investmentprop.jpg" @click.native="setAnswerToQuestion('QFHomeagentfound', set_answersInfo({homeUse:'investment'}))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Vacation Rental" img-src="img/vacationprop.jpg" @click.native="setAnswerToQuestion('QFHomeagentfound', set_answersInfo({homeUse:'secondary_vactn'}))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 4 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QCard from '@/components/resources/QCard'
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-primaryuse',
		data() {
	        return {
	        	questionTitle: 'What is the primary use of the home?',
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
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>