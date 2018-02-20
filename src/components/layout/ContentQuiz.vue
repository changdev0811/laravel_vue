<template>
	<div class="content-quiz">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="content-wrap">
                    	<div class="content-title">FHA mortgages at Record Low APR!</div>
						<!-- form 1 -->
                        <question :question-prop="questions[0]" :key="questions[0].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-6">
										<q-card title="Refinance" img-src="img/refinance.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="New Home" img-src="img/newhouse.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 1 -->
						<!-- form 2 -->
						<question :question-prop="questions[1]" :key="questions[1].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-6 col-md-offset-3">
										<div class="">
											<!-- <q-masked-input
												q-placeholder="Zipcode:"
												:q-mask="[/\d/, /\d/, /\d/, /\d/, /\d/]"
											></q-masked-input> -->
											<q-input
												q-name="Zipcode"
												q-placeholder="Zipcode:"
												:q-mask="'99999'"
												:q-validate="'required|numeric'"
											></q-input>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 2 -->
						<!-- form 3 -->
						<question :question-prop="questions[2]" :key="questions[2].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-6">
										<q-card title="Single Family" img-src="img/singlefam.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Multi Family" img-src="img/multifam.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Town Home" img-src="img/townhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Condo" img-src="img/condo.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 3 -->
						<!-- form 4 -->
						<question :question-prop="questions[3]" :key="questions[3].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-6">
										<q-card title="Primary Home" img-src="img/primaryhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Second Home" img-src="img/secondhome.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Investment Property" img-src="img/investmentprop.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="Vacation Rental" img-src="img/vacationprop.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 4 -->
						<!-- form 5 -->
						<question :question-prop="questions[4]" :key="questions[4].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-4">
										<q-card title="Immediately" img-src="img/immed.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="30 days" img-src="img/30days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="60 days" img-src="img/60days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4 col-md-offset-2">
										<q-card title="90 days" img-src="img/90days.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No Specific Time" img-src="img/unknowndays.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 5 -->
						<!-- form 6 -->
						<question :question-prop="questions[5]" :key="questions[5].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<!-- <div class="quiz-title">{{questionData.title}}</div> -->
								<div class="row vertical-middle" id="homeFound">
									<div class="col-md-8">
										<div class="quiz-subtitle">Have you found a home?</div>
									</div><!--
									--><div class="col-md-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div><!--
									--><div class="col-md-2">
										<q-card title="No" img-src="img/no.png"></q-card>
									</div>
								</div>
								<div class="row vertical-middle" id="workagent">
									<div class="col-md-8">
										<div class="quiz-subtitle">Are you currently working with an agent?</div>
									</div><!--
									--><div class="col-md-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div><!--
									--><div class="col-md-2">
										<q-card title="No" img-src="img/no.png"></q-card>
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
												:q-validate="'required'"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 6 -->
						<!-- form 7 -->
						<question :question-prop="questions[6]" :key="questions[6].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<!-- <div class="quiz-title">{{questionData.title}}</div> -->
								<div class="row vertical-middle" id="homeFound">
									<div class="col-md-8">
										<div class="quiz-subtitle">Estimated Home Value:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="Balance"
												:options="homevalue_options"
												:q-validate="'required'"
												q-select-icon="dollar"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row vertical-middle" id="workagent">
									<div class="col-md-8">
										<div class="quiz-subtitle">Estimated Down Payment:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="Rate"
												:options="downpayment_options"
												:q-validate="'required'"
												q-select-icon="percent"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row vertical-middle" id="timeframe">
									<div class="col-md-8">
										<div class="quiz-subtitle">Desired Rate Type:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="RateType"
												:options="loantype_options"
												:q-validate="'required'"
												q-select-icon="asterisk"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 7 -->
						<!-- form 8 -->
						<question :question-prop="questions[7]" :key="questions[7].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<div class="q-answer">
											<q-select
												q-name="States" 
												:options="states_options"
												:q-validate="'required'"
											></q-select>
										</div>
									</div>
									<div class="col-md-4">
										<div class="q-answer">
											<!-- <q-masked-input
												q-placeholder="Zipcode:"
												:q-mask="[/\d/, /\d/, /\d/, /\d/, /\d/]"
											></q-masked-input> -->
											<q-input
												q-name="Zipcode"
												q-placeholder="Zipcode:"
												:q-mask="'99999'"
												:q-validate="'required|numeric'"
											></q-input>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 8 -->
						<!-- form 9 -->
						<question :question-prop="questions[8]" :key="questions[8].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-6 col-md-offset-3">
										<div class="">
											<q-select
												q-name="this"
												:options="homevalue_options"
												:q-validate="'required'"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 9 -->
						<!-- form 10 -->
                        <question :question-prop="questions[9]" :key="questions[9].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="quiz-title">Do you have a 1st and a 2nd mortgage?</div>
								<div class="row">
									<div class="col-md-6">
										<q-card title="1st only" img-src="img/1stmort.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-6">
										<q-card title="1st & 2nd" img-src="img/2ndmort.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 10 -->
						<!-- form 11 -->
						<question :question-prop="questions[10]" :key="questions[10].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<!-- <div class="quiz-title">{{questionData.title}}</div> -->
								<div class="row vertical-middle" id="">
									<div class="col-md-6 col-md-offset-1">
										<div class="quiz-subtitle">1st Mortgage balance:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="Balance"
												:options="homevalue_options"
												:q-validate="'required'"
												q-select-icon="dollar"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row vertical-middle" id="">
									<div class="col-md-6 col-md-offset-1">
										<div class="quiz-subtitle">Interest Rate:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="Rate"
												:options="downpayment_options"
												:q-validate="'required'"
												q-select-icon="percent"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row vertical-middle" id="">
									<div class="col-md-6 col-md-offset-1">
										<div class="quiz-subtitle">Existing Rate Type:</div>
									</div><!--
									--><div class="col-md-4">
										<div class="q-answer">
											<q-select
												q-name="RateType"
												:options="loantype_options"
												:q-validate="'required'"
												q-select-icon="asterisk"
											></q-select>
										</div>
									</div>
								</div>
								<div class="row secondmort">
									<div class="col-md-12">
										<div class="row vertical-middle" id="">
											<div class="col-md-6 col-md-offset-1">
												<div class="quiz-subtitle">2st Mortgage balance:</div>
											</div><!--
											--><div class="col-md-4">
												<div class="q-answer">
													<q-select
														q-name="Balance"
														:options="homevalue_options"
														:q-validate="'required'"
														q-select-icon="dollar"
													></q-select>
												</div>
											</div>
										</div>
										<div class="row vertical-middle" id="">
											<div class="col-md-6 col-md-offset-1">
												<div class="quiz-subtitle">Interest Rate:</div>
											</div><!--
											--><div class="col-md-4">
												<div class="q-answer">
													<q-select
														q-name="Rate"
														:options="downpayment_options"
														:q-validate="'required'"
														q-select-icon="percent"
													></q-select>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 11 -->
						<!-- form 12 -->
                        <question :question-prop="questions[11]" :key="questions[11].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Yes" img-src="img/yes.png" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No" img-src="img/no.png" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 12 -->
						<!-- form 13 -->
						<question :question-prop="questions[12]" :key="questions[12].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">{{questionData.title}}</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Excellent" img-src="img/credit-excellent2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="Good" img-src="img/credit-good2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="Average" img-src="img/credit-average2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'Yes')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="Fair" img-src="img/credit-fair2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="Poor" img-src="img/credit-poor2.jpg" @click.native="setAnswerToQuestion(questionData.id, 'No')"></q-card>
									</div>
								</div>
							</div>
						</question><!-- end of form 13 -->
						<!-- form 14 -->
                        <question :question-prop="questions[13]" :key="questions[13].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
								<div class="quiz-title">Can you verify your income?</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No" img-src="img/no.png"></q-card>
									</div>
								</div>
								<div class="quiz-title">Have you or your spouse been an active member of the US armed forces?</div>
								<div class="row">
									<div class="col-md-4 col-md-offset-2">
										<q-card title="Yes" img-src="img/yes.png"></q-card>
									</div>
									<div class="col-md-4">
										<q-card title="No" img-src="img/no.png"></q-card>
									</div>
								</div>
								<div class="row btn-wrapper">
									<div class="col-md-4 col-md-offset-4">
										<q-button 
											q-btn-icon="glyphicon-chevron-right"
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
											next 
										</q-button>
									</div>
								</div>
							</div>
						</question><!-- end of form 14 -->
						<!-- form 15 -->
						<question :question-prop="questions[14]" :key="questions[14].id">
							<div v-show="questionData.show" class="question" slot-scope="{ questionData, setAnswerToQuestion }">
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
											@click.native="setAnswerToQuestion(questionData.id, 'Yes')">
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
						</question><!-- end of form 15 -->
                        <question-results v-show="resultsVisibility" :questions-prop="questions"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import Question from '@/components/Question'
	import QuestionResults from '@/components/QuestionResults'
	
	import QCard from '@/components/resources/QCard'
	import QButton from '@/components/resources/QButton'
	import QSelect from '@/components/resources/QSelect'
	// import QMaskedInput from '@/components/resources/QMaskedInput'
	import QInput from '@/components/resources/QInput'

	// import emailMask from 'text-mask-addons/dist/emailMask'

	export default {
		name: 'content-quiz',
	    computed: {
	        // Get the array of questions from the store.
	        questions: {
	            get: function() {
	            	return this.$store.getters.getQuestions	
	            }
	        },

	        // Get the visibility of the QuestionResults component from the store.
	        resultsVisibility() {
	            return this.$store.getters.getResultsVisibility
	        }
	    },
	    data() {
	    	return {
	    		timeframe_options: [{ 'label': 'Please Choose:', 'value': '' },
	    							{ 'label': 'Immediately', 'value': 'immediately' },
			    					{ 'label': '30 Days', 'value': '30_days' },
			    					{ 'label': '60 Days', 'value': '60_days' },
			    					{ 'label': '90 Days', 'value': '90_days' },
			    					{ 'label': 'No Time Constraint', 'value': 'no_time_constraint' }],
			    homevalue_options: [{ 'label': 'Please Choose:', 'value': '' },
	    							{ 'label': '75,000 - 100,000', 'value': '100000' },
			    					{ 'label': '100,000 - 125,000', 'value': '125000' },
			    					{ 'label': '126,000 - 149,000', 'value': '149000' },
			    					{ 'label': '150,000 - 155,000', 'value': '152500' },
			    					{ 'label': '155,001 - 160,000', 'value': '157500' },
			    					{ 'label': '160,001 - 165,000', 'value': '162500' },
	    							{ 'label': '165,001 - 170,000', 'value': '167500' },
			    					{ 'label': '170,001 - 175,000', 'value': '172500' },
			    					{ 'label': '175,001 - 180,000', 'value': '177500' },
			    					{ 'label': '180,001 - 185,000', 'value': '182500' },
			    					{ 'label': '185,001 - 190,000', 'value': '187500' },
			    					{ 'label': '190,001 - 195,000', 'value': '192500' },
	    							{ 'label': '195,001 - 200,000', 'value': '197500' },
			    					{ 'label': '200,001 - 210,000', 'value': '205000' },
			    					{ 'label': '210,001 - 220,000', 'value': '215000' },
			    					{ 'label': '220,001 - 230,000', 'value': '225000' },
			    					{ 'label': '230,001 - 240,000', 'value': '235000' },
			    					{ 'label': '240,001 - 250,000', 'value': '245000' },
			    					{ 'label': '260,001 - 270,000', 'value': '255000' },
	    							{ 'label': '250,001 - 260,000', 'value': '265000' },
			    					{ 'label': '270,001 - 280,000', 'value': '275000' },
			    					{ 'label': '280,001 - 290,000', 'value': '285000' },
			    					{ 'label': '290,001 - 300,000', 'value': '295000' },
			    					{ 'label': '300,001 - 310,000', 'value': '305000' },
	    							{ 'label': '310,001 - 320,000', 'value': '315000' },
			    					{ 'label': '320,001 - 330,000', 'value': '325000' },
			    					{ 'label': '330,001 - 340,000', 'value': '335000' },
			    					{ 'label': '340,001 - 350,000', 'value': '345000' },
			    					{ 'label': '350,001 - 360,000', 'value': '355000' },
			    					{ 'label': '360,001 - 370,000', 'value': '365000' },
	    							{ 'label': '370,001 - 380,000', 'value': '375000' },
			    					{ 'label': '380,001 - 390,000', 'value': '385000' },
			    					{ 'label': '390,001 - 400,000', 'value': '395000' },
			    					{ 'label': '400,001 - 420,000', 'value': '410000' },
			    					{ 'label': '420,001 - 440,000', 'value': '430000' },
			    					{ 'label': '440,001 - 460,000', 'value': '450000' },
	    							{ 'label': '460,001 - 480,000', 'value': '470000' },
			    					{ 'label': '480,001 - 500,000', 'value': '490000' },
			    					{ 'label': '500,001 - 520,000', 'value': '510000' },
			    					{ 'label': '520,001 - 540,000', 'value': '530000' },
			    					{ 'label': '540,001 - 560,000', 'value': '550000' },
			    					{ 'label': '560,001 - 580,000', 'value': '570000' },
	    							{ 'label': '580,001 - 600,000', 'value': '590000' },
	    							{ 'label': '600,001 - 620,000', 'value': '610000' },
	    							{ 'label': '620,001 - 640,000', 'value': '630000' },
	    							{ 'label': '640,001 - 660,000', 'value': '650000' },
			    					{ 'label': '660,001 - 680,000', 'value': '670000' },
			    					{ 'label': '680,001 - 700,000', 'value': '690000' },
	    							{ 'label': '700,001 - 720,000', 'value': '710000' },
			    					{ 'label': '720,001 - 740,000', 'value': '730000' },
			    					{ 'label': '740,001 - 760,000', 'value': '750000' },
			    					{ 'label': '760,001 - 780,000', 'value': '770000' },
			    					{ 'label': '780,001 - 800,000', 'value': '790000' },
			    					{ 'label': '800,001 - 820,000', 'value': '810000' },
	    							{ 'label': '820,001 - 840,000', 'value': '830000' },
			    					{ 'label': '840,001 - 860,000', 'value': '850000' },
			    					{ 'label': '860,001 - 880,000', 'value': '870000' },
			    					{ 'label': '880,001 - 900,000', 'value': '890000' },
			    					{ 'label': '900,001 - 920,000', 'value': '910000' },
			    					{ 'label': '920,001 - 940,000', 'value': '930000' },
	    							{ 'label': '940,001 - 960,000', 'value': '950000' },
			    					{ 'label': '960,001 - 980,000', 'value': '970000' },
			    					{ 'label': '980,001 - 1,000,000', 'value': '990000' },
			    					{ 'label': 'Over 1,000,000', 'value': '1000001' }],
			    downpayment_options: [{ 'label': 'Please Choose:', 'value': '' },
	    							{ 'label': 'fha', 'value': '3.5' },
			    					{ 'label': '5%', 'value': '5' },
			    					{ 'label': '10%', 'value': '10' },
			    					{ 'label': '15%', 'value': '15' },
			    					{ 'label': '20%', 'value': '20' },
			    					{ 'label': '25%', 'value': '25' },
			    					{ 'label': '30%', 'value': '30' },
			    					{ 'label': '35%', 'value': '35' },
			    					{ 'label': '40%', 'value': '40' },
			    					{ 'label': '45%', 'value': '45' },
			    					{ 'label': '50%', 'value': '50' },
			    					{ 'label': '55%', 'value': '55' },
			    					{ 'label': '60%', 'value': '60' },
			    					{ 'label': '65%', 'value': '65' },
			    					{ 'label': '70%', 'value': '70' },
			    					{ 'label': '75%', 'value': '75' },
			    					{ 'label': '80%', 'value': '80' },
			    					{ 'label': '85%', 'value': '85' },
			    					{ 'label': '90%', 'value': '90' },
			    					{ 'label': '95%', 'value': '95' },
			    					{ 'label': '100%', 'value': '100' }],
			    loantype_options: [	{ 'label': 'Please Choose:', 'value': '' },
	    							{ 'label': 'Fixed Rate', 'value': 'fixed' },
			    					{ 'label': 'Adjustable Rate', 'value': 'adjustable' },
			    					{ 'label': "I Don't know", 'value': 'fixed_or_adjustable' }],
			    states_options:   [ { 'label': 'Select your state:', 'value': '' },
	    							{ 'label': 'Alabama', 'value': 'AL' },
			    					{ 'label': 'Alaska', 'value': 'AK' },
			    					{ 'label': 'Arizona', 'value': 'AZ' },
			    					{ 'label': 'Arkansas', 'value': 'AR' },
			    					{ 'label': 'California', 'value': 'CA' },
			    					{ 'label': 'Colorado', 'value': 'CO' },
			    					{ 'label': 'Connecticut', 'value': 'CT' },
			    					{ 'label': 'Delaware', 'value': 'DE' },
			    					{ 'label': 'District of Columbia', 'value': 'DC' },
			    					{ 'label': 'Florida', 'value': 'FL' },
			    					{ 'label': 'Georgia', 'value': 'GA' },
			    					{ 'label': 'Hawaii', 'value': 'HI' },
			    					{ 'label': 'Iowa', 'value': 'IA' },
			    					{ 'label': 'Idaho', 'value': 'ID' },
			    					{ 'label': 'Illinois', 'value': 'IL' },
			    					{ 'label': 'Indiana', 'value': 'IN' },
			    					{ 'label': 'Kansas', 'value': 'KS' },
			    					{ 'label': 'Kentucky', 'value': 'KY' },
			    					{ 'label': 'Louisiana', 'value': 'LA' },
			    					{ 'label': 'Maine', 'value': 'ME' },
			    					{ 'label': 'Maryland', 'value': 'MD' },
			    					{ 'label': 'Massachusetts', 'value': 'MA' },
			    					{ 'label': 'Michigan', 'value': 'MI' },
	    							{ 'label': 'Minnesota', 'value': 'MN' },
			    					{ 'label': 'Missouri', 'value': 'MO' },
			    					{ 'label': 'Mississippi', 'value': 'MS' },
			    					{ 'label': 'Montana', 'value': 'MT' },
			    					{ 'label': 'Nebraska', 'value': 'NE' },
			    					{ 'label': 'Nevada', 'value': 'NV' },
			    					{ 'label': 'New Hamshire', 'value': 'NH' },
			    					{ 'label': 'New Jersey', 'value': 'NJ' },
			    					{ 'label': 'New Mexico', 'value': 'NM' },
			    					{ 'label': 'New York', 'value': 'NY' },
			    					{ 'label': 'North Carolina', 'value': 'NC' },
			    					{ 'label': 'North Dakota', 'value': 'ND' },
			    					{ 'label': 'Ohio', 'value': 'OH' },
			    					{ 'label': 'Oklahoma', 'value': 'OK' },
			    					{ 'label': 'Oregon', 'value': 'OR' },
			    					{ 'label': 'Pennsylvania', 'value': 'PA' },
			    					{ 'label': 'Rhode Island', 'value': 'RI' },
			    					{ 'label': 'South Carolina', 'value': 'SC' },
			    					{ 'label': 'South Dakota', 'value': 'SD' },
			    					{ 'label': 'Tennessee', 'value': 'TN' },
			    					{ 'label': 'Texas', 'value': 'TX' },
			    					{ 'label': 'Utah', 'value': 'UT' },
	    							{ 'label': 'Vermont', 'value': 'VT' },
			    					{ 'label': 'Virginia', 'value': 'VA' },
			    					{ 'label': 'Washington', 'value': 'WA' },
			    					{ 'label': 'West Virginia', 'value': 'WV' },
			    					{ 'label': 'Wisconsin', 'value': 'WI' },
			    					{ 'label': 'Wyoming', 'value': 'WY' }],
			    // emailMask: emailMask,
	    	}
	    },
	    components: {
	    	Question,
	    	QuestionResults,
	    	QCard,
	    	QButton,
	    	QSelect,
	    	// QMaskedInput,
	    	QInput,
	    }
	}
</script>
<style lang="sass" scoped>
	@import '~@/assets/css/mq.sass'
	h3
	    display: inline-block
	    font-weight: 600
	    margin: 0px 20px 0px 0px
	.content-title
		font-weight: 600
		font-size: 40px
		color: #2acf6c
		text-align: center
		line-height: 1.1
		@include non-desktop
			font-size: 30px
</style>