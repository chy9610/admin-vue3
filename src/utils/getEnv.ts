import path from 'path';
// import dotenv from "dotenv";

/**
 * @description Read all environment variable configuration files to process.env（读取所有 .env 文件，将相关属性配置在 process.env 中）
 * @param {object} envConf 配置文件中的数据
 * @returns {object} 返回规范化配置数据 (键值对形式)
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName: any = envConf[envName].replace(/\\n/g, '\n');

		// 转化 Boolean
		if (['true', 'false'].includes(realName)) {
			if (realName === 'true') {
				realName = true;
			} else {
				realName = false;
			}
		}
		// 转化 端口号
		if (envName === 'VITE_PORT') {
			realName = Number(realName);
		}
		// 转化 Proxy 对象
		if (envName === 'VITE_PROXY') {
			try {
				typeof realName === 'string' && (realName = JSON.parse(realName));
			} catch (error: any) {
				throw new Error(error);
			}
		}
		// 规范化数据，并将其配置于环境中
		ret[envName] = realName;
		process.env[envName] = realName;
	}

	return ret;
}

// Whether to generate package preview （是否生成包预览）
export function isReportMode(): boolean {
	return process.env.VITE_REPORT === 'true';
}

/**
 * @description Get user root directory（获取用户根目录）
 * @param {array} dir file path
 */
export function getRootPath(...dir: string[]): string {
	return path.resolve(process.cwd(), ...dir);
}
