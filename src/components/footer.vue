<template>
    <footer>
        <p>© 2019 Jiang OpenSource:<a href="https://github.com/quietdw/vue-blog">GitHub</a>
            <a href="https://github.com/quietdw/vue-blog"><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-github"></use>
</svg></a>
        </p>
    </footer>
</template>

<style lang="less" scoped>
@import url(../assets/base.less);

footer {
    padding: 10px;
  align-self: end;
  background-color: #fafbfc;
  color:#666;
  font-size: 13px;
  padding:  24px 16px;
  text-align: left;
  p {
      a{
              svg{
          width: 2em;
          height: 2em;
          fill: #959da5;
      }
      }
      a:hover{
          color: #0366d6;
          text-decoration: underline;
      }
      a:nth-child(2){
          float: right;
      }
  
  }
}
</style>
