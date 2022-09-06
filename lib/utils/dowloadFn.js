const download = require("download-git-repo");
const { vueTemplateRemoteUrl } = require("./const")
const downloadFn = (projectName) => {
    return new Promise((resolve, reject) => {
        download(vueTemplateRemoteUrl, projectName, { clone: true }, function (err) {
            if (!err) {
                resolve();
            } else {
                reject();
            }
        })
    })
}

module.exports = downloadFn;