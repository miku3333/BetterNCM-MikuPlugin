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
    routes,
    npmClient: 'pnpm',
    mountElementId: 'miku-plugin-root',
    extraBabelPlugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-dynamic-import-node'] : []
});
