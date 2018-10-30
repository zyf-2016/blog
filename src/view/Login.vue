<template>
  <common>
    <el-form ref="form" label-width="54px">
        <span class="title">用户登录</span>
        <el-form-item label="用户名">
            <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">登录</el-button>
        </el-form-item>
    </el-form>
  </common>
</template>
<script>
import Common from 'components/Common'
export default {
    name: 'login',
    components: {
        Common
    },
    data () {
        return {
        // test: 'login'
        }
    }
}
</script>

<style lang="less" scoped>
    .title {
      color: #fff;
      display: block;
      text-align: center;
      font-size: 24px;
      padding-bottom: 20px;
    }
</style>