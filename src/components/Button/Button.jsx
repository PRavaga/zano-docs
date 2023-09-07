import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Button.module.css";

const Button = ({ icon, text, link }) => (
  <Link className={styles.button} to={link}>
    <img src={icon} alt={text} />
    {text}
  </Link>
);

export default Button;
