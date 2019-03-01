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
        <template v-else>
            <h1>Let's share</h1>
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-edit1"></use>
                </svg>
            </span>
            <img src="https://jiangnana.fun/assets/images/avatar.jpg" alt="我是图片">
        </template>
    </header>
</template>

<script>
export default {
    data () {
        return {isLogin:false}
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
  .btns {margin-top: 20px;}
  .el-button+.el-button {
    margin-left: 30px;
}
}
header.login {
    display: flex;
    align-items:center;
    justify-content:flex-end;
    padding-bottom: 0px;
    h1 {justify-self: start;}
    span {color: #fff;}
    img {width: 40px;margin: 10px;}
    svg {
        width: 30px;
        height: 30px;
        fill: aliceblue;
    }
}
</style>

