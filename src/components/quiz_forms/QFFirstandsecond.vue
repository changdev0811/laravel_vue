<template>
	<!-- form 10 -->
	<div class="q-f-firstandsecond">
        <question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="quiz-title">Do you have a 1st and a 2nd mortgage?</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="1st only" img-src="img/1stmort.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'mortgagebalance')"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="1st & 2nd" img-src="img/2ndmort.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'mortgagetwobalance')"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 10 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-firstandsecond',
		data() {
	        return {
	        	quesIndex: 9
	        }
	    },
	    components: {
	    	Question,
	    	QCard,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</styl99