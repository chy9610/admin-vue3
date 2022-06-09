import { ref } from 'vue';
import { defineStore } from 'pinia'

// export const useStore = defineStore('main', () => {
//     const locale = zhCn;
//     let userName = ref('')

//     function getUserName() {
//         return `欢迎欢临！！！${userName.value}`
//     }

//     return { locale, userName, getUserName }
// }); 



const useStore = defineStore('storeId', {
    state: () => {
        return {
            // locale: zhCn,s
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

// $onAction, 针对当前项目中设置过程的监控，随后做出相应判断。
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
