"use client";

import { Button as RadixButton } from "@radix-ui/themes";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "../styles/styleVariable.stylex";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof RadixButton>,
  "size"
> & {
  size?: ButtonSize;
};

export default function Button({
  children,
  size = "md",
  ...buttonProps
}: ButtonProps) {
  return (
    <RadixButton {...props(styles.button, sizeStyles[size])} {...buttonProps}>
      {children}
    </RadixButton>
  );
}

const styles = create({
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeVariable.size8,
    borderRadius: sizeVariable.size8,
    borderWidth: sizeVariable.size1,
    borderStyle: "solid",
    borderColor: colorVariable.transparent,
    backgroundColor: colorVariable.subBackground,
    color: colorVariable.white,
    cursor: "pointer",
    transition: "border-color 150ms ease, color 150ms ease, opacity 150ms ease",
    ":hover": {
      borderColor: colorVariable.orange,
      color: colorVariable.orange,
    },
    ":disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});

const sizeStyles = create({
  sm: {
    height: sizeVariable.size32,
    fontSize: sizeVariable.size12,
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  md: {
    height: sizeVariable.size36,
    fontSize: "14px",
    paddingLeft: sizeVariable.size12,
    paddingRight: sizeVariable.size12,
  },
  lg: {
    height: "44px",
    fontSize: sizeVariable.size16,
    paddingLeft: "14px",
    paddingRight: "14px",
  },
});
