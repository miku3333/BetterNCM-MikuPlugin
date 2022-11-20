import { useEffect, useMemo, useRef, useState } from 'react';
import { Tabs } from 'antd';
import CustomRules from './CustomRules';
import DefaultRules from './DefaultRules';
import { useModel } from '@umijs/max';

const Block = () => {
    const { blockDom } = useModel('styleDom');
    const [defaultRules, setDefaultRules] = useState<string[]>(JSON.parse(localStorage.getItem('miku-block-default') || '[]'));
    const [customRules, setCustomRules] = useState<string>(localStorage.getItem('miku-block-custom') || '');
    const options = useMemo(() => {
        const customOptions: string[] = customRules
            .split('\n')
            .map(item => item.split('/')[0].trim())
            .filter(item => ['.', '#', '['].includes(item[0]) && item.length > 1);
        return [...defaultRules, ...customOptions];
    }, [defaultRules, customRules]);
    useEffect(() => {
        if (blockDom.current) {
            blockDom.current.innerHTML = `${options.join(',')}{display: none !important}`;
        }
    }, [options]);
    return (
        <div>
            <Tabs
                defaultActiveKey='default'
                items={[
                    {
                        label: '默认配置',
                        key: 'default',
                        children: <DefaultRules setDefaultRules={setDefaultRules} />
                    },
                    {
                        label: '自定义配置',
                        key: 'custom',
                        children: <CustomRules setCustomRules={setCustomRules} />
                    }
                ]}
            />
        </div>
    );
};

export default Block;
