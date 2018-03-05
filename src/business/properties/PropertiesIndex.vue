<template>
	<div>
		<div>属性设置栏</div>

		<option-setter v-for="(cfg,index) in cfgs" :defaultdata="comptData[cfg.name]" :title="cfg.nameCN" :cfg='cfg.options' :key="index" />
	</div>
  
</template>

<script>
import OptionSetter from "@/components/OptionSetter"
import Config from "bus/properties/Config"
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
  name: 'properties',
  props: {
    comptName: {//componentName，下同
      type: String,
      default: 'compt1'
    },
    comptCfg: {
      type: Number,
      default: 0
    },
    comptData: {
      type: Object,
      default: ()=>{{}}
    },
  },
  components : {
  	'option-setter' : OptionSetter
  },
  data(){
  	let _this = this;
  	return {
  		colors : 'ffffff',
  		cfgs : Config[this.comptName],
  	}
  },
  computed : {
  	
  },
  methods : {
		changenumber(value){
			console.log("asdf");
			console.log(value);
		},
		getVal(){
	    	console.log(this.globleAttr);
	    }
	}
}
</script>