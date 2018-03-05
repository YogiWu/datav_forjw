<!-- 属性标签 by JESON 2018-2-28 -->
<!-- 分选择框和输入框、颜色选择器
使用：
<option-tag type='INPUT' name='宽度' :options="inputOpt" />
Select options
	{
		data: [{
          id: 0,
          text: 'enhancement'
        }, {
          id: 1,
          text: 'bug122'
        }], 
	 onchange : (val)=>{}
	}
input options
	{
		min : 3,
	    max : 10,
	    step : 1,
	    integer : false,
	    maxlength : 4,
	    onchange : (val)=>{}
	}
color picker options
  {
    head : 'Color Picker',
    disableFields : false,
    ok : (colorObj)=>{},
    cancel : (colorObj)=>{},
    onchange ；(colorObj)=>{}

  }
 -->
  }
<!-- <template>
	<div class="dt-option-tag">
		<span>{{this.name}}:</span>
		<input-number v-if="this.type === 'INPUT'" :options='options' :value="value"  />
		<my-select v-else  :options='options' :value="value"  />
	</div>
</template> -->

<script>

import InputNumber from "@/components/InputNumber"
import Select from "@/components/Select"
import {Photoshop} from "static/js/colorpicker"
import {merge} from "lodash"

export default {
  props: {
    name: {
      type: String,
      default: '名称'
    },
    type: {
      type: String,
      default: 'INPUT'
    },
    value: {
      type: String|Number,
      default: 0
    },
    options : {
    	type: Object,
      	default: ()=>{
      		return {};
      	}
    }
  },
  data () {
    return {
      // value : '1'
    }
  },
  components : {
  	'my-select' : {
  		props : {
  			options : {
		    	type: Object,
		      	default: ()=>{
		      		return {}
		    	}
		    },
        value: {
          type: String|Number,
          default: 'a'
        }
  		},
  		render(h){
  			let options = merge({
  				minimumResultsForSearch : -1,//取消搜索功能
  				data : [{
		          id: 0,
		          text: 'a'
		        }]
  			}, this.options);
  			return <Select option={options} init={this.value} />
  		}
  	},
  	'input-number' : {
  		props : {
  			options : {
		    	type: Object,
		      	default: ()=>{return {}}
		    },
        value: {
          type: String|Number,
          default: 0
        },
  		},
  		render(h){
  			let options = this.options;
  			return <InputNumber init={parseFloat(this.value)} onchange={options.onchange} max={options.max} min={options.min} />
  		}
  	},
    'color-picker' : {
        props : {
          options : {
            type: Object,
              default: ()=>{
                return {}
            }
          },
          value: {
            type: String|Number|Object,
            default: {hex: '#194d33'}
          }
        },
        render(h){
          let ok = this.options.ok || function(){console.log("ok")},
              cancel = this.options.cancel || function(){console.log("cancel")},
              onchange = this.options.onchange || function(){console.log("onchange")};
           return <Photoshop 
                    value={this.value} 
                    ok={ok} 
                    cancel={cancel} 
                    onchange={onchange}
                    disableFields = {this.options.disableFields}
                    head = {this.options.head||'Color Picker'} 
                  />
        }
    }
  },
  mounted () {
  },

  methods: {
      initTag(type){
        switch(type){
          case 'INPUT' :
            return <input-number options={this.options} value={this.value}  />;
            break;
          case 'SELECT' :
            return <my-select options={this.options} value={this.value}  />;
            break;
          case 'COLOR' :
            return <color-picker value={this.value} options={this.options}  />;
            break;

        }
      }
  },
  render(h){
    return  <div class="dt-option-tag">
              <span>{this.name}:</span>
              {this.initTag(this.type)}
            </div>
  }
}

</script>

<style>
.dt-option-tag {
	display: flex;
	align-content: center;
}
.dt-option-tag > span {
	padding-right: 5px; 
	align-self: center;
}
</style>
