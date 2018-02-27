<template>
	<!-- form 3 -->
	<div class="q-f-hometype">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="Single Family" img-src="img/singlefam.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'primaryuse')"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Multi Family" img-src="img/multifam.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'primaryuse')"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Town Home" img-src="img/townhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes', 'primaryuse')"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="Condo" img-src="img/condo.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No', 'primaryuse')"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 3 -->
</template>
<script>
	import Question from '@/components/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-hometype',
		data() {
	        return {
	        	quesIndex: 2
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
</style>