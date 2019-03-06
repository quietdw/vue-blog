<template>
  <div id="detail">
    <div class="author">
      <img :src="user.avatar" :alt="user.username">
      <h4>{{title}}</h4>
      <p><router-link :to="`/user/${user.id}`" >{{user.username}}</router-link> <span>{{friendlyDate(createdAt)}}</span></p>
    </div>
    <div class="description">
      {{description}}
    </div>
    <div class="article" v-html="marked"></div>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./template.less' lang="less"></style>
