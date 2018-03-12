import QFLoanType from '@/components/apps/anew/quiz_forms/QFLoanType'
import QFRefAdditionalCash from '@/components/apps/anew/quiz_forms/QFRefAdditionalCash'
import QFRefHomeLocation from '@/components/apps/anew/quiz_forms/QFRefHomeLocation'
import QFRefHomeValue from '@/components/apps/anew/quiz_forms/QFRefHomeValue'
import QFRefMortgages from '@/components/apps/anew/quiz_forms/QFRefMortgages'
import QFRefMortgageInfo from '@/components/apps/anew/quiz_forms/QFRefMortgageInfo'
import QFRefMortgageTwoInfo from '@/components/apps/anew/quiz_forms/QFRefMortgageTwoInfo'
import QFNhHomeLocation from '@/components/apps/anew/quiz_forms/QFNhHomeLocation'
import QFNhHomeType from '@/components/apps/anew/quiz_forms/QFNhHomeType'
import QFNhHomeUse from '@/components/apps/anew/quiz_forms/QFNhHomeUse'
import QFNhHomeFound from '@/components/apps/anew/quiz_forms/QFNhHomeFound'
import QFNhHomeValue from '@/components/apps/anew/quiz_forms/QFNhHomeValue'
import QFCreditRating from '@/components/apps/anew/quiz_forms/QFCreditRating'
import QFEmailSubmit from '@/components/apps/anew/quiz_forms/QFEmailSubmit'

export default [
	{
		path: '',
		name: 'QFLoanType',
		component: QFLoanType
	},
	{
		path: 'refadditionalcash',
		name: 'QFRefAdditionalCash',
		component: QFRefAdditionalCash
	},
	{
		path: 'refhomelocation',
		name: 'QFRefHomeLocation',
		component: QFRefHomeLocation
	},
	{
		path: 'refhomevalue',
		name: 'QFRefHomeValue',
		component: QFRefHomeValue
	},
	{
		path: 'refmortgages',
		name: 'QFRefMortgages',
		component: QFRefMortgages
	},
	{
		path: 'refmortgageinfo',
		name: 'QFRefMortgageInfo',
		component: QFRefMortgageInfo
	},
	{
		path: 'refmortgagetwoinfo',
		name: 'QFRefMortgageTwoInfo',
		component: QFRefMortgageTwoInfo
	},
	{
		path: 'nhhomelocation',
		name: 'QFNhHomeLocation',
		component: QFNhHomeLocation
	},
	{
		path: 'nhhometype',
		name: 'QFNhHomeType',
		component: QFNhHomeType
	},
	{
		path: 'nhhomeuse',
		name: 'QFNhHomeUse',
		component: QFNhHomeUse
	},
	{
		path: 'nhhomefound',
		name: 'QFNhHomeFound',
		component: QFNhHomeFound
	},
	{
		path: 'nhhomevalue',
		name: 'QFNhHomeValue',
		component: QFNhHomeValue
	},
	{
		path: 'creditrating',
		name: 'QFCreditRating',
		component: QFCreditRating
	},
	{
		path: 'emailsubmit',
		name: 'QFEmailSubmit',
		component: QFEmailSubmit
	},
]