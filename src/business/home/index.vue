<template>
    <section class="dt-right">
      <div class="dt-header flex-sb">
        <div class="dt-header-l flex-v-center">
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
          <li class="flex-d-v"><a href="/dataV" target="_blank"><i class="dt-add-visual-icon"></i><span>新建可视化</span></a></li>
          <li class="dt-visual-child">
            <a href=""><img src="../../assets/images/test.jpg" alt=""></a>
            <div class="flex-v-center p10"><i class="dt-visual-child-edit"></i><input class="dt-visual-child-name f14" type="text" value="遵义市公安大数据-治安"></div>
            <div class="dt-visual-child-ctrl flex-sb"><span class="dt-visual-preview">预览</span><span class="dt-visual-publish">发布</span><span class="dt-visual-del">删除</span></div>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
 import "./css/index.css";
  export default {
    name: 'index',
    data () {
      return {

      }
    }
  }
</script>

