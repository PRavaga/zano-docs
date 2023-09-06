import React from "react";
import styles from "./LearnMore.module.css";
import Button from "../Button/Button";

function LearnMore({ links }) {
  return (
    <div className={styles.container}>
      <h2>Learn more</h2>
      <div>
        {links.map((link) => (
          <Button link={link.link} text={link.name} key={link.name} />
        ))}
      </div>
    </div>
  );
}

export default LearnMore;
