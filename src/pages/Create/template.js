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
  methods: {
    onSubmit () {
      blog.createBlog({title: this.title, description: this.description, content: this.content, atIndex: this.atIndex})
        .then(res => {
          this.$message('创建成功');
          this.$router.push({path: `/detail/${res.data.id}`})
        })
    }
  }
}
