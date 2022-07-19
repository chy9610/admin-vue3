// @see: http://eslint.cn

module.exports = {
	// 配置文件中有 "root": true，它就会停止在父级目录中寻找。
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	// 指定如何解析语法
	parser: 'vue-eslint-parser',
	// extends: [
	// 	'eslint:recommended',
	// 	'plugin:vue/vue3-recommended',
	// 	'plugin:@typescript-eslint/recommended',
	// 	'plugin:prettier/recommended',
	// ],
	// 解析语法配置 (优先级低于 parser)
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// 插件
	plugins: ['vue', '@typescript-eslint'],
	// 解析规则
	rules: {
		// 要求使用 let 或 const 而不是 var
		'no-var': 'error',
		// 禁止在 函数/类/变量 定义之前使用它们
		'no-use-before-define': 'off',
		// 禁止出现console
		'no-console': 'off',
		// 禁止出现重复的 case 标签
		'no-duplicate-case': 'warn',
		// 禁止不必要的括号
		'no-extra-parens': 'off',
		// 强制所有控制语句使用一致的括号风格
		curly: 'warn',
		// 要求 switch 语句中有 default 分支
		'default-case': 'warn',
		// 要求使用 === 和 !==
		eqeqeq: 'warn',
		// 禁止变量声明与外层作用域的变量同名
		'no-shadow': 'off',
		// 允许delete变量
		'no-delete-var': 'off',
		// 强制数组方括号中使用一致的空格
		'array-bracket-spacing': 'warn',
		// 强制在代码块中使用一致的大括号风格
		'brace-style': 'warn',
		// 强制使用骆驼拼写法命名约定
		camelcase: 'warn',
		// 强制使用一致的缩进
		indent: 'off',
		// 强制在 JSX 属性中一致地使用双引号或单引号
		// 'jsx-quotes': 'warn',
		// 强制可嵌套的块的最大深度4
		'max-depth': 'warn',
		// 强制回调函数最大嵌套深度
		'max-nested-callbacks': ['warn', 3],
		// 要求方法链中每个调用都有一个换行符
		// 'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
		// 禁止空格和 tab 的混合缩进
		'no-mixed-spaces-and-tabs': 'warn',
		// 禁止出现多行空行
		// 'no-multiple-empty-lines': 'warn',
		// 禁止出现 分号（;）
		// semi: ['warn', 'never'],
		semi: 0,
		// 强制在圆括号内使用一致的空格
		'space-in-parens': 'warn',
		// 要求操作符周围有空格
		'space-infix-ops': 'warn',
		// 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'prefer-const': 'warn',
		// 禁止直接调用 Object.prototype 原型上的方法
		// 'no-prototype-builtins': 'warn',
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
};
