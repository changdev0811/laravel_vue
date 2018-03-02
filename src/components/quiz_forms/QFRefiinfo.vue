<template>
	<!-- form 8 -->
	<div class="q-f-refiinfo">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<q-select
								q-name="States" 
								:options="states_options"
								:q-value="refiStates"
								:q-validate="'required'"
								:on-change="(e) => {refiStates = e.target.value}"
							></q-select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<!-- <q-masked-input
								q-placeholder="Zipcode:"
								:q-mask="[/\d/, /\d/, /\d/, /\d/, /\d/]"
							></q-masked-input> -->
							<q-input
								q-name="Zipcode"
								q-placeholder="Zipcode:"
								:q-value= "refiZipcode"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								:on-input="(e) => {refiZipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFHometype', setRefiZipcode)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 8 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import QInput from '@/components/resources/QInput'
	export default {
		name: 'q-f-refiinfo',
		computed: {
	        // Get the states_options from the store.
	        states_options: {
	            get: function() {
	            	return this.$store.getters.getStatesOptions
	            }
	        },
	    },
		data() {
			return {
				quesIndex: 7,
				refiStates: '',
				refiZipcode: '',
	        }
	    },
	    methods: {
	    	setRefiZipcode: function() {
				if (this.refiZipcode == '' || this.refiStates == '') {
					return false
				}	    		
	    		var payload = this.refiZipcode
	    		this.$store.dispatch("setRefiZipcode", payload)
	    		return true
	    	},
	    },
	    components: {
	    	Question,
	    	QButton,
	    	QSelect,
	    	QInput,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>