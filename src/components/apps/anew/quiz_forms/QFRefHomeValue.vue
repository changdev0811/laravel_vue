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
								:q-value="refHomeValue"
								:q-validate="'required'"
								q-select-icon="dollar"
								:on-change="(e) => {refHomeValue = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-color="#38B4CD"
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFRefMortgages')">
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
	export default {
		name: 'q-f-ref-home-value',
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
				questionTitle: 'Where is this home located?',
				refHomeValue: '',
			}
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