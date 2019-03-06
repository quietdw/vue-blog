<template>
  <div id="edit">
    <h4>标题</h4>
    <el-input  placeholder="请输入标题" v-model="title"></el-input>
    <p class="message">限30个字</p>
    <h4>简介</h4>
    <el-input  type="textarea" :rows="2" v-model="description" :autosize='{minRows:2,maxRows:4}'></el-input>
    <p class="message">限30个字</p>
    <h4>内容</h4>
    <el-input  type="textarea" :rows="20" v-model="content" :autosize='{minRows:4,maxRows:20}'></el-input>
    <p class="message">限30个字</p>
    <p class="switch">是否展示到首页<el-switch　v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch></p>
    <el-button type="primary" plain @click="onEdit">修改并提交</el-button>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./template.less' lang="less"></style>
