/**
 * Created by zhaorui12 on 2018/4/11.
 */
export default {
  state: {
    QQMap: null,
    currentCity: '',
    user: '',
    isLoading:false,
    isShow:true
  },
  getters: {
    getQQMap: (state) => {
      return state.QQMap
    },
    getcurrentCity: (state) => {
      return state.currentCity
    },
    getUser: (state) => {
      return state.user
    }
  },
  mutations: {
    saveQQMap (state, qqObject) {
      state.QQMap = qqObject
    },
    saveCurrentCity (state, city) {
      state.currentCity = city
    },
    saveUser (state, user) {
      state.user = user
    },

  }

}
