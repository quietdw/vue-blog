import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      currentPage: 0
    }
  },
  created() {
    let currentPage = parseInt(this.$route.query.page, 10) || ''
    blog.getBlogs({
      page: currentPage
    }).then(res => {
      res.data.forEach((blog, key) => {
        if (!blog.user) {
          res.data.splice(key)
        }
      });
      this.blogs = res.data
      this.total = res.total
      this.currentPage = res.page
    })
  },
  methods: {
    onPageChange(newPage) {
      blog.getBlogs({
        page: newPage
      }).then(res => {
        res.data.forEach((blog, key) => {
          if (!blog.user) {
            res.data.splice(key)
          }
        });
        this.blogs = res.data
        this.total = res.total
        this.currentPage = res.page
        this.$router.push({
          path: '/',
          query: {
            page: newPage
          }
        })
      })
    }
  }
}
