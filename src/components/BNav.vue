<template>
    <el-main>
        <el-menu :default-active="activeIndex"  background-color="#545c64"
            text-color="#fff" active-text-color="#409EFF" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/index">网站首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/album">我的相册</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/article">技术专栏</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/contact">和我联系</router-link></el-menu-item>
        </el-menu>
        <router-view></router-view>
    </el-main>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
    padding: 0;
}
.el-menu-item {
    padding: 0;
    a {
        display: block;
        width: ~'calc(100% - 40px)';
        height: ~'calc(100% + 2px)';
        padding: 0 20px;
        text-decoration: none;
    }
}
</style>