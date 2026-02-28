import { Tabs } from "radix-ui";
import { create, props } from "@stylexjs/stylex";

export default function TabsList({ children }: { children: React.ReactNode }) {
  return <Tabs.List {...props(styles.list)}>{children}</Tabs.List>;
}

const styles = create({
  list: {
    display: "flex",

    gap: "4px",
  },
});
