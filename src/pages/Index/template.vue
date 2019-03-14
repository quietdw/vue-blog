<template>
  <div id="index">
    <section class="bolg-post" v-for="blog in blogs">
      <div class="item">
         <div class="avatar">
           <img :src="blog.user.avatar" :alt="blog.user.username">
         </div>
        <h3>
          <router-link :to="`detail/${blog.id}`"><span>{{blog.user.username}}</span>/{{blog.title}}</router-link>
        </h3>
        <span class="created">创建于{{friendlyDate(blog.createdAt)}}</span>
        <p>{{blog.description}}</p>
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
