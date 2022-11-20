// style标签的dom节点
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
    }, []);
    return {
        blockDom,
        styleDom
    };
};

export default styleDom;
