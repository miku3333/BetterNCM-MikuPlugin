import { GithubOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import styles from './style.module.less';

const About = () => {
    return (
        <div className={styles.about}>
            <a target='_blank' href='https://github.com/miku3333/BetterNCM-MikuPlugin' className={styles.github} rel='noreferrer'>
                <GithubOutlined />
                @miku3333有想要的功能欢迎来提Issue, 顺便点个star
            </a>
            <div className={styles.title}>目前拥有的功能</div>
            <Checkbox defaultChecked disabled>
                禁用不想要的组件
            </Checkbox>
            <Checkbox defaultChecked disabled>
                点击cd唱头时播放/暂停
            </Checkbox>
            <Checkbox defaultChecked disabled>
                cd可以转动
            </Checkbox>
            <Checkbox defaultChecked disabled>
                自定义字体
            </Checkbox>
            <Checkbox defaultChecked disabled>
                自定义颜色
            </Checkbox>
            <div className={styles.title}>将要做的功能</div>
        </div>
    );
};

export default About;
