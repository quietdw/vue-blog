<template>
  <header :class="{login:isLogin,nologin:!isLogin}">
    <template v-if="!isLogin">
      <h1>
        <router-link to="/">Build better together</router-link>
      </h1>
      <div class="btns">
        <router-link to="/login">
          <el-button>Sign in</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>Sign up</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>
        <router-link to="/">Let's share</router-link>
      </h1>
      <router-link to="/create">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zengjia"></use>
        </svg>
      </router-link>
      <div class="user">
        <img :src="user.avatar" :alt="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li>
            <a href="#" @click="onLogout">注销</a>
          </li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
/* eslint-disable */

//获取vuex里的数据
import auth from "../api/auth";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    // 生命周期，数据OK，模板还未渲染，比如ajax获取数据
    this.checkLogin();
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  },
  methods: {
    ...mapActions(["checkLogin", "logout"]),
    onLogout() {
      this.logout();
    }
  }
};
</script>

<style lang="less">
@import url(../assets/base.less);

header {
  background-color: @bgColor;
  padding-top: 18px;
  padding-bottom: 18px;
  display: grid;
  grid: auto / 1fr 160px;
  color: #fff;
  h1 {
    font-weight: bold;
  }
}

header.nologin {
  color: #fff;
  h1 {
      text-align: left;
  }
  .btns {
      display: flex;
      justify-content: space-around;
      align-items: center;
    a {
        .el-button {
        padding: 8px 10px;
        font-size: 16px;
            transition: .4s;
        }
    }
    a:nth-child(1) {
      .el-button {
          padding:2px;
        background: @bgColor;
        color: #fff;
        border: none;

      }
    }
     a:nth-child(2) {
      .el-button {
        background: @bgColor;
        color: #fff;
        border: solid 1px #fff;
      }
    }
    .el-button:nth-child(1):focus,
    .el-button:nth-child(1):hover {
      color: hsla(0, 0%, 100%, 0.75);
    }
  }
}
header.login {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 0px;
  h1 {
    flex-grow: 1;
    text-align: left;
  }
  span {
    color: #fff;
  }
  svg {
    width: 30px;
    height: 30px;
    fill: aliceblue;
  }
  .user {
    position: relative;
    margin-right: 15px;
    img {
      width: 40px;
      margin: 10px;
    }
    ul {
      position: absolute;
      width: 100%;
      left: 100%;
      top: 10px;
      li {
        color: #fff;
      }
    }
  }
}
</style>

