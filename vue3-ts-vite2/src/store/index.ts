import { createStore } from 'vuex'
import MUTATION_TYPS from '@/store/mutations/mutationTypes'
import ACTION_TYPES from '@/store/actions/actionTypes'
interface STATE {
    userinfo?: object
}

const state: STATE = {
    userinfo: {}
}

export default createStore({
    state,
    mutations: {
        [MUTATION_TYPS.SET_USERINFO](state: STATE, value: object): void {
            state.userinfo = value
        },
        [MUTATION_TYPS.CLEAR_USERINFO](state: STATE): void {
            state.userinfo = {}
        }
    },
    actions: {
        [ACTION_TYPES.SET_USERINFO](context: any, value: object): void {
            context.commit(MUTATION_TYPS.SET_USERINFO, value)
        },
        [ACTION_TYPES.CLEAR_USERINFO](context: any): void {
            context.commit(MUTATION_TYPS.CLEAR_USERINFO)
        }
    }
})
