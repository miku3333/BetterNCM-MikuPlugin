plugin.onAllPluginsLoaded(async function (plugins) {
    await plugins.StylesheetLoader.loadStylesheet(plugin, this.pluginPath + '/umi.css', 'miku-plugin', {});
});

let display = false;
const btnClick = () => {
    const root = document.querySelector('#miku-plugin-root');
    if (display) {
        root.style.display = 'none';
    } else {
        root.style.display = 'block';
    }
    display = !display;
};

// 创建root并隐藏
const reactRoot = document.querySelector('#miku-plugin-root') || document.createElement('div');
reactRoot.id = 'miku-plugin-root';
const root = document.querySelector('.g-mn').appendChild(reactRoot);
root.style.display = 'none';

// 侧边栏添加插件管理菜单
const sys = document.querySelector('.sys');
const btn = sys.appendChild(document.createElement('li'));
btn.className = 'fx j-flag fsection';
btn.appendChild(document.createElement('a'));
btn.children[0].innerText = '插件管理';
btn.addEventListener('click', btnClick);
