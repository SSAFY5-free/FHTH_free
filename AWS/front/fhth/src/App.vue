<template>
  <div id="app">
    <div id="nav" v-if="check == null">
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import {mapState} from "vuex"
import VueCookies from "vue-cookies"
export default {
  components: {
  }, methods : {
    check() {
      return VueCookies.get("accessToken")
    }
  },
  computed : {
      ...mapState("userInfo", ["accessToken"])
  },mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
