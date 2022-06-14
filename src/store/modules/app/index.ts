import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia'
import { state } from './state'

let routes: Array<RouteRecordRaw> = []
const useStore = defineStore('app', {
    state: () => state,
    getters: {
        getUserName: (state) => `欢迎欢临！！！${state.userName}`
    },
    actions: {
        setCount() {
            this.counter++
        }
    }
});

export { useStore };
