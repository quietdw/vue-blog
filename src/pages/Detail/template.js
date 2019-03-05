import blog from '@/api/blog.js'
import marked from 'marked'
export default {
  data () {
    return {
      content: '',
      title: '',
      user: {},
      createdAt: '',
      description: ''
    }
  },
  created () {
    let blogId = this.$route.params.blogId
    blog.getDetail(blogId).then(res => {
      this.content = res.data.content
      this.title = res.data.title
      this.description = res.data.description
      this.createdAt = res.data.createdAt
      this.user = res.data.user
    })
  },
  computed: {
    marked: function () {
      return marked(this.content)
    }
  }
}
