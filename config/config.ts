import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
    antd: {},
    base: '/miku-plugin/',
    publicPath: '/miku-plugin/',
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
