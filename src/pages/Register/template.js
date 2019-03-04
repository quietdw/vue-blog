import {mapActions} from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    ...mapActions(['register']),

    onCreate () {
      if (this.password === this.passwordConfirm) {
        this.register({'username': this.username, 'password': this.password})
          .then(() => {
            this.$router.push({path: '/'}) // 跳转到首页
          })
      } else {
        this.$message({message: '两次密码输入不一致', type: 'warning'})
      }
    }
  }

}
