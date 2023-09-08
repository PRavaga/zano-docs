import React from "react";
import styles from "./StartArticle.module.css";
import TextBlock from "../TextBlock/TextBlock";

function StartArticle({ content }) {
  return (
    <div className={styles.intro}>
      <article>
        <div className={styles.welcome}>
          <h1>Zano Docs</h1>
          <span>
            Welcome to Zano's comprehensive documentation, your gateway to
            understanding and engaging with our unique cryptocurrency ecosystem.
            This guide is designed to cater to both newcomers and experienced
            developers, providing a deep dive into Zano's features,
            functionalities, and opportunities.
          </span>
        </div>
        {content.map((item) => (
          <TextBlock key={item.title} content={item} />
        ))}
      </article>
    </div>
  );
}

export default StartArticle;
