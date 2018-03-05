<template>
    <section class="dt-right">
      <div class="dt-header flex-sb">
        <div class="dt-header-l">
          公告
        </div>
        <div class="dt-header-r">
          登录信息
        </div>
      </div>
      <div class="dt-content">
        <div class="dt-content-header">
          <div class="f18">
            我的可视化 <span class="dt-visual-num">7个</span>
          </div>
          <div class="dt-visual-search-box flex">
            <div class="dt-circle-bg flex-a-center">
              <img src="../../assets/images/filter.png" alt="">
            </div>
            <div class="dt-circle-bg flex-a-center">
              <img src="../../assets/images/like.png" alt="">
            </div>
            <div class="dt-search-cell">
              <input class="dt-visual-search" type="text">
              <span class="dt-line">|</span>
              <img class="dt-search-icon" src="../../assets/images/search.png" alt="">
            </div>
          </div>
        </div>
        <ul class="dt-visual-list">
          <li class="flex-d-v"><a href="" target="_blank"><i class="dt-add-visual-icon"></i><span>新建可视化</span></a></li>
          <li><img src="" alt=""></li>
        </ul>
      </div>
    </section>
</template>

<script>
 import "./css/index.css";
  export default {
    name: 'myview',
    data () {
      return {

      }
    }
  }
</script>