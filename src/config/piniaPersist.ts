import { PersistStrategy } from 'pinia-plugin-persist/dist';

/**
 * @description pinia持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @return {Object} persist
 * */
const piniaPersistConfig = (key: string): PersistStrategy => {
	const persist = {
		key,
		storage: localStorage, //default: sessionStorage
	};
	return persist;
};

export default piniaPersistConfig;
