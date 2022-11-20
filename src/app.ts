import { ICON_JS } from './constants';
import './style/index.less';

export const layout = () => {
    return {
        logo: 'https://cdn.staticaly.com/gh/miku3333/image-hosting@master/20221120/81689532_p0_master1200.6x9fnqz4hk40.webp',
        menu: {
            locale: false
        }
    };
};

const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', ICON_JS);
document.getElementsByTagName('head')[0].appendChild(script);
