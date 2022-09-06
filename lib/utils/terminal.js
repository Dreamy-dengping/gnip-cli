const { compile } = require("./compile");
const path = require("path");
const fs = require("fs");
// 执行终端相关的代码

const { spawn } = require("child_process");

const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        childProcess.on("close", (err) => {
            if (err) {
                reject()
            } else {
                resolve()
            }
        })
    })
}
const configFileAccordingAnswers = (answer, projectName) => {
    return new Promise(async (resolve, reject) => {
        // console.log(answer)
        const { version, cssFront, package } = answer;
        if (version == "2.x") {
            let componentStr = await compile("component", { compoentName: "Home", cssFront: cssFront || "" });
            writeFile(path.resolve(`./${projectName}/src/views/Home.vue`), componentStr);
            if (package.includes("vue-router")) {
                let routeStr = await compile("router");
                writeFile(path.resolve(`./${projectName}/src/router/index.js`), routeStr)
                // 下载vue-router
                await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install', "vue-router@3"], {
                    cwd: `./${projectName}`,
                });
            }
            if (package.includes("vuex")) {
                let storetStr = await compile("store");
                writeFile(path.resolve(`./${projectName}/src/store/index.js`), storetStr)
                // 下载vuex
                await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install', "vuex@3"], {
                    cwd: `./${projectName}`,
                });
            }
            if (cssFront) {
                // 下载less或者Sass依赖
                await commandSpawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install', cssFront], {
                    cwd: `./${projectName}`,
                });
            }
        } else {
            //vue3的模板
            console.log("咱不支持3.x版本创建");
        }
        resolve();
    })
}


const writeFile = (path, data) => {
    console.log('\x1b[36m%s\x1b[0m', path);
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (err) => {
            if (!err) {
                resolve()
            }
            else {
                reject()
            }
        })
    }
    )
}
module.exports = {
    commandSpawn,
    configFileAccordingAnswers
}