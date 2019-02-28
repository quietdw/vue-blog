import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

 window.request = request //方便调试
 window.auth = auth //方便调试
 window.blog = blog //方便调试

export default {
  methods: {
    open() {
      this.$message('这是一条提示信息')
    },
    alert() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}