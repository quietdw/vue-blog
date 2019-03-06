import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false
    }
  },
  created () {
    let blogId = this.$route.params.blogId
    blog.getDetail(blogId)
    .then(res => {
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
    })
  },
  methods: {
    onEdit () {
      blog.updateBlog({blogId:this.$route.params.blogId},{title: this.title, description: this.description, content: this.content, atIndex: this.atIndex})
        .then(res => {
          this.$message('更改成功');
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}
