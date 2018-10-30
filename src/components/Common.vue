<template>
  <div class="container">
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      // test: 'login'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
.container {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/login.jpg") no-repeat;
  background-size: cover;
  .wrapper {
    width: 400px;
    position: relative;
    padding: 30px;
    border: 1px solid #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    &/deep/ .el-form-item__label {
      color: #fff;
    }
    &/deep/ .el-button {
      width: 100%;
    }
  }
}
</style>
