const dowloadFn = require("../utils/dowloadFn.js");
const { commandSpawn, configFileAccordingAnswers } = require("../utils/terminal.js")
const inquirer = require("inquirer")
const { inquirerOptions } = require("../utils/const")
const createProject = async (projectName) => {
    try {
        // 1、获命令号交互对象（根据用户配置对应文件）
        let answers = await inquirer.prompt(inquirerOptions);
        console.log('\x1b[36m%s\x1b[0m', 'Installing CLI plugins. This might take a while,please waitting...');
        // 2、克隆项目
        await dowloadFn(projectName);
        // 3、执行npm i(注意在windows平台上面要执行.cmd文件，不然会报错，苹果的正常)
        await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], {
            cwd: `./${projectName}`,
        });
        // return
        // 4、根据命令行答案，下载对应插件
        await configFileAccordingAnswers(answers, projectName)
        // 5、行npm run serve
        // await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'serve'], {
        //     cwd: `./${projectName}`,
        // });

    } catch (e) {
        console.log('\x1b[36m%s\x1b[0m', e);
    }
}
module.exports = {
    createProject
}