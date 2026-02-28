import { Tabs } from "radix-ui";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "../../styles/styleVariable.stylex";

export default function TabsTrigger({
  value,
  color,
  children,
}: {
  value: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <Tabs.Trigger
      value={value}
      {...props(styles.trigger)}
      style={{ "--tab-color": color } as React.CSSProperties}
    >
      {children}
    </Tabs.Trigger>
  );
}

const styles = create({
  trigger: {
    backgroundColor: "transparent",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "14px",
    paddingRight: "14px",
    borderRadius: sizeVariable.size16,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    transition: "color 0.15s, border-color 0.15s",
    ":is([data-state='active'])": {
      color: "var(--tab-color)",
      borderColor: "var(--tab-color)",
    },
    ":hover": {
      backgroundColor: colorVariable.subBackground,
    },
  },
});
