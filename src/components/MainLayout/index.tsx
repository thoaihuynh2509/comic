import Layout from 'antd/lib/layout';
import React from 'react'

import styles from './styles.module.scss';

interface IMainLayoutProps {
  header?: React.ReactNode,
  content?: React.ReactNode,
  sidebar?: React.ReactNode,
  footer?: React.ReactNode
}

const MainLayout = ({
  header,
  content,
  sidebar,
  footer
}: IMainLayoutProps) => {
  return (
    <Layout className={styles.container} hasSider>
      {header && <Layout.Header className={styles.header}>{header}</Layout.Header>}
      <Layout>
        {content && <Layout.Content className={styles.content}>{content}</Layout.Content>}
        {sidebar && <Layout.Sider className={styles.sidebar}>{sidebar}</Layout.Sider>}
      </Layout>
      {footer && <Layout.Footer>{footer}</Layout.Footer>}
    </Layout>
  )
}

export default MainLayout;