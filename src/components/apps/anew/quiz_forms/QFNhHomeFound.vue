<template>
	<div class="q-f-nh-home-found">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="row vertical-middle" id="homeFound">
					<div class="col-md-8">
						<div class="quiz-subtitle">Have you found a home?</div>
					</div><!--
					--><div class="col-md-2">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="() => {ansGrp.homeFound = 'yes'}">
							yes
						</q-button>
					</div><!--
					--><div class="col-md-2">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="() => {ansGrp.homeFound = 'no'}">
							no
						</q-button>
					</div>
				</div>
				<div class="row vertical-middle" id="workagent">
					<div class="col-md-8">
						<div class="quiz-subtitle">Are you currently working with an agent?</div>
					</div><!--
					--><div class="col-md-2">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="() => {ansGrp.workWAgent = 'yes'}">
							yes
						</q-button>
					</div><!--
					--><div class="col-md-2">
						<q-button
							q-btn-color='#38B4CD'
							@click.native="() => {ansGrp.workWAgent = 'no'}">
							no
						</q-button>
					</div>
				</div>
				<div class="row vertical-middle" id="timeframe">
					<div class="col-md-8">
						<div class="quiz-subtitle">When are you likely to purhase a home?</div>
					</div><!--
					--><div class="col-md-4">
						<div class="q-answer">
							<q-select
								q-name="this"
								:options="timeframe_options"
								:q-value="ansGrp.nhTimeFrame"
								:q-validate="'required'"
								q-select-icon="calendar"
								:on-change="(e) => {ansGrp.nhTimeFrame = e.target.value}"
							></q-select>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-color="#38B4CD"
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion('QFNhHomeValue', set_answersInfo)">
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
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'q-f-nh-home-found',
		computed: {
	        // Get the timeframe_options from the store.
	        ...mapState('common', {
	        	timeframe_options: state => state.timeframe_options
	        })
	    },
		data() {
			return {
				ansGrp: {
					homeFound: '',
		        	workWAgent: '',
					nhTimeFrame: '',
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
			QButton,
			QSelect,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>