<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username">
      <h4>{{user.username}}</h4>
    </section>
    <section class="bolg-post">
      <div class="item" v-for="blog in blogs">
        <div class="date">
          <span>{{getDate(blog.createdAt,'day')}}</span>
          <span>{{getDate(blog.createdAt,'month')}}月</span>
          <span>{{getDate(blog.createdAt,'year')}}</span>
        </div>
        <h4>{{blog.title}}</h4>
       <router-link :to="`/detail/${blog.id}`">{{blog.description}}</router-link>
        <p class="edit"> 
          <el-button @click="onDelete(blog.id)" size="mini" type="danger" icon="el-icon-delete" circle></el-button>
          <router-link :to ="`/edit/${blog.id}`"><el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button></router-link>
        </p>
      </div>
      <section class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="onPageChange"
          :current-page="currentPage"
          :total="total"
        ></el-pagination>
      </section>
    </section>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./template.less' lang="less"></style>
