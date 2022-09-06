const ejs = require("ejs");
const path = require("path");
const compile = (templateName, data) => {
    return new Promise((resolve, reject) => {
        const templatePath = path.resolve(__dirname, `../template/${templateName}.vue2.ejs`);
        ejs.renderFile(templatePath, data, {}, (err, str) => {
            if (!err) {
                resolve(str);
            } else {
                reject()
            }
        })
    })
}


module.exports = {
    compile
}