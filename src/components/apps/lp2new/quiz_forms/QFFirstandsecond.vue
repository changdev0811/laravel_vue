<template>
	<!-- form 10 -->
	<div class="q-f-firstandsecond">
        <question>
			<div class="question" slot-scope="{ setAnswerToQuestion }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="quiz-title">Do you have a 1st and a 2nd mortgage?</div>
				<div class="row">
					<div class="col-md-6">
						<q-card title="1st only" img-src="img/1stmort.jpg" @click.native="setAnswerToQuestion('QFMortgagebalance')"></q-card>
					</div>
					<div class="col-md-6">
						<q-card title="1st &amp; 2nd" img-src="img/2ndmort.jpg" @click.native="setAnswerToQuestion('QFMortgagetwobalance')"></q-card>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 10 -->
</template>
<script>
	import Question from '@/components/resources/Question'
	import QCard from '@/components/resources/QCard'
	export default {
		name: 'q-f-firstandsecond',
		data() {
	        return {
	        	questionTitle: 'Tell us about your current loan',
	        }
	    },
	    components: {
	    	Question,
	    	QCard,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</styl99