import React from "react";
import styles from "./TextBlock.module.css";

function TextBlock({ content }) {
  return (
    <div className={styles.container}>
      <h2>{content.title}</h2>
      {content.items.map((item, i) => (
        <TextBlockItem
          key={i}
          textBlockLink={item.link}
          textBlockLinkText={item.linkText}
          textBlockContent={item.content}
        />
      ))}
    </div>
  );
}

function TextBlockItem(props) {
  return (
    <>
      <span>
        {props.textBlockLinkText && (
          <a href={props.textBlockLink}>{props.textBlockLinkText + " - "}</a>
        )}
        {props.textBlockContent}
      </span>
    </>
  );
}

export default TextBlock;
