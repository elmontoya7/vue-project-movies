<template>
  <div class="toolbar">
    {{title}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Movier: tv and movies'
      }
    }
  }
</script>

<style scoped>
.toolbar {
  display: block;
  position: absolute;
  top: 0;
  font-size: 30px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 30px;
  background-color: #FF4273;
  color: #f2f2f2;
  font-weight: 700;
  z-index: 2;
}
</style>
