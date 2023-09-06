import React from "react";
import styles from "./StartArticle.module.css";
import TextBlock from "../TextBlock/TextBlock";

function StartArticle({ content }) {
  return (
    <div className={styles.intro}>
      <article>
        <div className={styles.welcome}>
          <h1>Zano Documentation</h1>
          <span>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
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
