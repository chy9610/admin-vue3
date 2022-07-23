export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}

export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}

export interface UserInfoProp {
	name: string;
	age?: number;
	sex?: string;
	phone?: number;
}

export interface ThemeConfigProp {
	// 默认 primary 主题颜色
	primary: '#409EFF';
	// 深色模式
	isDark: false;
	// 灰色模式
	isGrey: false;
	// 色弱模式
	isWeak: false;
}

export interface GlobalState {
	token: string;
	userInfo: UserInfoProp;
	assemblySize: string;
	language: string;
	themeConfig: ThemeConfigProp;
}

export interface TabsState {
	tabsMenuValue: string;
	tabsMenuList: Menu.MenuOptions[];
}
