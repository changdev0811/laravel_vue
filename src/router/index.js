import Vue from 'vue'
import Router from 'vue-router'
import Lp2new from '@/components/apps/lp2new/Lp2new'
import Lp2new_router from '@/components/apps/lp2new/router'

import Anew from '@/components/apps/anew/Anew'
import Anew_router from '@/components/apps/anew/router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/lp2new',
			component: Lp2new,
			children: Lp2new_router,
		},
		{
			path: '/anew',
			component: Anew,
			children: Anew_router,
		},
	]
})
