const reactRoot = document.createElement('div');
reactRoot.id = 'miku-plugin-root';
const interval = setInterval(() => {
    if (document.body) {
        clearInterval(interval);
        document.body.appendChild(reactRoot);
        console.log('miku-plugin-root === init');
    }
}, 10);
