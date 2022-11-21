export default [
    {
        path: '/',
        redirect: '/Block'
    },
    {
        name: '屏蔽',
        path: '/block',
        icon: 'SafetyCertificateOutlined',
        component: './Block'
    },
    {
        name: '样式',
        path: '/style',
        icon: 'HighlightOutlined',
        component: './Style'
    },
    {
        name: '关于',
        path: '/about',
        icon: 'GithubOutlined',
        component: './About'
    },
    {
        path: '*',
        redirect: '/Block'
    }
];
