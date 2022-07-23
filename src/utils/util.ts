// 处理路由数据（树形结构）
export function handlerRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
	routerList.forEach((item: Menu.MenuOptions) => {
		if (typeof item === 'object' && item.path) {
			newArr.push(item.path);
		}

		if (item.children && item.children.length) {
			handlerRouter(item.children, newArr);
		}
	});

	return newArr;
}
