<template>
	<!-- form 2 -->
	<div class="q-f-zipcode">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="">
							<!-- <q-masked-input
								q-placeholder="Zipcode:"
								:q-mask="[/\d/, /\d/, /\d/, /\d/, /\d/]"
							></q-masked-input> -->
							<q-input
								q-name="Zipcode"
								q-placeholder="Zipcode:"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'hometype')">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 2 -->
</template>
<script>
	import Question from '@/components/Question'
	import QInput from '@/components/resources/QInput'
	import QButton from '@/components/resources/QButton'
	export default {
		name: 'q-f-zipcode',
		data() {
	        return {
	        	quesIndex: 1
	        }
	    },
		components: {
			Question,
			QInput,
			QButton,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>