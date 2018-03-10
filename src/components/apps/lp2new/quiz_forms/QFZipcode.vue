<template>
	<!-- form 2 -->
	<div class="q-f-zipcode">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="">
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
							@click.native="setAnswerToQuestion('QFHometype', setNhZipcode)">
							next 
						</q-button>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 2 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QInput from '@/components/resources/QInput'
	import QButton from '@/components/resources/QButton'
	export default {
		name: 'q-f-zipcode',
		data() {
	        return {
	        	questionTitle: 'Tell us about your new home',
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