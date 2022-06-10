import { Router, RouteRecordRaw } from 'vue-router';
import { ref } from 'vue';
import { defineStore } from 'pinia'

// 函数形式
// export const useStore = defineStore('main', () => {
//     const locale = zhCn;
//     let userName = ref('')
//     function getUserName() {
//         return `欢迎欢临！！！${userName.value}`
//     }
//     return { locale, userName, getUserName }
// }); 
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
                showSidebarLogo: false,
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

// $onAction, 针对当前状态管理过程中异步动作的监控，随后做出相应判断。
// const unsubscribe = useStore().$onAction(({ name, store, args, after, onError }) => {
//     const startTime = Date.now();
//     console.log(`Start ${name} with params [${args.join()}]`);

//     console.log(`Store is ${store}`);

//     after((result) => {
//         const finishTime = Date.now();
//         console.log(
//             `Finished ${name} after 
//             ${finishTime - startTime}ms.
//             \n Result: ${result}`
//         );
//     });

//     onError((err) => {
//         const errTime = Date.now();
//         console.warn(
//             `Failed: ${name} after ${errTime - startTime}ms. \nError: ${err}`
//         );
//     });
// });
// unsubscribe();

export { useStore };
