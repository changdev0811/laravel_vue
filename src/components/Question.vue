<script>
	// import QCard from '@/components/resources/QCard'
	export default {
		name: 'Question',
		props: ['questionProp'],
		data() {
			return {

			}
		},
		computed: {
	        // Get the array of questions from the store.
	        questions: {
	            get: function() {
	            	return this.$store.getters.getQuestions	
	            }
	        },
	    },
		methods: {
			// Set the answer to the current question object.
			setAnswerToQuestion: function(id, answer, next_form) {
				var payload = {id: id, answer: answer}
				// Call "setAnswerToQuestion" action of the Vuex store.
				this.$store.dispatch("setAnswerToQuestion", payload)
				this.$router.push('/' + next_form)
			},
		},
		components: {
			
		},
		render() {
			return this.$scopedSlots.default({
				questionData: this.questions[this.questionProp],
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