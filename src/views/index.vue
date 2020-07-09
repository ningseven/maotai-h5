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
          <span>企业官网</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="navCard">
          <div class="iconBox shangcheng">
            <i class="iconfont icon-shangcheng"></i>
          </div>
          <span>线上商城</span>
        </div>
      </van-col>
      <van-col span="6">
        <a
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=MjM5MjY0NjY4MA==&amp;scene=126&amp;bizpsid=0#wechat_redirect"
          class="aJump"
        >
          <div class="navCard">
            <div class="iconBox weixin">
              <i class="iconfont icon-weixin"></i>
            </div>
            <span>微信公众号</span>
          </div>
        </a>
      </van-col>
      <van-col span="6">
        <div class="navCard" @click="telShow=true">
          <div class="iconBox dianhua">
            <i class="iconfont icon-dianhua"></i>
          </div>
          <span>联系我们</span>
        </div>
      </van-col>
    </van-row>
    <div class="cutOffRule"></div>

    <div class="bottom">
      <van-row>
        <van-col span="1" offset="1">
          <span class="verticalBar"></span>
        </van-col>
        <van-col span="20">
          <h2 class="bottomTitle">贵州茅台集团白金酒公司</h2>
        </van-col>
      </van-row>

      <van-row class="mt-2 fs-normal">
        <van-col span="2" offset="3" class="colorGray">品类</van-col>
        <van-col span="10" offset="3">白金</van-col>
      </van-row>
      <van-row class="mt-2 fs-normal">
        <van-col span="2" offset="3" class="colorGray">类型</van-col>
        <van-col span="10" offset="3">酒类</van-col>
      </van-row>
      <van-row class="mt-2 fs-normal">
        <van-col span="2" offset="3" class="colorGray">厂商</van-col>
        <van-col span="14" offset="3">贵州茅台酒厂(集团)白金酒有限责任公司</van-col>
      </van-row>

      <div class="bottomImg">
        <img
          style="width:100%"
          src="http://supermanage.gzzlfw.com/Content/update/201906/10/201906101413579356.jpg"
          alt
        />
      </div>
    </div>

    <van-action-sheet
      v-model="telShow"
      :actions="actions"
      cancel-text="取消"
      description="全国咨询热线"
      close-on-click-action
      @select="callUp"
    />
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
    return {
      telShow: false,
      actions: [{ name: "400-622-9988", color: "#2065DB" }]
    };
  },
  methods: {
    callUp(val) {
      console.log(val);
      // document.createElement()
      var a = document.createElement("a");
      a.setAttribute("href", "tel:400-622-9988");
      document.body.appendChild(a);
      a.click();
    }
  }
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
    text-align: center;
    // }
    margin-top: 0.3rem;
    .navCard {
      margin: 0 auto;
      // width: 1.1rem;
      width: 100%;
      span {
        display: block;
        margin-top: 0.3rem;
      }
    }
    .iconBox {
      width: 0.9rem;
      height: 0.85rem;
      padding-top: 0.1rem;
      margin: 0 auto;
      border-radius: 50%;
    }
    .qiye {
      background-color: #63beee;
    }
    .shangcheng {
      background-color: #e56c71;
    }
    .weixin {
      background-color: #3fc7a3;
    }
    .dianhua {
      background-color: #e99e22;
    }
  }
  .cutOffRule {
    width: 98%;
    margin: 0.4rem auto;
    background-color: #e7eaed;
    height: 0.2rem;
  }
  .bottom {
    .verticalBar {
      display: block;
      width: 0.12rem;
      height: 0.7rem;
      background-color: #3fc7a3;
    }
    .bottomTitle {
      display: inline;
      font-weight: 400;
    }
    .bottomImg {
      margin-bottom: 1.5rem;
    }
  }
}
</style>