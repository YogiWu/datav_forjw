<!-- 属性生成器 by JESON 2018-2-28 -->
<!-- 
	根据config生成多行属性配置卡
 -->

<script>

import OptionTag from "@/components/OptionTag"


export default {
  props: {
  	title : {
    	type : String,
    	default : '属性设置'
    },
    defaultdata : {
      type : Object,
      default : ()=> {return {}}
    },
    cfg : {
    	type : Array,
    	default : ()=> {return []}
    }
  },

  data () {
    return {}
  },
  components : {
  	'option-tag' : OptionTag,
  },
  methods: {
    
  },
  render(h){
  	return  <div class="dt-option-setter">
				<span>{this.title}</span>
				<div>
					{this.cfg.map((val)=>{
						return <option-tag type={val.type} value={this.defaultdata[val.name]} name={val.nameCN} options={val.options} />
					})}
				</div>
			</div>
  }
}
</script>
