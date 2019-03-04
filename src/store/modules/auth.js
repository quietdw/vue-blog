/* eslint-disable */ 
import auth from '@/api/auth'

const state= {
    // 用户的信息
    user:null,
    isLogin:false
}
const getters= {
    user:state => state.user,
    isLogin:state => state.isLogin
}
const mutations= {
    //对数据state的操作
    setUser(state, payLoad){
        state.user = payLoad.user
    },

    setLogin(state,payLoad){
        state.isLogin = payLoad.isLogin
    }
}
const actions= {
    login({commit},{username,password}){
        return auth.login({username,password}) // 登陆成功后执行下面的commit
            .then( res => {
                commit('setUser',{user:res.data})
                commit('setLogin',{isLogin:true})
            })
    },
    // 写法和上面的形式一样
    async register({commit},{username,password}) {
        let res = await auth.register({username,password}) // then 的结果
        commit('setUser',{user:res.data})
        commit('setLogin',{isLogin:true})
        return res.data
    },

    async logout({commit}){
        await auth.logout()
        commit('setUser',{user:null})
        commit('setLogin',{isLogin:false})
    },

    async checkLogin({commit, state}) { //返回的是一个promise对象
        if(state.isLogin) return true   
        let res = await auth.getInfo()
        commit('setLogin',{isLogin: res.isLogin})
        if(!res.isLogin) return false;
        commit('setUser',{user:res.data})
        return true
    }
    
}
export default {
    state,
    getters,
    mutations,
    actions
}