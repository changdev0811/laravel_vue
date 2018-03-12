<template>
	<!-- form 9 -->
	<div class="q-f-estimatedvalue">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="">
							<q-select
								q-name="this"
								:options="homevalue_options"
								:q-value="ansGrp.refiHomeValue"
								:q-validate="'required'"
								:on-change="(e) => {ansGrp.refiHomeValue = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFFirstandsecond', set_answersInfo)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 9 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-estimatedvalue',
		computed: {
	        // Get the homevalue_options from the store.
	        ...mapState('common', {
	        	homevalue_options: state => state.homevalue_options
	        })
	    },
		data() {
	        return {
	        	questionTitle: 'What is the estimated value of your home?',
	        	ansGrp: {	
					refiHomeValue: '',
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
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>