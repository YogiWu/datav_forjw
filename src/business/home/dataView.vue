<template>
  <div class="dt-index">
    <aside class="dt-left flex-d-v" v-show="showLeft">
      <div class="dt-logo-box f12">
        <img class="dt-logo" src="../../assets/images/logo.png" alt="">
        <img  class="dt-name" src="../../assets/images/dataV.png" alt="">
        <span class="dt-version f12">V<small class="f10">1.0</small></span>
      </div>
      <div class="dt-dv-layer-box">
        <div class="dv-layer-name flex-v-center">图层</div>
        <div class="dv-bricks-box flex-sb">
          <span class="dv-layer-up dv-bricks"></span>
          <span class="dv-layer-down dv-layer-up dv-bricks"></span>
          <span class="dv-layer-top dv-bricks"></span>
          <span class="dv-layer-bottom dv-layer-top dv-bricks"></span>
        </div>
        <ul class="dv-layer-lists">
          <li v-for="item in layers">
            <layer :img="item.img" is-checked = "item.checked"></layer>
          </li>
        </ul>
      </div>
    </aside>
    <section class="dt-dv-right dt-right">
      <i class="dv-goLeft" :class="{goLeftHide:!showLeft}" @click="toggleLeft"></i>
      <div class="dv-header dt-header flex-sb">
        <div class="dt-header-l flex-a-center">
          <div class="dv-back flex-a-center">
            <img src="../../assets/images/toLeft1.png" alt="">
          </div>
          <div class="dt-widget-menu-box" :class="{active:showDrop}" @mouseenter="toggleDrop" @mouseleave="toggleDrop">
            <div class="flex-d-v"><img src="../../assets/images/icon1.png"/> <span class="dv-caret">图表</span></div>
            <ul class="dt-dropdown-menu">
              <li><a href="#">个人信息</a> </li>
              <li><a href="#">修改密码</a> </li>
            </ul>
          </div>
          <div class="dt-widget-menu-box">
            <div class="flex-d-v"><img src="../../assets/images/icon2.png"/> <span class="hz-caret">图片</span></div>
            <ul class="dt-dropdown-menu">
              <li><a href="#">个人信息</a> </li>
              <li><a href="#">修改密码</a> </li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <div class="dt-header-r">
          <div class="">

          </div>
        </div>
        <test></test>
      </div>
      <div class="dt-dv-main-wrap flex">
        <div class="dt-dv-edit-box flex-a-center">
          <img style="max-width: 100%" src="../../assets/images/test1.png" alt="">
        </div>
        <div class="dt-dv-edit-param">
          <div class="dv-param-box">
            <div class="dv-param-title" @click="toggleParam">全局</div>
            <div class="dv-param-list-box">
              <p>文本样式</p>
              <div>字体 <select>ddd</select></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import "./css/index.css";
  import "./css/main.css";
  import layer from '../../components/Layer.vue';
  import imgUrl from '../../assets/images/test.jpg'

  export default {
    name: 'dataView',
    data () {
      return {
        showLeft:true,
        showDrop:false,
        layers:[{checked:true,img:imgUrl}]
      }
    },
    components:{
      layer
    },
    methods:{
      toggleLeft(){
        this.showLeft = !this.showLeft;
      },
      toggleDrop(e){
        this.showDrop = !this.showDrop;
      },
      toggleParam(e){

      }
    }
  }
</script>


