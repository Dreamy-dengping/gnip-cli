const program = require('commander');
const { createProject } = require("./action.js")

const createCommands = () => {
    // 创建工程项目，例如：gnip create demon01
    program
        .command("create <projectName>")
        .description("clone a repository from remote")
        .action(createProject)
}

module.exports = {
    createCommands
};
