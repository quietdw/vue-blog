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
          this.$router.push({path: `/Details/${res.data.id}`})
        })
    }
  }
}
