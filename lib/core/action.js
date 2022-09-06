const dowloadFn = require("../utils/dowloadFn.js");
const { commandSpawn } = require("../utils/terminal.js")
// const inquirer = require("inquirer")
const createProject = async (projectName) => {
    console.log('\x1b[36m%s\x1b[0m', 'please waitting...');
    // console.log(inquirer)
    return
    // 1、克隆项目
    await dowloadFn(projectName);
    // 2、执行npm i(注意在windows平台上面要执行.cmd文件，不然会报错，苹果的正常)
    await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], {
        cwd: `./${projectName}`,
    });
    // 3、执行npm run serve
    await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'serve'], {
        cwd: `./${projectName}`,
    });
    // 3、打开浏览器
}
module.exports = {
    createProject
}