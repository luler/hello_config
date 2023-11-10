import React, { PureComponent } from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Menu, Icon } from 'antd';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { getUserInfo } from '@/utils/authority';

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const { onMenuClick, theme } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="password">
          <Icon type="key" />
          设置密码
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <FormattedMessage id="menu.account.logout" defaultMessage="logout" />
        </Menu.Item>
      </Menu>
    );
    let className = styles.right;
    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`;
    }
    return (
      <div className={className}>
        <HeaderDropdown overlay={menu}>
          <span className={`${styles.action} ${styles.account}`}>
            <span className={styles.name}>{getUserInfo().appid}</span>
          </span>
        </HeaderDropdown>
      </div>
    );
  }
}
