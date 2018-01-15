<template>
  <div class="main-container">
    <toolbar />
    <sidenav />
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Sidenav from './components/Sidenav'
export default {
  components:{
    Toolbar,
    Sidenav
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
