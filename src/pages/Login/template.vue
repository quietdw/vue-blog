<template>
  <div id="login">
    <h4>账号</h4>
    <input v-model="username" placeholder="请输入账号">
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="请输入密码" v-on:keyup.enter="onSubmit">
    <el-button type="primary" plain v-on:click="onSubmit">登录</el-button>
    <el-button type="primary" plain v-on:click="onReset">重置</el-button>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./template.less' lang="less"></style>
