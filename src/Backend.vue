<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Header from "./Components/Backend/header"
import Navigation from "./Components/Navigation"

export default {
  components:{Header,Navigation},
  name: 'App'
}
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
