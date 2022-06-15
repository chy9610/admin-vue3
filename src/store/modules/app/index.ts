import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia'
import { state } from './state'
import { actions } from './actions'

let routes: Array<RouteRecordRaw> = []
const useAppStore = defineStore('app', {
    state: () => state,
    actions
});

export { useAppStore };
