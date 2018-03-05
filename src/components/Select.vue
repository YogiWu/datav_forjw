<!-- select标签 -->
<!-- option
{
    data: [{
          id: 0,
          text: 'enhancement'
        }, {
          id: 1,
          text: 'bug122'
        }], 
      onchange : (val)=>{}
 } -->

<template>
	<select ref="selectTag">
  </select>
</template>

<script>
import select from "static/js/select"
import $ from 'jquery'
import {find, filter} from "lodash"
export default {
  props: {
    option: {
      type: Object,
      default: ()=>{return {}}
    },
    init: {
      type: String|Number,
      default: 'a'
    }
  },

  data () {
    return {}
  },
  mounted () {
      if (Object.keys(this.option).length) {
        let myselect = new select($(this.$refs.selectTag),this.option),
            selectObj = filter(this.option.data, (obj)=>{return obj.text == this.init});//根据内容查找id
            
        if (selectObj[0]) {
          let id = String(selectObj[0].id);
          myselect.val(id);//设置默认值
        }
        $(this.$refs.selectTag).on("select2:select",(e)=>{
            this.option.onchange&&this.option.onchange(e.params.data);
        });
      }
  }
}
</script>

<style>

</style>
