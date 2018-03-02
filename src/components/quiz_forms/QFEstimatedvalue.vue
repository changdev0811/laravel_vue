<template>
	<!-- form 9 -->
	<div class="q-f-estimatedvalue">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="">
							<q-select
								q-name="this"
								:options="homevalue_options"
								:q-value="refiHomeValue"
								:q-validate="'required'"
								:on-change="(e) => {refiHomeValue = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'QFFirstandsecond', setRefiHomeValue)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 9 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	export default {
		name: 'q-f-estimatedvalue',
		computed: {
	        // Get the homevalue_options from the store.
	        homevalue_options: {
	            get: function() {
	            	return this.$store.getters.getHomevalueOptions
	            }
	        },
	    },
		data() {
	        return {
	        	quesIndex: 8,
	        	refiHomeValue: '',
	        }
	    },
	    methods: {
	    	setRefiHomeValue: function() {
	    		if (this.refiHomeValue == '') {
	    			return false
	    		}
	    		var payload = this.refiHomeValue
	    		this.$store.dispatch("setRefiHomeValue", payload)
	    		return true
	    	},
	    },
	    components: {
	    	Question,
	    	QButton,
	    	QSelect,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>