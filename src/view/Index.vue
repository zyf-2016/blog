<template>
    <el-container>
        <b-aside></b-aside>
        <b-main></b-main>
    </el-container>
</template>
<script>
import BAside from 'components/BAside'
import BMain from 'components/Bmain'
export default {
    name: 'index',
    data () {
        return {
        // test: 'login'
        }
    },
    components: {
        BAside,
        BMain
    }
}
</script>

<style lang="less" scoped>
</style>