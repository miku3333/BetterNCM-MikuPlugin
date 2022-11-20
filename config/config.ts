import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
    antd: {},
    model: {},
    layout: {
        title: 'miku-plugin'
    },
    routes,
    npmClient: 'pnpm',
    mountElementId: 'miku-plugin-root',
    extraBabelPlugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-dynamic-import-node'] : []
});