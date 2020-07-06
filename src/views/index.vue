<template>
  <div class="index">
    <img src="../assets/background.jpg" class="bgImg" alt />
    <!-- <img alt="Vue logo" class="testRem" src="../assets/logo.png" /> -->
    <!-- <span class="testSpan">哈哈哈</span> -->
    <van-row class="iconNav">
      <van-col span="6">
        <div class="navCard">
          <div class="iconBox qiye">
            <i class="iconfont icon-qiye"></i>
          </div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="navCard">
          <div class="iconBox shangcheng">
            <i class="iconfont icon-shangcheng"></i>
          </div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="navCard">
          <div class="iconBox weixin">
            <i class="iconfont icon-weixin"></i>
          </div>
        </div>
      </van-col>
      <van-col span="6">
        <div class="navCard">
          <div class="iconBox dianhua">
            <i class="iconfont icon-dianhua"></i>
          </div>
        </div>
      </van-col>
    </van-row>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "index",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" >
.index {
  .testRem {
    width: 2rem;
  }
  .bgImg {
    width: 100%;
  }
  .iconNav {
    // .van-col {
    //   text-align: center;
    // }
    .navCard {
      margin: 0 auto;
      width: 1.1rem;
    }
    .iconBox {
      width: 0.9rem;
      height: 0.9rem;
      padding-top: 0.1rem;
      margin: 0 auto;
      border-radius: 50%;
    }
    .qiye{
        background-color: #63BEEE;
    }
    .shangcheng{
        background-color: #E56C71;
    }
     .weixin{
        background-color: #3FC7A3;
    }
     .dianhua{
        background-color: #E99E22;
    }
  }

  .testSpan {
    font-size: 0.8rem;
  }
}
</style>