<template>
  <div>
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <b-container>
          <div class="logo" />
          <a-menu
            theme="dark"
            mode="horizontal"
            :defaultSelectedKeys="['2']"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1">所有转换类型</a-menu-item>
            <a-menu-item key="2">GitHub</a-menu-item>
            <a-menu-item key="3">支持我们！</a-menu-item>
          </a-menu>
        </b-container>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">A <a href="https://github.com/save1s">Save1s</a> Project.</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.ant-layout {
  background-color: #ffffff !important;
}
</style>
