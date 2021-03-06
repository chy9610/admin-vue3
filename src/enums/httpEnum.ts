// 请求枚举值配置

/**
 * @description 请求配置
 */
export enum ResultEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 599,
	TIMEOUT = 10000,
	TYPE = 'success',
}

/**
 * @description 请求方法
 */
export enum RequestEnum {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

/**
 * @description 常用的 contentType 类型
 */
export enum ContentTypeEnum {
	JSON = 'application/json;charset=UTF-8',
	TEXT = 'text/plain;charset=UTF-8',
	FORM_DATA = 'multipart/form-data;charset=UTF-8',
	// form-data 一般配合qs
	FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
}
