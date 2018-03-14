<template>
	<div class="q-f-ref-home-value">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="row vertical-middle" id="homeFound">
					<div class="col-md-6 col-md-offset-1">
						<div class="quiz-subtitle">Estimated Home Value:</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="Balance"
								:options="homevalue_options"
								:q-value="ansGrp.refiHomeValue"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {ansGrp.refiHomeValue = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-class='btn-blue'
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFRefMortgages', set_answersInfo)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div>
</template>
<script>
	import Question from '@/components/resources/Question'
	import QSelect from '@/components/resources/QSelect'
	import QButton from '@/components/resources/QButton'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-ref-home-value',
		computed: {
	        // Get the homevalue_options from the store.
	        ...mapState('common', {
	        	homevalue_options: state => state.homevalue_options
	        })
	    },
		data() {
			return {
				questionTitle: 'Where is this home located?',
				ansGrp: {	
					refiHomeValue: '',
				},
			}
		},
		methods: {
	    	...mapActions('anew', [
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
			QSelect,
			QButton,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>