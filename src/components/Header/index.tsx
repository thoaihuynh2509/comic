import React from "react";
import Breadcrumb from "antd/lib/breadcrumb";

import styles from './styles.module.scss'

interface IHeaderProps {
  name: string,
  chapter?: number
}

const Header = ({
  name,
  chapter = 1
}: IHeaderProps) => {
  return <Breadcrumb className={styles.container}>
    <Breadcrumb.Item>{name}</Breadcrumb.Item>
    <Breadcrumb.Item>{`Chapter ${chapter}`}</Breadcrumb.Item>
  </Breadcrumb>;
};

export default Header;
