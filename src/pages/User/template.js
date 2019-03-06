import blog from '@/api/blog'

export default {
  data () {
    return {
      blogs: [],
      user: {},
      currentPage: 1,
      total: 1
    }
  },
  created () {
    let userId = this.$route.params.userId
    this.currentPage = parseInt(this.$route.query.page, 10) || 1
    blog.getBlogsByUserId(userId, {page: this.currentPage})
      .then(res => {
        this.blogs = res.data
        if ( res.data.length > 0) {
          this.user = res.data[0].user // 有数据才有，防止报错
        }
        this.currentPage = res.page
        this.total = res.total
      })
  },
  methods: {
    onPageChange (newPage) {
      blog.getBlogsByUserId(this.user.id, {page: newPage})
        .then(res => {
          this.blogs = res.data
          this.user = res.data[0].user
          this.currentPage = res.page
          this.total = res.total
          this.$router.push({path: `/user/${this.user.id}`, query: {page: newPage}})
        })
    }
  }
}
