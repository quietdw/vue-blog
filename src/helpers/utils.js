function friendlyDate (timedata) {
  let time = typeof timedata === 'object' ? timedata : new Date(timedata)
  let now = new Date()
  let str = ''

  let delta = (now.getTime() - time.getTime()) / 60000

  if (delta <= 3) {
    str = '刚刚'
  } else if (delta < 60 && delta >= 3) {
    str = Math.floor(delta) + '分钟前'
  } else if (delta < 1440 && delta >= 60) {
    str = Math.floor(delta / 60) + '小时前'
  } else {
    str = Math.floor(delta / (60 * 24)) + '天前'
  }
  console.log(str)
  return str
}

export default {
  install (Vue, options) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}