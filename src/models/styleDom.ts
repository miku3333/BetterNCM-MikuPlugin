// style标签的dom节点
import { PERFIX, STYLE_CONFIG } from '@/constants';
import { useEffect, useRef } from 'react';
const appendToHead = (ref: React.MutableRefObject<HTMLStyleElement | null>) => {
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    ref.current = document.head.appendChild(style);
};

const styleDom = () => {
    const blockDom = useRef<HTMLStyleElement | null>(null);
    const styleDom = useRef<HTMLStyleElement | null>(null);
    useEffect(() => {
        [blockDom, styleDom].forEach(appendToHead);
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
