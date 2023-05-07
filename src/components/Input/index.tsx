import React, { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({...props}: InputProps) {
  return <InputStyleContainer {...props} />
}
