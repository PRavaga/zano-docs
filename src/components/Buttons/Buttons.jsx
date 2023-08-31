import React from "react";
import Link from "@docusaurus/Link";

const buttons = [
  {
    text: "Users",
    link: "docs/use/intro",
  },
];

const Button = ({ text, link }) => <Link to={link}>{text}</Link>;

const Buttons = () => {
  return (
    <div>
      {buttons.map((button) => (
        <Button key={button.text} text={button.text} link={button.link} />
      ))}
    </div>
  );
};

export default Buttons;
