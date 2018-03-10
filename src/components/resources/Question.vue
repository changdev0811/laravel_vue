<script>
	export default {
		name: 'Question',
		computed: {
	        isSinglePageApp: {
	        	get: function() {
	        		return this.$store.getters.getIsSinglePageApp
	        	}
	        },
	    },
		methods: {
			/*	Set the answer to the current question.
			*	next_form 	: route name
			*/
			setAnswerToQuestion: function(next_form, callback) {
				if (typeof(callback) == 'function') {
					if (!callback()) {
						alert('Please enter all your information correctly.')
						return
					}
				}
				if (next_form !== '') {
					if (this.isSinglePageApp) {
						this.$router.replace({name: next_form})
					} else {
						this.$router.push({name: next_form})
					}
				}
			},
			finalSubmit: function(callback){
				if (typeof(callback) == 'function') {
					callback()
				} else {
					alert(callback)
				}
			},
		},
		render() {
			return this.$scopedSlots.default({
				setAnswerToQuestion: this.setAnswerToQuestion,
				finalSubmit: this.finalSubmit,
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