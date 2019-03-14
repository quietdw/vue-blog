<template>
  <div id="register">
     <h4>账号</h4>
    <input v-model="username" placeholder="请输入账号">
    <h4>输入密码</h4>
    <input v-model="password" type="password" placeholder="请输入密码">
    <h4>确认密码</h4>
    <input v-model="passwordConfirm" type="password" placeholder="请输入密码" v-on:keyup.enter="onCreate">
    <el-button type="primary" plain v-on:click="onCreate">创建</el-button>
     <p>已有账号？点击<router-link to="/login">这里</router-link>登录</p>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./template.less' lang='less'></style>
