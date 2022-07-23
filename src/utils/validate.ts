// 是否为外部链接
export const isExternal = (path: string) => /^(http?:|mailto:|tel:)/.test(path);
