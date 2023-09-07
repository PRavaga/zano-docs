import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Button.module.css";

const Button = ({ Icon, text, link }) => (
  <Link className={styles.button} to={link}>
    <Icon />
    {text}
  </Link>
);

export default Button;
