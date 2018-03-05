<template>
  <div id="index" class="dt-index">
    <aside class="dt-left">
      <div class="dt-logo-box f12">
        <img class="dt-logo" src="../../assets/images/logo.png" alt="">
        <img  class="dt-name" src="../../assets/images/dataV.png" alt="">
        <span class="dt-version f12">V<small class="f10">1.0</small></span>
      </div>
      <ul class="dt-nav flex-d-v">
        <router-link to="/"><li>我的可视化</li></router-link>
        <router-link to="/test1"><li>我的数据</li></router-link>
        <router-link to="/test2"><li>我的模板</li></router-link>
      </ul>
    </aside>
    <router-view/>
  </div>
</template>

<script>
  import "../../../static/css/common.css";

  export default {
    name: 'App'
  }
</script>

<style>

</style>
