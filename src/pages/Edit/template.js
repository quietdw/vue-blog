import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,
      isActive: false,
      isActive1: false
    }
  },
  created () {
    this.titleLength = this.title.length
    this.descriptionLength = this.description.length
    let blogId = this.$route.params.blogId
    blog.getDetail(blogId)
      .then(res => {
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
      })
  },
  beforeUpdate () {
    this.titleLength = this.title.length
    if (this.titleLength >= 30) {
      this.isActive = true
    } else {
      this.isActive = false
    }
    this.descriptionLength = this.description.length
    if (this.descriptionLength >= 100) {
      this.isActive1 = true
    } else {
      this.isActive1 = false
    }
  },
  methods: {
    onEdit () {
      if (!this.isActive && !this.isActive1) {
        blog.updateBlog({blogId: this.$route.params.blogId},{title: this.title, description: this.description, content: this.content, atIndex: this.atIndex})
          .then(res => {
            this.$message({
              message: '修改成功',
              type: 'success'
            })
            this.$router.push({path: `/detail/${res.data.id}`})
          })
      } else {
        this.$message({
          message: '标题或者简介过长',
          type: 'warning'
        })
      }
    } 
  }
}
