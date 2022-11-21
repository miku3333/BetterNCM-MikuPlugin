export const DEFAULT_NAME = 'Umi Max';
export const PERFIX = 'miku-style';
export const IS_DEV = location.href.includes('127.0.0.1') || location.href.includes('localhost');
export const IS_IN_NCM = location.href.includes('orpheus://orpheus/pub/app.html');
export const STYLE_CONFIG = [
    {
        label: '字体',
        name: 'font-family',
        placeholder: '字体的中文名或英文名(可在word中查看)'
    },
    {
        label: '字体颜色',
        name: 'color',
        placeholder: '16进制#39c5bb[cc](中括号内为透明度, 可选)或rgb(57, 197, 187)或rgba(57, 197, 187, 0.8)'
    }
];
