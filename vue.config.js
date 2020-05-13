module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',//@默认是src文件
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}