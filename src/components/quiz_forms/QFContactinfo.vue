<template>
	<!-- form 15 -->
	<div class="q-f-contactinfo">
		<question :question-prop="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion }">
				<div class="quiz-title">{{questionData.title}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="FirstName"
								q-placeholder="First Name:"
								:q-guide="false"
								:q-mask="[/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i]"
								q-masked-input-icon="user"
								:q-validate="'required|alpha'"
							></q-masked-input> -->
							<q-input
								q-name="FirstName"
								q-placeholder="First Name:"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="LastName"
								q-placeholder="Last Name:"
								:q-guide="false"
								:q-mask="[/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i,/[A-Z]/i]"
								q-masked-input-icon="user"
								:q-validate="'required|alpha'"
							></q-masked-input> -->
							<q-input
								q-name="LastName"
								q-placeholder="Last Name:"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
							></q-input>
						</div>
					</div>
				</div><!-- end of row 1 -->
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="Address"
								q-placeholder="Address:"
								:q-mask="[]"
								q-masked-input-icon="home"
							></q-masked-input> -->
							<q-input
								q-name="Address"
								q-placeholder="Address:"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="City"
								q-placeholder="City:"
								:q-mask="[]"
								q-masked-input-icon="home"
								:q-validate="'required'"
							></q-masked-input> -->
							<q-input
								q-name="City"
								q-placeholder="City:"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
							></q-input>
						</div>
					</div>
				</div><!-- end of row 2 -->
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<q-select
								q-name="States"
								:options="states_options"
								:q-validate="'required'"
								q-select-icon="home"
							></q-select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="Zip"
								q-placeholder="Zip:"
								:q-mask="[/\d/, /\d/, /\d/, /\d/, /\d/]"
								q-masked-input-icon="home"
								:q-validate="'required|numeric'"
							></q-masked-input> -->
							<q-input
								q-name="Zip"
								q-placeholder="Zip:"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								q-input-icon="home"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="Email"
								q-placeholder="Email:"
								:q-mask="emailMask"
								q-masked-input-icon="envelope"
								:q-validate="'required|email'"
							></q-masked-input> -->
							<q-input
								q-name="Email"
								q-placeholder="Email:"
								:q-mask="''"
								:q-validate="'required|email'"
								q-input-icon="envelope"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<!-- <q-masked-input
								q-name="Phone"
								q-placeholder="Primary Phone:"
								:q-guide="true"
								:q-mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
								q-placeholder-char="_"
								q-masked-input-icon="phone"
								:q-validate="'required'"
							></q-masked-input> -->
							<q-input
								q-name="Phone"
								q-placeholder="Primary Phone:"
								:q-mask="'(999) 999-9999'"
								:q-validate="'required'"
								q-input-icon="phone"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button 
							q-btn-icon="glyphicon-chevron-right"
							@click.native="setAnswerToQuestion(questionData.id, 'Yes', 'result')">
							submit 
						</q-button>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-8 col-md-offset-2">
						<p>
							We take your privacy seriously. By clicking submit I confirm 
							that I am a U.S. resident over the age of 18, I agree to the 
							<a href="http://www.smartfha.com/webcommon/priv/terms.php" target="_blank">
								Terms of Service
							</a> 
							and 
							<a href="http://www.smartfha.com/webcommon/priv/privacy_policy.php" target="_blank">
								Privacy Policy
							</a>, and I agree to receive offers via email from smartfha.com and its 
							partners.  In addition, I agree to be contacted by Inbound Intel, 
							<a href="http://www.refinancecalculator.com/mortgage-companies/" target="_blank">
								lenders
							</a>, and other marketing companies at the phone number I provided above via 
							pre-recorded and/or automated telephone calls and/or text messages even 
							if my number is listed on a Do Not Call list and I understand this 
							consent is not a condition of purchase.
						</p>
					</div>
				</div>
			</div>
		</question>
	</div><!-- end of form 15 -->
</template>
<script>
	import Question from '@/components/Question'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	import QInput from '@/components/resources/QInput'
	export default {
		name: 'q-f-contactinfo',
		computed: {
	        // Get the states_options from the store.
	        states_options: {
	            get: function() {
	            	return this.$store.getters.getStatesOptions
	            }
	        },
	    },
		data() {
			return {
				quesIndex: 14,
			}
		},
		components: {
			Question,
			QButton,
			QSelect,
			QInput,
		},
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
</style>