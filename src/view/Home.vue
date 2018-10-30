<template>
    <el-container direction="vertical">
        <b-header></b-header>
        <b-nav></b-nav>
    </el-container>
</template>
<script>
import BHeader from 'components/BHeader'
import BNav from 'components/BNav'
export default {
    name: 'home',
    components: {
        BHeader,
        BNav
    },
    data() {
        return {
        // test: 'login'
        }
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background: #f8f8f8 url(/static/img/bg.0ecd64c.png) repeat-x')
    },
    beforeDestroy() {
        document.querySelector('body').removeAttribute('style')
    }
}
</script>

<style lang="less" scoped>

</style>