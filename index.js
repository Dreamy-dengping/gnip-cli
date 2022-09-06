#!/usr/bin/env node
const program = require('commander');

const { resolveOptionbs } = require("./lib/core/hellp.js");
const { createCommands } = require("./lib/core/createCommands.js");

// 获取版本号(第二个参数可以自定义指令打印版本号的参数：例如：gnip --version或者gnip-v)
program.version(require("./package.json").version, "-v,--version")

// 配置可选信息
resolveOptionbs()
// 创建指令
createCommands()

program.parse(process.argv);

