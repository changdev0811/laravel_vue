<template>
	<div class="q-f-email-submit">
		<question>
			<div class="question" slot-scope="{ setAnswerToQuestion, finalSubmit }">
				<div class="quiz-title">{{questionTitle}}</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<q-input
								q-name="FirstName"
								q-placeholder="First Name:"
								:q-value="firstName"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
								:on-input="(e) => {firstName = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="LastName"
								q-placeholder="Last Name:"
								:q-value="lastName"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
								:on-input="(e) => {lastName = e.target.value}"
							></q-input>
						</div>
					</div>
				</div><!-- end of row 1 -->
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<q-input
								q-name="Address"
								q-placeholder="Address:"
								:q-value="address"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
								:on-input="(e) => {address = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="City"
								q-placeholder="City:"
								:q-value="city"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
								:on-input="(e) => {city = e.target.value}"
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
								:q-value="states"
								:q-validate="'required'"
								q-select-icon="home"
								:on-change="(e) => {states = e.target.value}"
							></q-select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="Zip"
								q-placeholder="Zip:"
								:q-value="zipcode"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								q-input-icon="home"
								:on-input="(e) => {zipcode = e.target.value}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-2">
						<div class="q-answer">
							<q-input
								q-name="Email"
								q-placeholder="Email:"
								:q-value="priEmail"
								:q-mask="''"
								:q-validate="'required|email'"
								q-input-icon="envelope"
								:on-input="(e) => {priEmail = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="Phone"
								q-placeholder="Primary Phone:"
								:q-value="priPhone"
								:q-mask="'(999) 999-9999'"
								:q-validate="'required'"
								q-input-icon="phone"
								:on-input="(e) => {priPhone = e.target.value.match(/\d+/g).join('')}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-color="#38B4CD"
							q-btn-icon="glyphicon-chevron-right"
							@click.native="finalSubmit(finalRequest)">
							submit 
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
	import QInput from '@/components/resources/QInput'
	export default {
		name: 'q-f-email-submit',
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
				questionTitle: 'Please complete the following form to see your results',
				firstName: '',
	    		lastName: '',
	    		address: '',
	    		city: '',
	    		states: '',
	    		zipcode: '',
	    		priEmail: '',
	    		priPhone: '',
			}
		},
		methods: {
			emailVerify() {
				// alert("success verify")
				const url = '/api.smartfha/webcommon/val/xverify-email.php'
				const form = new FormData()
				form.append('email', this.priEmail)
				form.append('source', this.source)
				
				this.axios.post(url,
					form,
				).then((response) => {
					console.log(response.data)
					var res = response.data
					if (typeof res['email']['auto_correct']['corrected'] != 'undefined') {
						var autoCorrected = res['email']['auto_correct']['corrected'];
					} else {
						autoCorrected = false;
					}
					
					if (autoCorrected === true) {
						var emailAdd = res['email']['auto_correct']['address']	
					} else {
						emailAdd = res['email']['address']
					}
					
					var resCode = res['email']['responsecode'];
					
					if (resCode == ('1' || '3')){
						// this.purchaseSubmit()
						alert('Everythings OKay!');
					} else {
						alert('Please input a valid email address.');
					}
				})				
			},
			phoneNumVerify() {
				const url = '/api.smartfha/webcommon/val/numverify.php'
				const form = new FormData()
				form.append('priPhone', this.priPhone)
				// const url = 'http://smartfha.com/webcommon/val/numverify.php'
				this.axios.post(url,
					form,
					// {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
				).then((response) => {
					console.log(response.data)
					var res = response.data
					if (res['valid'] == true) {
						this.emailVerify()
					} else {
						alert('Please enter a valid phone number')
					}
				})
			},
			setContactInfo() {
				if (this.firstName == '' || this.lastName == '' || this.address == '' || this.city == '' || this.states == '' || this.zipcode == '' || this.priEmail == '' || this.priPhone == '') {
					return false
				}
				var payload = {
					firstName: this.firstName,
					lastName: this.lastName,
					address: this.address,
					city: this.city,
					states: this.states,
					zipcode: this.zipcode,
					priEmail: this.priEmail,
					priPhone: this.priPhone,
				}
				this.$store.dispatch("setContactInfo", payload)
				return true
			},
			finalRequest() {
				if (!this.setContactInfo()) {
					alert('Please enter all your information correctly.')
					return
				}
				this.phoneNumVerify()
			},
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