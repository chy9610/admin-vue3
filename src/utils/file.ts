import { readFileList } from './../../.history/src/utils/file_20220610092214';
const fs = require('fs');
const path = require('path');

interface FileObj {
    filesList: Array<string>
    dirsList: Array<string>
}
let fileObj: FileObj = {
    filesList: [],
    dirsList: []
}

function readFileList(dir, fileObj): FileObj {
    // 解构传入参数，为递归做准备
    let { filesList, dirsList } = fileObj
    // 读取文件目录
    const files: Array<string> = fs.readdirSync(dir)

    console.log('文件列表',files)
    files.forEach((item,index) => {
        // 完整路径
        const fullPath = path.join(dir,item);

        const stat  = fs.statSync(fullPath)

    })
}

fileObj = readFileList(__dirname, fileObj)


export { readFileList }