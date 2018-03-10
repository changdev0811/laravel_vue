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
								:q-value="refZipcode"
								:q-mask="'99999'"
								q-input-icon="map-marker"
								:q-validate="'required|numeric'"
								:on-input="(e) => {refZipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-color="#38B4CD"
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFRefHomeValue')">
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
	export default {
		name: 'q-f-ref-home-location',
		data() {
	        return {
	        	questionTitle: 'Where is this home located?',
	        	refZipcode: '',
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