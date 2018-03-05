import Vue from 'vue'
import Vuex from "vuex"
import rootActions from "store/Actions"
import rootGetters from "store/Getters"
import rootMutations from "store/Mutations"

import HomeStore from "bus/home/HomeStore"
import PropertiesStore from "bus/properties/PropertiesStore"

Vue.use(Vuex);

export default new Vuex.Store({
	state : {},
	getters : rootGetters,
	mutations : rootMutations,
	actions : rootActions,
	modules : {
		//分模块保存状态
		home : HomeStore,
		properties : PropertiesStore
	}
})