import { Model } from 'dva'

export interface IGlobalState {
  username: string
}

export type GlobalStore = {
  state: IGlobalState
} & Model

const globalStore: GlobalStore = {
  namespace: 'global',
  state: {
    username: 'fuck'
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {})
      dispatch({
        type: 'getUsers'
      })
    }
  },
  effects: {
    *getUsers({ payload }, { call, put }) {}
  },
  reducers: {
    setUserInfo(
      state,
      {
        /* payload */
      }
    ) {}
  }
}

export default globalStore
