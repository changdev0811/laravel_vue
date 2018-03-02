<template>
	<!-- form 4 -->
	<div class="q-f-primaryuse">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="Primary Home" img-src="img/primaryhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFEstimatedvalue', setHomeUse('primary'))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Second Home" img-src="img/secondhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'QFEstimatedvalue', setHomeUse('secondary_vactn'))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Investment Property" img-src="img/investmentprop.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFHomeagentfound', setHomeUse('investment'))"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Vacation Rental" img-src="img/vacationprop.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'QFHomeagentfound', setHomeUse('secondary_vactn'))"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 4 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-primaryuse',
		data() {
	        return {
	        	quesIndex: 3
	        }
	    },
	    methods: {
	    	setHomeUse: function(payload) {
	    		this.$store.dispatch("setHomeUse", payload)
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