<template>
	<!-- form 8 -->
	<div class="q-f-refiinfo">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
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
							<q-input
								q-name="Zipcode"
								q-placeholder="Zipcode:"
								:q-value= "ansGrp.refiZipcode"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								:on-input="(e) => {ansGrp.refiZipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFHometype', set_answersInfo)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 8 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import QInput from '@/components/resources/QInput'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-refiinfo',
		computed: {
	        // Get the states_options from the store.
	        ...mapState('common', {
	        	states_options: state => state.states_options
	        })
	    },
		data() {
			return {
				questionTitle: 'Tell us about the home you want to refinance!',
				refiStates: '',
				ansGrp: {
					refiZipcode: '',
				},
	        }
	    },
	    methods: {
	    	...mapActions('lp2new', [
	    		'setAnswersInfo',
	    	]),
	    	set_answersInfo: function() {
	    		for (const [key, value] of Object.entries(this.ansGrp)) {
	    			if (value == '') return false
	    		}
	    		var payload = this.ansGrp
	    		this.setAnswersInfo(payload)
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