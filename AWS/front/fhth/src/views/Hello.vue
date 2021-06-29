<template>
  <div id="Hello">
    <div id="nav" v-if="data.accessToken == null">
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  components: {
  }, 
  computed : {
      ...mapState({
      data: state => state.userInfo
    }),
  },mounted() {
    console.log(this.data)
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
