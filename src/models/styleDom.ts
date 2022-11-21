// style标签的dom节点
import { PERFIX, STYLE_CONFIG } from '@/constants';
import { useModel } from '@umijs/max';
import { useEffect, useRef } from 'react';
const styleMap: { [key: string]: any } = {};
const getStyleDomSelf = (key: string) => {
    let appKey = `mikuPlugin-${key}`;
    if (!styleMap[appKey]) {
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        styleMap[appKey] = document.head.appendChild(style);
    }
    return styleMap[appKey];
};

const styleDom = () => {
    const { getStyleDom } = useModel('@@qiankunStateFromMaster');
    const blockDom = useRef<HTMLStyleElement | null>(null);
    const styleDom = useRef<HTMLStyleElement | null>(null);
    useEffect(() => {
        const getFunc = getStyleDom || getStyleDomSelf;
        blockDom.current = getFunc('blockDom');
        styleDom.current = getFunc('styleDom');
        let style = '';
        STYLE_CONFIG.forEach(({ name }) => {
            const value = localStorage.getItem(`${PERFIX}-${name}`);
            style += `${name}: ${value} !important;`;
        });
        styleDom.current!.innerHTML = `*{${style}}`;
    }, []);
    return {
        blockDom,
        styleDom
    };
};

export default styleDom;
