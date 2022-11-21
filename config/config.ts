import { defineConfig } from '@umijs/max';
import routes from './routes';
const IS_DEV = false;
export default defineConfig({
    antd: {},
    base: IS_DEV ? '/' : '/miku-plugin/',
    publicPath: IS_DEV ? '/' : '/miku-plugin/',
    model: {},
    layout: {
        title: 'miku-plugin'
    },
    qiankun: {
        slave: {}
    },
    lessLoader: {
        modifyVars: {
            '@ant-prefix': 'miku-plugin'
        },
        javascriptEnabled: true
    },
    routes,
    npmClient: 'pnpm',
    extraBabelPlugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-dynamic-import-node'] : []
});
