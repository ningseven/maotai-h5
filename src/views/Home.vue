<template>
  <div class="home">
    <img alt="Vue logo" class="testRem" src="../assets/logo.png" />
    <span class="testSpan">哈哈哈</span>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
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
.testRem {
  width: 2rem;
}
.testSpan {
  font-size: 0.8rem;
}
</style>