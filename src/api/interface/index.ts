/**
 * @description 请求响应参数（不包含 data）
 */
export interface Result {
	code: string;
	msg: string;
}

/**
 * @description 请求响应参数（包含 data）
 */
export interface ResultData<T = any> extends Result {
	data?: T;
}

/**
 * @description 登录信息
 */
export namespace Login {
	export interface ReqLoginForm {
		username: string;
		password: string;
	}
	export interface ResLogin {
		access_token: string;
	}
	export interface ResAuthButtons {
		[propName: string]: any;
	}
}
