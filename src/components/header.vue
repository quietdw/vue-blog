<template>
    <header :class="{login:isLogin,nologin:!isLogin}">
        <template v-if="!isLogin">
            <h1><router-link to="/">Let's share</router-link></h1>
            <p>精品博客汇聚</p>
            <div class="btns">
                <router-link to="/login"><el-button>登录</el-button></router-link>
                <router-link to="/register"><el-button>注册</el-button></router-link>
            </div>
        </template>
        <template v-if="isLogin">
            <h1><router-link to="/">Let's share</router-link></h1>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-edit1"></use>
                </svg>
            </span>
            <div class="user">
                <img :src="user.avatar" :alt="user.username">
                <ul>
                    <li><router-link to="/my">我的</router-link></li>
                    <li><a href="#" @click="onLogout">注销</a></li>
                </ul>
            </div>
        </template>
    </header>
</template>

<script>
/* eslint-disable */ 
//获取vuex里的数据
import auth from '../api/auth'
import {mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {}
    },
    created(){ // 生命周期，数据OK，模板还未渲染，比如ajax获取数据
        this.checkLogin()
    }
    ,
    computed:{
         ...mapGetters([
            'user',
            'isLogin'
         ])
    }
    ,
    methods:{
        ...mapActions([
            'checkLogin',
            'logout'
        ]),
        onLogout(){
            this.logout()
        }
    }

}
</script>

<style lang="less">
@import url(../assets/base.less);

header{background-color: @bgColor;padding-bottom: 30px;display: grid;color: #fff;
    h1 {text-transform: uppercase;font-weight: bold;}
}

header.nologin {
    color: #fff;
  h1 {padding: 20px 0;}
  p {padding-bottom:  10px;}
  .btns {margin-top: 20px;
    .el-button{
        margin: 20px;
    }
  }
}
header.login {
    display: flex;
    align-items:center;
    justify-content:flex-end;
    padding-bottom: 0px;
    h1 {flex-grow: 1;text-align: left;}
    span {color: #fff;}
    svg {
        width: 30px;
        height: 30px;
        fill: aliceblue;
    }
    .user {
    position: relative;
    margin-right: 15px;
    img {width: 40px;margin: 10px;}
    ul{
        position: absolute;
        width: 100%;
        left: 100%;
        top: 10px;
        li{
            color: #fff;

        }
    }
    }
}
</style>

