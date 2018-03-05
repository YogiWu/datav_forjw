<template>
    <div id="dtMain">
      <router-view/>
    </div>
</template>

<script>
  import "static/css/common.css";
  export default {
    name: 'App'
  }
</script>

<style>
  #dtMain{
  width: 100%;
  height: 100%;
}
  .dt-index{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .dt-left{
    width: 1.8rem;
    height: 100%;
    color: #fff;
    background: #1d2331;
  }
  .dt-right{
    flex: 1;
    background: #f0f3f6;
  }
  .dt-logo-box{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: #fff;
  }
  .dt-logo{
    max-width: .28rem;
    margin-right: .1rem;
  }
  .dt-name{
    max-width: .82rem;
    margin-right: .06rem;
  }
  .dt-version{
    padding-top: .1rem;
  }
  .dt-nav a{
    width: 100%;
    text-align: center;
    line-height: 40px;
  }
  .dt-nav a.router-link-exact-active{
    background: #3e9fdd;
  }
</style>

