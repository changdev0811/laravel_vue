<template>
	<!-- form 15 -->
	<div class="q-f-contactinfo">
		<question :question-index="quesIndex">
			<div class="question" slot-scope="{ questionData, setAnswerToQuestion, finalSubmit }">
				<div class="quiz-title">{{questionData.title}}</div>
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
							q-btn-icon="glyphicon-chevron-right"
							@click.native="finalSubmit(finalRequest)">
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
	import https from 'https'
	import querystring from 'querystring'
	export default {
		name: 'q-f-contactinfo',
		computed: {
	        // Get the states_options from the store.
	        states_options: {
	            get: function() {
	            	return this.$store.getters.getStatesOptions
	            }
	        },
	        submitData: {
	        	get: function() {
	        		return this.$store.getters.getSubmitData
	        	}
	        },
	    },
		data() {
			return {
				quesIndex: 14,
				source: 'smartfha.com',

				firstName: '',
	    		lastName: '',
	    		address: '',
	    		city: '',
	    		states: '',
	    		zipcode: '',
	    		priEmail: '',
	    		priPhone: '',

	    		hiddenData: {
		    		leadidToken: '08247749-A7F6-F0FC-6EB5-563C976001BC',
		    		c1: '',
		    		c2: '',
		    		c3: '',
		    		pubId: '460001',
		    		hId: '0000',
		    		ref: '000000',
		    		sId: '',
		    		siteId: '460377',
		    		xxTrustedFormCertUrl_0: 'https://cert.trustedform.com/5ed658fca39e7880d4d47697b943edc5c8d54c72',
		    	},
			}
		},
		methods: {
			purchaseSubmit() {
				var subData = this.submitData
				var hidData = this.hiddenData

				var loanInterest = subData.loanInterest
				var loanType = subData.loanType
				var creditType = subData.creditType
				var refiZipcode = subData.refiZipcode
				var homeType = subData.homeType
				var homeUse = subData.homeUse
				var refiHomeValue = subData.refiHomeValue
				var firstMorBalance = subData.firstMorBalance
				var firstMorRate = subData.firstMorRate
				var secondMorBalance = subData.secondMorBalance
				var secondMorRate = subData.secondMorRate
				var refiLoanType = subData.refiLoanType
				var additionalCash = subData.additionalCash
				var contactInfo = subData.contactInfo
				var estHomeValue = subData.estHomeValue
				var estDownpayment = subData.estDownpayment
				var estLoanType = subData.estLoanType
				var nhZipcode = subData.nhZipcode
				var homeFound = subData.homeFound
				var workWAgent = subData.workWAgent
				var nhTimeFrame = subData.nhTimeFrame

				if (loanInterest == 'PP_REFI') {
					var channel = '3'
					var postData = querystring.stringify({
						api_key: 'BC602DBC-0D89-412A-820E-DD32E12922EB',
						PRODUCT: 'Refinance',
						PROP_ZIP: refiZipcode,
						PROP_DESC: homeType,
						PROP_PURP: homeUse,
						EST_VAL: refiHomeValue,
						mortgage_one_amount: firstMorBalance,
						mortgage_one_rate: firstMorRate,
						mortgage_two_amount: secondMorBalance,
						mortgage_two_rate: secondMorRate,
						LOAN_TYPE: refiLoanType,
						ADD_CASH: additionalCash,
						CRED_GRADE: creditType,
						FNAME: contactInfo.firstName,
						LNAME: contactInfo.lastName,
						ADDRESS: contactInfo.address,
						CITY: contactInfo.city,
						STATE: contactInfo.states,
						ZIP: contactInfo.zipcode,
						EMAIL: contactInfo.priEmail,
						PRI_PHON: contactInfo.priPhone,
						type: channel,
						leadid_token: hidData.leadidToken,
						c1: hidData.c1,
						c2: hidData.c2,
						c3: hidData.c3,
						pubid: hidData.pubId,
						hid: hidData.hId,
						netid: hidData.ref,
						sid: hidData.sId,
						xxTrustedFormToken: hidData.xxTrustedFormCertUrl_0,
						siteid: hidData.siteId
					})
				} else {
					channel = '1'
					var dwnpay = estHomeValue * (estDownpayment / 100);
					var postData = querystring.stringify({
						api_key:'BC602DBC-0D89-412A-820E-DD32E12922EB',
						PRODUCT: 'Purchase',
						PROP_AREA: '',
						PROP_ZIP: nhZipcode,
						PROP_DESC: homeType,
						PROP_PURP: homeUse, 
						SPEC_HOME: homeFound,
						BUY_TIMEFRAME: nhTimeFrame,
						AGENT_FOUND: workWAgent,
						EST_VAL: estHomeValue,
						DOWN_PMT_PERCENT: estDownpayment, 
						DOWN_PMT: dwnpay,
						LOAN_TYPE: estLoanType,
						CRED_GRADE: creditType, 
						FNAME: contactInfo.firstName, 
						LNAME: contactInfo.lastName,
						ADDRESS: contactInfo.address,
						CITY: contactInfo.city,
						STATE: contactInfo.states, 
						ZIP: contactInfo.zipcode,
						EMAIL: contactInfo.priEmail,
						PRI_PHON:  contactInfo.priPhone,
						type: channel,
						// SR_TOKEN: $("input[name='SR_TOKEN']").val(),
						leadid_token: hidData.leadidToken,
						c1: hidData.c1,
						c2: hidData.c2,
						c3: hidData.c3,
						pubid: hidData.pubId,
						hid: hidData.hId,
						netid: hidData.ref,
						sid: hidData.sId,
						xxTrustedFormToken: hidData.xxTrustedFormCertUrl_0,
						siteid: hidData.siteId
					})
				}

				var options = {
					host: 'api.rxmg.bid',
					method: 'POST',
					path: '/api/contact/new',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						'Content-Length': postData.length
					}
				}

				var req = https.request(options, function (res) {
					var result = ''
					res.on('data', function (chunk) {
						result += chunk
					})
					res.on('end', function () {
						var response = JSON.parse(result)
						// --------------------------------------------------
						if (typeof response['errors'] != 'undefined') {
							alert(response['errors'])
						} else if (typeof response['result']['sm'] != 'undefined' && response['result']['sm'] == 'INVALID') {
							var error = response['result']['errors']
							if (typeof error['EMAIL'] != 'undefined') {
								alert('Enter a correct email address')
							} else if (typeof error['PRI_PHON'] != 'undefined') {
								alert('Enter a correct Phone Number')
							} else if (typeof error['STATE'] != 'undefined' || typeof error['ZIP'] != 'undefined') {
								alert('Enter a correct State / Zip Combo')
							}
						} else if (response['result']['sm'] != "INVALID") {
							if (loanInterest == 'PP_REFI') {
								var totalLoan = Number(secondMorBalance)+Number(firstMorBalance)
								if (creditType == 'POOR') {
									window.location.assign("http://smartfha.com/lp2new/typoor.php?pub="+hidData.siteId+"&c1="+hidData.siteId+"_"+hidData.pubId+"&c2="+hidData.c1+"&c3="+hidData.hId+"&firstname="+contactInfo.firstName+"&lastname="+contactInfo.lastName+"&loantype="+loanType+"&loanamount="+totalLoan+"&creditscore="+creditType+"&zipcode="+refiZipcode+"&phone="+contactInfo.priPhone+"&state="+contactInfo.states);
								} else {
									window.location.assign("http://www.resilientscript.com/rd/r.php?sid=3775&pub="+hidData.siteId+"&c1="+hidData.siteId+"_"+hidData.pubId+"&c2="+hidData.c1+"&c3="+hidData.hId+"&firstname="+contactInfo.firstName+"&lastname="+contactInfo.lastName+"&loantype="+loanType+"&loanamount="+totalLoan+"&creditscore="+creditType+"&zipcode="+refiZipcode+"&phone="+contactInfo.priPhone+"&state="+contactInfo.states);
								}
							} else {
								if (creditType == 'POOR') {
									window.location.assign("http://smartfha.com/lp2new/typoor.php?pub="+hidData.siteId+"&c1="+hidData.siteId+"_"+hidData.pubId+"&c2="+hidData.c1+"&c3="+hidData.hId+"&firstname="+contactInfo.firstName+"&lastname="+contactInfo.lastName+"&loantype="+loanType+"&downpayment="+estDownpayment+"&loanamount="+estHomeValue+"&creditscore="+creditType+"&zipcode="+nhZipcode+"&phone="+contactInfo.priPhone+"&state="+contactInfo.states);
								} else {
									window.location.assign("http://www.resilientscript.com/rd/r.php?sid=3775&pub="+hidData.siteId+"&c1="+hidData.siteId+"_"+hidData.pubId+"&c2="+hidData.c1+"&c3="+hidData.hId+"&firstname="+contactInfo.firstName+"&lastname="+contactInfo.lastName+"&loantype="+loanType+"&downpayment="+estDownpayment+"&loanamount="+estHomeValue+"&creditscore="+creditType+"&zipcode="+nhZipcode+"&phone="+contactInfo.priPhone+"&state="+contactInfo.states);
								}
							}
						} else {
							alert('errors');
						}
						// --------------------------------------------------
					})
					res.on('error', function (err) {
						console.log("error from api.rxmg.bid")
						console.log(err)
					})
				})

				req.on('error', function (err) {
					console.log(err)
					alert('We could not submit the form at this time. Please try again.');
				})

				req.write(postData)
				req.end()
			},
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
						this.purchaseSubmit()
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