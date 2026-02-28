"use client";

import { TextField } from "@radix-ui/themes";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "../styles/styleVariable.stylex";

type InputProps = Omit<
  React.ComponentPropsWithoutRef<typeof TextField.Root>,
  "size"
> & {
  size?: TextField.RootProps["size"];
};

export default function Input({ size = "1", ...inputProps }: InputProps) {
  return (
    <TextField.Root size={size} radius="medium" color="gray" {...inputProps} />
  );
}
