<template>
  <div id="app">
    <div id="nav">
      <!-- <keep-alive>
      <router-link to="/"></router-link> 
      </keep-alive> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  // mounted(){
  //    this.$nextTick(function() {
  //       // 适配不同屏幕，改变根font-size值
  //         if (document.documentElement.clientWidth <= document.documentElement.clientHeight) {
  //             document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
  //         } else {
  //             document.documentElement.style.fontSize = document.documentElement.clientWidth / 13.34 + 'px';
  //         }
  //     })     
  // }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
