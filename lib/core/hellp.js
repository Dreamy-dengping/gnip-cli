const  program = require('commander');

const resolveOptionbs = () => {
    // 增加自己的cli
    program.option("-g", "a gnip cli");

    program.option('-d, --dest <dest>', 'a destion folder,例如：-d /src/components');

    program.option('-f, --framework <framework>', 'your framework,such as vue react');

}

module.exports = {
    resolveOptionbs
}