import Vue from 'vue'
import Router from 'vue-router'
import QFHome from '@/components/quiz_forms/QFHome'
import QFZipcode from '@/components/quiz_forms/QFZipcode'
import QFHometype from '@/components/quiz_forms/QFHometype'
import QFPrimaryuse from '@/components/quiz_forms/QFPrimaryuse'
import QFHomeagentfound from '@/components/quiz_forms/QFHomeagentfound'
import QFAdditionalcash from '@/components/quiz_forms/QFAdditionalcash'
import QFEstimatedvalue from '@/components/quiz_forms/QFEstimatedvalue'
import QFEstimatedvaluepayment from '@/components/quiz_forms/QFEstimatedvaluepayment'
import QFRefiinfo from '@/components/quiz_forms/QFRefiinfo'
import QFFirstandsecond from '@/components/quiz_forms/QFFirstandsecond'
import QFMortgagebalance from '@/components/quiz_forms/QFMortgagebalance'
import QFMortgagetwobalance from '@/components/quiz_forms/QFMortgagetwobalance'
import QFCreditstatus from '@/components/quiz_forms/QFCreditstatus'
import QFContactinfo from '@/components/quiz_forms/QFContactinfo'
import QFResult from '@/components/quiz_forms/QFResult'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'QFHome',
			component: QFHome
		},
		{
			path: '/zipcode',
			name: 'QFZipcode',
			component: QFZipcode
		},
		{
			path: '/hometype',
			name: 'QFHometype',
			component: QFHometype
		},
		{
			path: '/primaryuse',
			name: 'QFPrimaryuse',
			component: QFPrimaryuse
		},
		{
			path: '/homeagentfound',
			name: 'QFHomeagentfound',
			component: QFHomeagentfound
		},
		{
			path: '/additionalcash',
			name: 'QFAdditionalcash',
			component: QFAdditionalcash
		},
		{
			path: '/refiinfo',
			name: 'QFRefiinfo',
			component: QFRefiinfo
		},
		{
			path: '/estimatedvalue',
			name: 'QFEstimatedvalue',
			component: QFEstimatedvalue
		},
		{
			path: '/estimatedvaluepayment',
			name: 'QFEstimatedvaluepayment',
			component: QFEstimatedvaluepayment
		},
		{
			path: '/firstandsecond',
			name: 'QFFirstandsecond',
			component: QFFirstandsecond
		},
		{
			path: '/mortgagebalance',
			name: 'QFMortgagebalance',
			component: QFMortgagebalance
		},
		{
			path: '/mortgagetwobalance',
			name: 'QFMortgagetwobalance',
			component: QFMortgagetwobalance
		},
		{
			path: '/creditstatus',
			name: 'QFCreditstatus',
			component: QFCreditstatus
		},
		{
			path: '/contactinfo',
			name: 'QFContactinfo',
			component: QFContactinfo
		},
		{
			path: '/result',
			name: 'QFResult',
			component: QFResult
		},
	]
})
