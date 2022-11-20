let display = false;
export const btnClick = () => {
    const root = document.querySelector('#miku-plugin-root') as HTMLDivElement;
    if (display) {
        root.style.display = 'none';
    } else {
        root.style.display = 'block';
    }
    display = !display;
};
