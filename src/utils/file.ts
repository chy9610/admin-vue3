import fs from 'fs';
import path from 'path';

interface FileObj {
    filesList: Array<string>
    dirsList: Array<string>
}
let fileObj: FileObj = {
    filesList: [],
    dirsList: []
}

function readFileList(dir: string, fileObj: FileObj): FileObj {
    // 解构传入参数，为递归做准备
    let { filesList, dirsList } = fileObj
    // 读取文件目录
    const files: Array<string> = fs.readdirSync(dir)
    // 循环目录内文件列表
    files.forEach(item => {
        // 获取完整路径
        const fullPath = path.join(dir, item);
        // 返回文件信息
        const stat = fs.statSync(fullPath)
        // 判断文件是否为目录层
        if (stat.isDirectory()) {
            dirsList.push(fullPath)
            // 递归读取文件目录
            readFileList(path.join(dir, item), fileObj)
        } else {
            filesList.push(fullPath)
        }
    })
    return fileObj
}

const readFiles = (dirName: string) => readFileList(dirName , fileObj)

// console.log('文件信息 ###', fileObj)

export { readFiles }