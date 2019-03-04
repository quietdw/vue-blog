import {mapActions} from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''

    }
  },
  methods: {
    ...mapActions(['login']),

    onSubmit () {
      this.login({'username': this.username, 'password': this.password})
        .then(() => {
          this.$router.push({path: '/'}) // 跳转到首页
        })
    }
  }

}
