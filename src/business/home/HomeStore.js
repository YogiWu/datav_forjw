import {INCREMENT_AC, INCREMENT} from "store/Types"

export default {
	namespaced : true,
	state : {
		count : 0,
		time : 0
	},
	getters : {
		gts(state, getters, rootState, rootGetters){
			return state.count%2;
		}
	},
	mutations : {
		[INCREMENT](state, rootState){
			state.count ++;
			state.time++;
		}
	},
	actions : {
		[INCREMENT_AC]({dispatch, commit, getters, rootGetters}){
			setTimeout(()=>{
				commit(INCREMENT);
			}, 1000)
		}

	}
}