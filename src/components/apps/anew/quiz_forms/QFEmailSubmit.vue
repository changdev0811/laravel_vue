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
								:q-value="ansGrp.contactInfo.firstName"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
								:on-input="(e) => {ansGrp.contactInfo.firstName = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="LastName"
								q-placeholder="Last Name:"
								:q-value="ansGrp.contactInfo.lastName"
								:q-mask="''"
								:q-validate="'required|alpha'"
								q-input-icon="user"
								:on-input="(e) => {ansGrp.contactInfo.lastName = e.target.value}"
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
								:q-value="ansGrp.contactInfo.address"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
								:on-input="(e) => {ansGrp.contactInfo.address = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="City"
								q-placeholder="City:"
								:q-value="ansGrp.contactInfo.city"
								:q-mask="''"
								:q-validate="'required'"
								q-input-icon="home"
								:on-input="(e) => {ansGrp.contactInfo.city = e.target.value}"
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
								:q-value="ansGrp.contactInfo.states"
								:q-validate="'required'"
								q-select-icon="home"
								:on-change="(e) => {ansGrp.contactInfo.states = e.target.value}"
							></q-select>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="Zip"
								q-placeholder="Zip:"
								:q-value="ansGrp.contactInfo.zipcode"
								:q-mask="'99999'"
								:q-validate="'required|numeric'"
								q-input-icon="home"
								:on-input="(e) => {ansGrp.contactInfo.zipcode = e.target.value}"
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
								:q-value="ansGrp.contactInfo.priEmail"
								:q-mask="''"
								:q-validate="'required|email'"
								q-input-icon="envelope"
								:on-input="(e) => {ansGrp.contactInfo.priEmail = e.target.value}"
							></q-input>
						</div>
					</div>
					<div class="col-md-4">
						<div class="q-answer">
							<q-input
								q-name="Phone"
								q-placeholder="Primary Phone:"
								:q-value="ansGrp.contactInfo.priPhone"
								:q-mask="'(999) 999-9999'"
								:q-validate="'required'"
								q-input-icon="phone"
								:on-input="(e) => {ansGrp.contactInfo.priPhone = e.target.value.match(/\d+/g).join('')}"
							></q-input>
						</div>
					</div>
				</div>
				<div class="row btn-wrapper">
					<div class="col-md-4 col-md-offset-4">
						<q-button
							q-btn-class='btn-blue'
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
	import { mapState, mapActions, mapGetters } from 'vuex'
	export default {
		name: 'q-f-email-submit',
		computed: {
	        // Get the states_options from the store.
	        ...mapState('common', {
	        	states_options: state => state.states_options,
	        }),
	        // Get the state of anew module
	        ...mapState('anew', {
	        	submitData: state => state,
	        }),
	    },
		data() {
			return {
				questionTitle: 'Please complete the following form to see your results',
				ansGrp: {
					contactInfo: {
						firstName: '',
			    		lastName: '',
			    		address: '',
			    		city: '',
			    		states: '',
			    		zipcode: '',
			    		priEmail: '',
			    		priPhone: '',
			    	},
		    	},
			}
		},
		methods: {
			...mapActions('anew', [
				'setAnswersInfo',
			]),
			collectUrlKeyValuePairs() {
				return this.submitData.incomingParams
			},
			changeUrlKeyValuePair(key,val) {
				var incoming_params = this.submitData.incomingParams
				incoming_params.key = val
				return incoming_params
			},
			emailVerify() {
				// alert("success verify")
				const url = '/api.smartfha/webcommon/val/xverify-email.php'
				const form = new FormData()
				form.append('email', this.ansGrp.contactInfo.priEmail)
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
				form.append('priPhone', this.ansGrp.contactInfo.priPhone)
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
			set_answersInfo() {
				for (const [key, value] of Object.entries(this.ansGrp)) {
	    			if (value == '') return false
	    		}
	    		var payload = this.ansGrp
	    		this.setAnswersInfo(payload)
	    		return true
			},
			finalRequest() {
				if (!this.set_answersInfo()) {
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