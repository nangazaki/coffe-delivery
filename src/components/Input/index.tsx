import React, { InputHTMLAttributes, forwardRef } from "react";
import { InputStyleContainer } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <InputStyleContainer {...props} ref={ref} />
    )
  }
)
