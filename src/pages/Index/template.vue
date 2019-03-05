<template>
  <div id="index">
    <section class="bolg-post" v-for="blog in blogs">
      <div class="item">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>
          {{blog.title}}
          <span>{{friendlyDate(blog.createdAt)}}</span>
        </h3>
        <p>{{blog.description}}<router-link :to="`detail/${blog.id}`">更多</router-link></p>
        
      </div>
    </section>
    <section class="pagination-container">
      <el-pagination
  background
  layout="prev, pager, next"
  @current-change="onPageChange"
  :current-page="currentPage"
  :total="total">
</el-pagination>
    </section>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less' src='./template.less'></style>
