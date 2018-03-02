<template>
	<!-- form 2 -->
	<div class="q-f-zipcode">
		<question :question-index="quesIndex">
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
								:q-value="nhZipcode"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								:on-input="(e) => {nhZipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFHometype', setNhZipcode)">
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
	        	quesIndex: 1,
	        	nhZipcode: '',
	        }
	    },
	    methods: {
	    	setNhZipcode: function() {
	    		if (this.nhZipcode == '') {
	    			return false
	    		}
	    		var payload = this.nhZipcode
	    		this.$store.dispatch("setNhZipcode", payload)
	    		return true
	    	},
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