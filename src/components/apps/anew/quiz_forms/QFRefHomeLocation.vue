<template>
	<div class="q-f-ref-home-location">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="">
							<q-input
								q-name="Zipcode"
								q-placeholder="Zipcode:"
								:q-value="ansGrp.refiZipcode"
								:q-mask="'99999'"
								q-input-icon="map-marker"
								:q-validate="'required|numeric'"
								:on-input="(e) => {ansGrp.refiZipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-class='btn-blue'
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFRefHomeValue', set_answersInfo)">
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
	import QInput from '@/components/resources/QInput'
	import QButton from '@/components/resources/QButton'
	import { mapActions } from 'vuex'
	export default {
		name: 'q-f-ref-home-location',
		data() {
	        return {
	        	questionTitle: 'Where is this home located?',
				ansGrp: {
	        		refiZipcode: '',
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
			QInput,
			QButton,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>