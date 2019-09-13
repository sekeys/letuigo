<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
//import Header from "./Components/Header"
import Navigation from "./Components/Navigation"

import Header from "./Components/header"

export default {
  components:{Header,Navigation},
  name: 'App'
}
//#2c3e50;
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
  
  width: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
