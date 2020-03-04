import { Model } from 'dva'
import { fetchIsLogin } from '@/api'

export interface IGlobalState {
  username: string
}

export type GlobalStore = {
  state: IGlobalState
} & Model

const globalStore: GlobalStore = {
  namespace: 'global',
  state: {
    username: 'fuck',
    isLogin: false
  },
  subscriptions: {
    setup({ history, dispatch }) {
      // history.listen(({ pathname }) => {
      // })
      dispatch({
        type: 'getLoginStatus'
      })
    }
  },
  effects: {
    *getLoginStatus(_, { put }) {
      const res = yield fetchIsLogin()
      yield put({
        type: 'setIsLogin',
        payload: { isLogin: res.code === 0 }
      })
    }
  },
  reducers: {
    setIsLogin(state, { payload }) {
      const { isLogin } = payload
      return {
        ...state,
        isLogin
      }
    }
  }
}

export default globalStore
