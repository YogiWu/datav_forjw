<template>
  <div class="layer-list" @click="isChecked = !isChecked">
    <i class="layer-checkbox" :class="{layerCheckOn:isChecked}" v-model="isChecked"></i>
    <img :src="img" alt="">
  </div>
</template>
<style>
  .layer-list{
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #323949;
  }
  .layer-checkbox{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url("../assets/images/check_off.png") no-repeat;
  }
  .layerCheckOn{
    background: url("../assets/images/check_on.png") no-repeat;
  }
  .layer-list img{
    width: 1.2rem;
    height: .7rem;
  }
</style>
<script>
  export default {
    props:['img','isChecked'],
    data(){
      return{

      }
    },
    mounted(){

    }

  }
</script>
