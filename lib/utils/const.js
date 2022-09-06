// vue远程仓库下载地址
const vueTemplateRemoteUrl = "direct:https://github.com/Dreamy-dengping/vue2-template.git"
// const vueTemplateRemoteUrl = "direct:https://github.com/Dreamy-dengping/write-vue2-components.git"
const inquirerOptions = [
    {
        type: 'list',
        name: 'version',
        message: '选择vue项目的版本',
        default: '',
        choices: [
            { value: '2.x', name: '2.x' },
            { value: '3.x', name: '3.x' },
        ]
    },
    {
        type: 'list',
        name: 'cssFront',
        message: '选择less或者sass',
        default: '',
        choices: [
            { value: 'less', name: 'less' },
            { value: 'sass', name: 'sass' },
        ]
    },
    {
        type: 'checkbox',
        name: 'package',
        message: '选择vue项目需要的包',
        default: '',
        choices: [
            { value: 'vuex', name: 'vuex' },
            { value: 'vue-router', name: 'vue-router' },
        ]
    },
]
module.exports = {
    vueTemplateRemoteUrl,
    inquirerOptions
}