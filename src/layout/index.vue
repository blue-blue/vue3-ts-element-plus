<template>
  <el-container class="container-height">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Side />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Side from '@/components/Side'
export default {
  name: 'Layout',
  components: {
    Header,
    Side
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.container-height {
  height: 500px;
}
</style>
