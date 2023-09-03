import React from "react";
import Link from "@docusaurus/Link";

const Button =  ({ text, link }) => <Link to={link}>{text}</Link>;

export default Button;
