<template>
	<div>
		<div @click="getVal">date2 date2 date2 date12 date2 date2</div>
		  <p>{{colors}}</p>
		  <p>width:{{currentCompData.common.width}}</p>
		  <p>height:{{currentCompData.common.height}}</p>
		  
		  <!-- <color-picker v-model="colors" /> -->
		  <!-- <input-number :step='2' :min='10' :max='50' :maxlength='3' :onInputNumberChange='this.changenumber' /> -->
		  <!-- <my-select /> -->
		  <!-- <option-setter v-for="(cfg,index) in cfgs" :title="cfg.name" :cfg='cfg.options' :key="index" /> -->
		  <properties-tpl :comptData="componentdata['comp1']" />

		  <button @click="savedata">保存数据</button>
	</div>
  
</template>

<script>
import {Photoshop} from "static/js/colorpicker.min.js"
import InputNumber from "@/components/InputNumber"
import Select from "@/components/Select"
import OptionSetter from "@/components/OptionSetter"


import Config from "bus/properties/Config"
import PropertiesIndex from "bus/properties/PropertiesIndex"

import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import {SAVE_ATTR_TO_STORE, INIT_CURRENT_DATA} from "store/Types";

export default {
  name: 'Test2',
  components : {
  	'color-picker' : Photoshop,
  	'input-number' : InputNumber,
  	'my-select' : Select,
  	'option-setter' : OptionSetter,
  	'properties-tpl' : PropertiesIndex
  },
  data(){
  	let _this = this;
  	return {
  		colors : 'ffffff',
  		globleAttr : {
	      		test1 : 0,
	      		test2 : 0,
	      		test3 : 0,
	      },
	    cfgs : Config.compt1,
  		cfg2 : [
	      	{
	      		type : 'INPUT',
	      		name : 'test1',
	      		options : {
			      	min : 3,
				    max : 10,
				    onchange : (value)=>{_this.globleAttr.test1 = value;}
			    }
	      	},
	      	{
	      		type : 'INPUT',
	      		name : 'test2',
	      		options : {
			      	min : 3,
				    max : 10,
				    onchange : (value)=>{_this.globleAttr.test2 = value;}
			    }
	      	},
	      	{
	      		type : 'INPUT',
	      		name : 'test3',
	      		options : {
			      	min : 3,
				    max : 10,
				    onchange : (value)=>{_this.globleAttr.test3 = value;}
			    }
	      	}
	      ]
  	}
  },
  computed : {
  	...mapGetters('home',['gts']),
  	...mapState('properties',['common','time','componentdata','currentCompData'])
  },
  created(){
  	this.initCompData();
  },
  methods : {
  		...mapMutations('properties',{
  			saveProps : SAVE_ATTR_TO_STORE,
  			initCompData : INIT_CURRENT_DATA
  		}),
		changenumber(value){
			console.log("asdf");
			console.log(value);
		},
		getVal(){
	    	console.log("componentdata",this.componentdata);
	    	console.log("currentCompData",this.currentCompData);
	    },
	    savedata(){
	    	this.saveProps({name:"comp1"});
	    }
	}
}
</script>