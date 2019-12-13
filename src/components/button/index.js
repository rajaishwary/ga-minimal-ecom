import React from "react";
import { StyledBtn } from "./styles";

const Button = props => {
  return <StyledBtn onClick={props.onClick}>{props.children}</StyledBtn>;
};

export default Button;
