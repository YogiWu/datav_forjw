import {
	INCREMENT_AC, 
	INCREMENT, 
	SET_ATTR,
	SAVE_ATTR_TO_STORE,
	INIT_CURRENT_DATA
} from "store/Types"
import {merge} from "lodash"
export default {
	namespaced : true,
	state : {
		common : {},
		text : {},
		time : 0,
		componentconfigs : {},
		componentdata : {
			comp1 : {
	  			common : {
	  				width : 4,
	  				height : 5,
	  				count : 'bug122'
	  			},
	  			textstyle : {
	  				width : 2,
	  				height : 8,
	  				pepol : 'Tom'
	  			}
	  		}
		},
		currentCompData : {}
		
	},
	getters : {
		/*gts(state, getters, rootState, rootGetters){
			return state.count%2;
		}*/
	},
	mutations : {
		[INIT_CURRENT_DATA](state, data){
			//设置默认数据
			state.currentCompData = state.componentdata.comp1;	
		},
		[SET_ATTR](state, data){
			//修改属性
			let obj = Object.create(state.currentCompData),
				typeObj = obj[data.type] ? obj[data.type] : {};
			//已存有就修改，不存在则加上
			obj[data.type] = merge(typeObj, {
				[data.key] : data.value
			});
			state.currentCompData = obj;	
		},
		[SAVE_ATTR_TO_STORE](state, data){
			//把currentCompData的数据保存到componentdata
			let obj = Object.create(state.componentdata);
			obj[data.name] = state.currentCompData;
			state.componentdata = obj;	
		}
	},
	actions : {
		/*[INCREMENT_AC]({dispatch, commit, getters, rootGetters}){
			setTimeout(()=>{
				commit(INCREMENT);
			}, 1000)
		}*/

	}
}