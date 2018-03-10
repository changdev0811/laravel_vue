import QFHome from '@/components/apps/lp2new/quiz_forms/QFHome'
import QFZipcode from '@/components/apps/lp2new/quiz_forms/QFZipcode'
import QFHometype from '@/components/apps/lp2new/quiz_forms/QFHometype'
import QFPrimaryuse from '@/components/apps/lp2new/quiz_forms/QFPrimaryuse'
import QFHomeagentfound from '@/components/apps/lp2new/quiz_forms/QFHomeagentfound'
import QFAdditionalcash from '@/components/apps/lp2new/quiz_forms/QFAdditionalcash'
import QFEstimatedvalue from '@/components/apps/lp2new/quiz_forms/QFEstimatedvalue'
import QFEstimatedvaluepayment from '@/components/apps/lp2new/quiz_forms/QFEstimatedvaluepayment'
import QFRefiinfo from '@/components/apps/lp2new/quiz_forms/QFRefiinfo'
import QFFirstandsecond from '@/components/apps/lp2new/quiz_forms/QFFirstandsecond'
import QFMortgagebalance from '@/components/apps/lp2new/quiz_forms/QFMortgagebalance'
import QFMortgagetwobalance from '@/components/apps/lp2new/quiz_forms/QFMortgagetwobalance'
import QFCreditstatus from '@/components/apps/lp2new/quiz_forms/QFCreditstatus'
import QFContactinfo from '@/components/apps/lp2new/quiz_forms/QFContactinfo'

export default [
	{
		path: '',
		name: 'QFHome',
		component: QFHome
	},
	{
		path: 'zipcode',
		name: 'QFZipcode',
		component: QFZipcode
	},
	{
		path: 'hometype',
		name: 'QFHometype',
		component: QFHometype
	},
	{
		path: 'primaryuse',
		name: 'QFPrimaryuse',
		component: QFPrimaryuse
	},
	{
		path: 'homeagentfound',
		name: 'QFHomeagentfound',
		component: QFHomeagentfound
	},
	{
		path: 'additionalcash',
		name: 'QFAdditionalcash',
		component: QFAdditionalcash
	},
	{
		path: 'refiinfo',
		name: 'QFRefiinfo',
		component: QFRefiinfo
	},
	{
		path: 'estimatedvalue',
		name: 'QFEstimatedvalue',
		component: QFEstimatedvalue
	},
	{
		path: 'estimatedvaluepayment',
		name: 'QFEstimatedvaluepayment',
		component: QFEstimatedvaluepayment
	},
	{
		path: 'firstandsecond',
		name: 'QFFirstandsecond',
		component: QFFirstandsecond
	},
	{
		path: 'mortgagebalance',
		name: 'QFMortgagebalance',
		component: QFMortgagebalance
	},
	{
		path: 'mortgagetwobalance',
		name: 'QFMortgagetwobalance',
		component: QFMortgagetwobalance
	},
	{
		path: 'creditstatus',
		name: 'QFCreditstatus',
		component: QFCreditstatus
	},
	{
		path: 'contactinfo',
		name: 'QFContactinfo',
		component: QFContactinfo
	},
]