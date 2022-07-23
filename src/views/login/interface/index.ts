export interface LoginFormExpose {
	count: number;
	consoleNumber: (name: string) => void;
}

export interface injectProps {
	name: string;
	age: string | number;
	changeName: () => void;
	[key: string]: any;
}
