import { Form, Input, Select } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { BgColorsOutlined } from '@ant-design/icons';
import styles from './style.module.less';
import { IS_IN_NCM, PERFIX, STYLE_CONFIG } from '@/constants';
import { useModel } from '@umijs/max';
const { Item } = Form;

const initialValues = STYLE_CONFIG.reduce((pre: { [key: string]: any }, { name }) => {
    pre[name] = localStorage.getItem(`${PERFIX}-${name}`) || '';
    return pre;
}, {});

const Style = () => {
    const { styleDom } = useModel('styleDom');

    const init = useRef(true);
    const [formValue, setFormValue] = useState({});
    const [form] = Form.useForm();
    const formChange = useCallback((_: any, allValues: any) => {
        setFormValue(allValues);
    }, []);
    useEffect(() => {
        let style = '';
        if (init.current) {
            init.current = false;
        } else {
            Object.keys(formValue).forEach(name => {
                const value = formValue[name as keyof typeof formValue];
                localStorage.setItem(`${PERFIX}-${name}`, value);
                style += `${name}: ${value} !important;`;
            });
            if (styleDom.current) {
                styleDom.current.innerHTML = `*{${style}}`;
            }
        }
    }, [formValue]);

    const [fonts, setFonts] = useState<string[]>(JSON.parse(localStorage.getItem(`${PERFIX}-fonts`) || '[]'));
    const fontOptions = useMemo(() => fonts.map(item => ({ value: item, label: item })), [fonts]);
    const updateFonts = useCallback(() => {
        const clickE = document.createEvent('MouseEvents');
        clickE.initEvent('click', true, true);
        document.querySelector('.itm.itm2.set')!.dispatchEvent(clickE);
        const timeOut = setTimeout(() => {
            clearTimeout(timeOut);
            // @ts-ignore
            const fonts = [...document.querySelector('.u-select-fonts').querySelector('.select').children].map(item => item.innerText);
            // 删除默认字体
            fonts.shift();
            localStorage.setItem(`${PERFIX}-fonts`, JSON.stringify(fonts));
            setFonts(fonts);
        }, 500);
    }, []);
    useEffect(() => {
        IS_IN_NCM && updateFonts();
    }, []);

    const [pickerVisable, setPickerVisable] = useState(false);
    const changePickerVisable = useCallback(() => setPickerVisable(pickerVisable => !pickerVisable), []);
    const [pickerColor, setPickerColor] = useState('');
    const pickerColorChange = useCallback(
        (color: ColorResult) => {
            setPickerColor(color.hex);
            setFormValue({ ...formValue, color: color.hex });
            form.setFieldsValue({ ...formValue, color: color.hex });
        },
        [formValue]
    );

    return (
        <div>
            <Form form={form} labelCol={{ span: 2 }} initialValues={initialValues} onValuesChange={formChange}>
                <Item key='font-family' name='font-family' label='字体'>
                    <Select
                        showSearch
                        allowClear
                        placeholder='字体的中文名或英文名'
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        options={fontOptions}
                    />
                </Item>
                <Item key='color' name='color' label='字体颜色'>
                    <Input.Search
                        onSearch={changePickerVisable}
                        enterButton={
                            <div>
                                <BgColorsOutlined />
                                取色器
                            </div>
                        }
                        allowClear
                        placeholder='16进制#39c5bb[cc](中括号内为透明度, 可选)或rgb(57, 197, 187)或rgba(57, 197, 187, 0.8)'
                    />
                </Item>
                <div className={styles.pickerOuter}>
                    {pickerVisable && (
                        <div className={styles.picker}>
                            <SketchPicker color={pickerColor} onChange={pickerColorChange} />
                        </div>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default Style;
