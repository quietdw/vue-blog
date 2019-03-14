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
          this.$router.push({path: this.$route.query.redirect || '/'}) // 跳转到首页
        })
    },
    onReset () {
      this.username = ''
      this.password = ''
    }
  }

}
