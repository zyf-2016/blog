<template>
    <el-header height="140px">
        <router-link to="/index">
            <img src="../assets/images/logo.png" alt="网站logo">
        </router-link>
    </el-header>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      // test: 'login'
    }
  }
}
</script>

<style lang="less" scoped>
    body {
        .el-header {
            padding: 44px 20px 20px 20px;
        }

    }
    a,img {
        display: inline-block;
        height: 80px;
    }
</style>