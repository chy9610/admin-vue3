import { RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia'
import { logger } from './logger';

let routes: Array<RouteRecordRaw> = []
const useStore = defineStore('main', {
    state: () => {
        return {
            app: {
                sidebar: {
                    opened: true
                }
            },
            settings: {
                theme: '#57CAEB',
                showSidebarLogo: true,
                sidebarTextTheme: '#0f0',
                variables: {
                    menuBg: '#ff0000',
                    menuText: '#000000',
                    menuActiveText: '#ffffff'
                }
            },
            permission: {
                routes
            },
            tagViews: {
                cachedViews: ''
            },
            userName: '',
            counter: 0
        }
    },
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
