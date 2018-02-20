<!-- Question component -->

<!-- basic template -->
<!-- <template>
	<div id="question">
        <h3>{{questionData.title}}</h3>
        <div class="btn btn-success" data-value="Yes" @click="setAnswerToQuestion(questionData.id, 'Yes')">Yes</div>
        <div class="btn btn-success" data-value="No" @click="setAnswerToQuestion(questionData.id, 'No')">No</div>
	</div>
</template> -->

<!-- temporary template -->
<!-- <template>
	<div class="question">
		<div class="quiz-title">{{questionData.title}}</div>
		<div class="row">
			<div class="col-md-6">
				<q-card title="Husky" img-src="img/husky1.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
			</div>
			<div class="col-md-6">
				<q-card title="Shepherd" img-src="img/shepherd.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
			</div>
		</div>
	</div>
</template> -->
<script>
	// import QCard from '@/components/resources/QCard'
	export default {
		name: 'Question',
		props: ['questionProp'],
		data() {
			return {
				// Return the question object
				// questionData: this.questionProp,
			}
		},
		methods: {
			// Set the answer to the current question object.
			setAnswerToQuestion: function(id, answer) {
				var payload = {id: id, answer: answer}
				// Call "setAnswerToQuestion" action of the Vuex store.
				this.$store.dispatch("setAnswerToQuestion", payload)
			},
		},
		components: {
			// QCard,
		},
		render() {
			return this.$scopedSlots.default({
				questionData: this.questionProp,
				setAnswerToQuestion: this.setAnswerToQuestion
			})
		}
	}
</script>

<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
	.question
		padding: 15px 5px
	.quiz-title
		font-weight: 300
		color: #555
		font-size: 30px
		text-align: center
		margin: 30px 0px
		@include non-desktop
			margin: 10px 0px
			font-size: 22px
</style>