import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        getCount(state) {
            return state.count
        },
        getDoubleCount(state) {
            return state.count * 2
        }
    }
})
