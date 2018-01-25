/**
 * Created by lichun on 2017/5/10.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'


const Activity01 = () => import('~pages/Activity01' /* webpackChunkName: "activity01" */)


Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/activity01',
            component: Activity01
        },
        {
            path: '*',
            redirect: '/activity01'
        }

    ]
})
