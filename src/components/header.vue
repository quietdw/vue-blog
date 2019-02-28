<template>
    <header :class="{login:isLogin,nologin:!isLogin}">
        <template v-if="!isLogin">
            <h1>Let's share</h1>
            <p>精品博客汇聚</p>
            <div class="btns">
                <el-button>登录</el-button>
                <el-button>注册</el-button>
            </div>
        </template>
        <template v-else="isLogin">
            <span>edit</span>
            <img src="https://jiangnana.fun/assets/images/avatar.jpg" alt="我是图片">
        </template>
    </header>
</template>

<script>
    export default {
        data(){
            return {isLogin:false}
        }
    }
</script>

<style lang="less">
@import url(../assets/base.less);

header{background-color: @bgColor;padding-bottom: 30px;display: grid;}

header.nologin {
    color: @textLighterColor;
  h1{text-transform: uppercase;}
}
header.login {
    display: flex;
    align-items:center;
    justify-content:flex-end;
    padding-bottom: 0px;
    span{color: @textLighterColor;}
    img{width: 40px;margin: 10px;}
}
</style>

