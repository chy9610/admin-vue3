import { defineStore } from 'pinia'
import { markRaw } from 'vue'
// adapt this based on where your router is
import router from '@/router/index'
const routerStore = defineStore('router', () => {
    return { router }
})
// pinia.use(({ store }) => {
//     store.router = markRaw(router)

//     store.$subscribe((changes) => {
//         // react to store changes
//         console.log('改变就会做出响应 ！！！！', changes)
//     })
//     store.$onAction((actions) => {
//         // react to store actions
//         console.log('改变就会做出响应 ！！！！', actions)
//     })
// })
// $onAction, 针对当前状态管理过程中异步动作的监控，随后做出相应判断。
const unsubscribe = routerStore().$onAction(({ name, store, args, after, onError }) => {
    const startTime = Date.now();
    console.log(`Start ${name} with params [${args.join()}]`);

    console.log(`Store is ${store}`);

    after((result) => {
        const finishTime = Date.now();
        console.log(
            `Finished ${name} after 
            ${finishTime - startTime}ms.
            \n Result: ${result}`
        );
    });

    onError((err) => {
        const errTime = Date.now();
        console.warn(
            `Failed: ${name} after ${errTime - startTime}ms. \nError: ${err}`
        );
    });
});
unsubscribe();

const logger = null;
export { logger }