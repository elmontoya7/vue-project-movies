<template>
  <div class="menu">
    <ul>
      <li :selected="currentPath == item.path" v-for="(item, index) in menuItems"
      @click="navigateTo(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [{path:'/',name:'Movies'},{path:'/tv',name:'Series'}],
        currentPath: this.$route.path || ''
      }
    },
    methods: {
      navigateTo(item) {
        this.currentPath = item.path;
        this.$router.push({path:item.path});
      }
    }
  }
</script>

<style scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  padding: 100px 30px 30px;
  background-color: #FF4273;
  height: 100%;
  width: 166px;
  box-sizing: border-box;
  color: #f2f2f2;
  z-index: 1;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.menu > ul > li:not(:last-child) {
  margin-bottom: 30px;
}

.menu > ul > li:hover {
  cursor: pointer;
  color: #FEFF89;
}

.menu > ul > li[selected] {
  color: #FEFF89;
}
</style>
