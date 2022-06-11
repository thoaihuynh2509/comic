import React from "react";
import Breadcrumb from "antd/lib/breadcrumb";

import styles from "./styles.module.scss";

interface IHeaderProps {
  name: string;
  chapter?: string;
}

const Header = ({ name, chapter }: IHeaderProps) => {
  return (
    <Breadcrumb className={styles.container}>
      <Breadcrumb.Item>{name}</Breadcrumb.Item>
      {chapter && <Breadcrumb.Item>{chapter}</Breadcrumb.Item>}
    </Breadcrumb>
  );
};

export default Header;
