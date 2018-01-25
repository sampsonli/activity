/**
 * Created by lichun on 2017/1/19.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

const state = {

}
const mutations = {


}
const actions = {

}

export default () => new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        user,
    }
})
