<template>
  <div class="index">
    <div class="imgBox">
      <img src="../assets/background.jpg" class="bgImg" alt />
      <div class="codeBox">
        <span class="code">{{code}}</span>
      </div>
    </div>
    <!-- <img alt="Vue logo" class="testRem" src="../assets/logo.png" /> -->
    <!-- <span class="testSpan">哈哈哈</span> -->
    <van-row class="iconNav">
      <van-col span="6">
        <div class="navCard" @click="storeClick()">
          <div class="iconBox qiye">
            <i class="iconfont icon-qiye"></i>
          </div>
          <span>企业官网</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="navCard" @click="storeClick()">
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
      class="telShow"
      v-model="telShow"
      :actions="actions"
      cancel-text="取消"
      description="全国咨询热线"
      close-on-click-action
      @select="callUp"
    />
    <!-- <span>{{code}}</span> -->
    <div class="rotateBox">
      <van-icon name="point-gift-o" color="#CCCCCC" class="rotateIcon" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import wx from "weixin-js-sdk";
export default {
  name: "index",
  components: {
    // HelloWorld
  },
  data() {
    return {
      telShow: false,
      actions: [{ name: "400-622-9988", color: "#2065DB" }],
      code: "No:10307074902574454134"
    };
  },
  created() {
    console.log("1234576");
    console.log(window.location);
    console.log(this.is_weixn());
    // let index = window.location.pathname.indexOf('=')
    // this.code = window.location.pathname.slice(index + 1)
    // if (this.is_weixn()) {i
      let index = window.location.href.indexOf("=");

      this.code = window.location.href.slice(index + 1).substring(0, 23).replace('%',':');
      this.share();
    // } else {
      // console.log("请在微信浏览器打开");
    // }
  },
  methods: {
    callUp(val) {
      console.log(val);
      // document.createElement()
      var a = document.createElement("a");
      a.setAttribute("href", "tel:400-622-9988");
      document.body.appendChild(a);
      a.click();
    },
    //判断是否是微信打开网页
    is_weixn() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    //分享功能
    share() {
      console.log("初始化分享");
      wx.config({
        debug: false,
        appId: "wx00537536ae3be6e2",
        timestamp: "1595147514",
        nonceStr: "E5GEnRJmhLcGXslY",
        signature: "8e5be2b92357ec51c309873b9716ac1fa074c8ee",
        jsApiList: [
          "getLocation", //获取经纬度
          "onMenuShareTimeline", //分享朋友圈
          "onMenuShareAppMessage", //分享给好友
          "onMenuShareQQ", //分享到QQ
          "onMenuShareWeibo" //分享腾讯微博
        ]
      });
      wx.ready(function() {
        //分享到朋友圈
        console.log("拉起分享");
        wx.updateTimelineShareData({
          title: "我想对你说", // 分享时的标题
          link:
            "http://super.gzzlfw.com/Home/Index?id=10307074902574454134&share=1", // 分享时的链接
          imgUrl: "http://super.gzzlfw.com/Content/image/share.jpg", // 分享时的图标
          success: function() {
            console.log("分享成功");
          },
          cancel: function() {
            console.log("取消分享");
          }
        });
        //分享给朋友
        wx.updateAppMessageShareData({
          // title: tit,
          // desc: '这件商品终于优惠了，每件只需' + pri_fx + '元',
          title: "我想对你说", // 分享时的标题
          link:
            "http://super.gzzlfw.com/Home/Index?id=10307074902574454134&share=1", // 分享时的链接
          imgUrl: "http://super.gzzlfw.com/Content/image/share.jpg", // 分享时的图标
          type: "",
          dataUrl: "",
          success: function() {
            console.log("分享成功");
            // alert('分享成功')
          },
          cancel: function() {
            console.log("取消分享");
          }
        });
      });
    },

    storeClick() {
      console.log("123");
      // alert('123')
      this.$notify({
        message: "敬请期待",
        color: "#ad0000",
        background: "#fff",
        className: "message"
      });
    }
  }
};
</script>


<style lang="scss" >
.index {
  .imgBox {
    width: 100%;
    position: relative;
    padding-bottom: 0;
    .codeBox {
      position: absolute;
      width: 100%;
      bottom: 3px;
      text-align: center;
      background-color: rgb(0, 0, 0, 0.4);
      .code {
        color: #fff;
        font-weight: 300 !important;
        font-size: 0.6rem;
      }
    }
  }
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
  @-webkit-keyframes changeright {
    0% {
      -webkit-transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  .rotateBox {
    position: fixed;
    // width: 1rem;
    // font-weight: 300;
    padding: 7px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    top: 20px;
    right: 5px;
    -webkit-animation: changeright 10s linear infinite;

    background-color: rgb(0, 0, 0, 0.5);
    .rotateIcon {
      font-size: 25px;
    }
  }
  .telShow {
    position: fixed;
    bottom: 0;
  }
  
}
// .van-notify{
//   position: fixed!important;
//   top: 45%!important;
//   left: 42.5%!important;
//   width: 2.5rem!important;
//   height: 1rem;
//   border-radius: .1rem!important;
// }
// .message{
//     position: fixed;
//     top: 45%;
//     left: ;
//   }
</style>