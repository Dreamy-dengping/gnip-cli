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
module.exports = {
    commandSpawn,
}